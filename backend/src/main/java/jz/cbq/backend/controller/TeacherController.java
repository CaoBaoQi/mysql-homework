package jz.cbq.backend.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import jz.cbq.backend.vo.Result;
import jz.cbq.backend.entity.Class;
import jz.cbq.backend.entity.Major;
import jz.cbq.backend.entity.Student;
import jz.cbq.backend.entity.Teacher;
import jz.cbq.backend.service.IClassService;
import jz.cbq.backend.service.IMajorService;
import jz.cbq.backend.service.IStudentService;
import jz.cbq.backend.service.ITeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * AdminController
 *
 * @author caobaoqi
 */
@RestController
@RequestMapping("/teacher")
public class TeacherController {
    @Autowired
    private ITeacherService teacherService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private IStudentService studentService;
    @Autowired
    private IClassService classService;
    @Autowired
    private IMajorService majorService;
    @Transactional
    @PostMapping("add")//同步更新专业表的班主任数量，以及班级表和学生表的班主任姓名
    public Result addTea(@RequestBody Teacher teacher) {
        //对应专业班主任数量+1，对应班级的班主任更新
        String classYear = teacher.getClassYear();
        String majorName = teacher.getMajorName();
        String classId = teacher.getClassId();//2020031
        String teaName = teacher.getTeaName();
        String teaIdCard = teacher.getTeaIdCard();
        teacher.setClassName(classYear + "级" + majorName + classId.substring(6, 7) + "班");
        String className = teacher.getClassName();

        LambdaQueryWrapper<Teacher> queryWrapper1 = new LambdaQueryWrapper<>();
        queryWrapper1.eq(Teacher::getClassId, classId);
        Teacher one = teacherService.getOne(queryWrapper1);
        //这一步前端已解决，切换专业，班号不变
        LambdaQueryWrapper<Teacher> queryWrapper2 = new LambdaQueryWrapper<>();
        queryWrapper2.eq(Teacher::getClassName, className);
        Teacher one2 = teacherService.getOne(queryWrapper2);
        if (null != one || null != one2) {
            return Result.fail("该班级已有班主任");
        }
        LambdaQueryWrapper<Teacher> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Teacher::getTeaIdCard, teaIdCard).last("limit 1");
        Teacher one1 = teacherService.getOne(queryWrapper);
        if (null != one1) {
            return Result.fail("该用户已注册班主任编号");
        }
        LambdaQueryWrapper<Student> stuQueryWrapper = new LambdaQueryWrapper<>();
        stuQueryWrapper.eq(Student::getStuIdCard, teaIdCard).last("limit 1");
        Student student = studentService.getOne(stuQueryWrapper);
        if (null != student) {
            return Result.fail("该用户已注册学生");
        }
        teacher.setTeaId("tea" + classId);
        teacher.setMajorId(classId.substring(4, 6));
        teacher.setCreateTime(new Date());
        teacher.setClassNo(classId.substring(6, 7));
        teacher.setTeaPwd(passwordEncoder.encode(teacher.getTeaIdCard().substring(12, 18)));//设置密码
        boolean save = teacherService.save(teacher);
        if (save) {
            LambdaUpdateWrapper<Student> stuUpdateWrapper = new LambdaUpdateWrapper<>();
            stuUpdateWrapper.set(Student::getTeaName,teaName).set(Student::getTeaId,teacher.getTeaId()).eq(Student::getClassId,classId);
            studentService.update(stuUpdateWrapper);

            LambdaUpdateWrapper<Class> classUpdateWrapper = new LambdaUpdateWrapper<>();
            classUpdateWrapper.set(Class::getTeaName, teacher.getTeaName()).eq(Class::getClassId, classId);
            classService.update(classUpdateWrapper);

            LambdaUpdateWrapper<Major> majorUpdateWrapper = new LambdaUpdateWrapper<>();
            majorUpdateWrapper.setSql("tea_total=tea_total+1").eq(Major::getMajorId, teacher.getMajorId());
            majorService.update(majorUpdateWrapper);

            return Result.success("添加班主任成功,班主任编号为" + teacher.getTeaId());
        }
        return Result.fail("添加班主任失败");
    }

    @GetMapping("/teaPageList")
    public Result teaPageList(int pageNum, int pageSize, @RequestParam(value = "teaId", required = false) String teaId,
                              @RequestParam(value = "teaName", required = false) String teaName,
                              @RequestParam(value = "className", required = false) String className) {
        Map<String, Object> data = new HashMap<>();
        Page<Teacher> page = new Page<>(pageNum, pageSize);
        LambdaQueryWrapper<Teacher> teaQueryWrapper = new LambdaQueryWrapper<>();
        teaQueryWrapper.like(StringUtils.hasLength(teaName), Teacher::getTeaName, teaName)
                .like(StringUtils.hasLength(teaId), Teacher::getTeaId, teaId)
                .like(StringUtils.hasLength(className), Teacher::getClassName, className)
                .orderByDesc(Teacher::getCreateTime);
        teacherService.page(page, teaQueryWrapper);
        data.put("teaList", page.getRecords());
        data.put("total", page.getTotal());
        return Result.success(data);
    }

    @GetMapping("/getTeaById")//初始化班主任个人信息维护
    public Result getTeaById(String teaId) {
        LambdaQueryWrapper<Teacher> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Teacher::getTeaId, teaId).last("limit 1");
        Teacher one = teacherService.getOne(queryWrapper);
        if (null != one) {
            return Result.success(one);
        }
        return Result.fail("打开编辑表单失败");
    }

    @PutMapping("/editById")//级联更新班级表和学生表的班主任姓名
    public Result editById(@RequestBody Teacher teacher) {//只能改班主任名字，密码，级联更新学生表，班级表的班主任姓名
        LambdaUpdateWrapper<Teacher> teacherUpdateWrapper = new LambdaUpdateWrapper<>();
        teacherUpdateWrapper.eq(Teacher::getTeaId, teacher.getTeaId());
        teacher.setTeaPwd(passwordEncoder.encode(teacher.getTeaPwd()));//从表单获取密码并更新密码
        boolean update = teacherService.update(teacher, teacherUpdateWrapper);
        if (update) {
            //级联更新
            LambdaUpdateWrapper<Class> classUpdateWrapper = new LambdaUpdateWrapper<>();
            classUpdateWrapper.set(Class::getTeaName,teacher.getTeaName()).eq(Class::getClassId,teacher.getClassId());
            classService.update(classUpdateWrapper);

            LambdaUpdateWrapper<Student> stuUpdateWrapper = new LambdaUpdateWrapper<>();
            stuUpdateWrapper.set(Student::getTeaName,teacher.getTeaName()).eq(Student::getTeaId,teacher.getTeaId());
            studentService.update(stuUpdateWrapper);

            return Result.success("编辑成功");
        }
        return Result.fail("编辑失败");
    }
    @DeleteMapping("/delTea")
    public Result delTea(String teaId){
        LambdaQueryWrapper<Teacher> teaQueryWrapper = new LambdaQueryWrapper<>();
        teaQueryWrapper.eq(Teacher::getTeaId,teaId);
        Teacher teacher = teacherService.getOne(teaQueryWrapper);
        boolean remove = teacherService.remove(teaQueryWrapper);
        if (remove){
            LambdaUpdateWrapper<Student> stuUpdateWrapper = new LambdaUpdateWrapper<>();
            stuUpdateWrapper.set(Student::getTeaName,"").set(Student::getTeaId,"").eq(Student::getTeaId,teaId);
            studentService.update(stuUpdateWrapper);

            LambdaUpdateWrapper<Class> classUpdateWrapper = new LambdaUpdateWrapper<>();
            classUpdateWrapper.set(Class::getTeaName,"").eq(Class::getClassId, teacher.getClassId());
            classService.update(classUpdateWrapper);

            LambdaUpdateWrapper<Major> majorUpdateWrapper = new LambdaUpdateWrapper<>();
            majorUpdateWrapper.setSql("tea_total=tea_total-1").eq(Major::getMajorId, teacher.getMajorId());
            majorService.update(majorUpdateWrapper);

            return Result.success("删除班主任成功");
        }
        return Result.fail("删除班主任失败");
    }
}
