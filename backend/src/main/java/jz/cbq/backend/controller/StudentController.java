package jz.cbq.backend.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import jz.cbq.backend.vo.Result;
import jz.cbq.backend.entity.*;
import jz.cbq.backend.entity.Class;
import jz.cbq.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * AdminController
 *
 * @author caobaoqi
 */
@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private IStudentService studentService;
    @Autowired
    private IClassService classService;
    @Autowired
    private ITeacherService teacherService;
    @Autowired
    private IMajorService majorService;
    @Autowired
    private ICourseService courseService;
    @Autowired
    private IChooseCourseService chooseCourseService;
    @Autowired
    private IScoreService scoreService;
    @Autowired
    private IStuMessageService stuMessageService;
    @Autowired
    private ITeaMessageService teaMessageService;


    @Autowired
    private RedisTemplate<String, String> redisTemplate;//设置泛型String

    @Transactional
    @PostMapping("/add")
    public Result addStu(@RequestBody Student student) {
        String admissionYear = student.getAdmissionYear();
        String majorName = student.getMajorName();
        String classId = student.getClassId();//2019011
        String stuIdCard = student.getStuIdCard();
        String stuName = student.getStuName();

        LambdaQueryWrapper<Student> stuQueryWrapper = new LambdaQueryWrapper<>();
        stuQueryWrapper.eq(Student::getStuIdCard, stuIdCard);
        Student repeatStuIDCard = studentService.getOne(stuQueryWrapper);
        if (null != repeatStuIDCard) {
            return Result.fail("该用户已注册学生");
        }

        LambdaQueryWrapper<Teacher> teaQueryWrapper = new LambdaQueryWrapper<>();//根据身份证查询班主任表
        teaQueryWrapper.eq(Teacher::getTeaIdCard, stuIdCard);
        Teacher repeatTeaIDCard = teacherService.getOne(teaQueryWrapper);
        if (null != repeatTeaIDCard) {
            return Result.fail("该用户已注册班主任");
        }

        String nextStuId = studentService.findNextStuId(classId);
        student.setStuId(nextStuId);

        LambdaQueryWrapper<Class> classQueryWrapper = new LambdaQueryWrapper<>();//根据classId查询班级表
        classQueryWrapper.eq(Class::getClassId, classId);
        Class class1 = classService.getOne(classQueryWrapper);
        if (StringUtils.isEmpty(class1.getTeaName())) {//班级没班主任
            student.setTeaName("");
            student.setTeaId("");
        } else if (!StringUtils.isEmpty(class1.getTeaName())) {
            LambdaQueryWrapper<Teacher> teaQueryWrapper2 = new LambdaQueryWrapper<>();//根据班级编号查询班主任表
            teaQueryWrapper2.eq(Teacher::getClassId, classId).last("limit 1");
            Teacher teacher = teacherService.getOne(teaQueryWrapper2);
            student.setTeaId(teacher.getTeaId());
            student.setTeaName(teacher.getTeaName());
        }
        student.setMajorId(classId.substring(4, 6));//2022 01 1
        student.setClassName(admissionYear + "级" + majorName + classId.substring(6, 7) + "班");
        student.setClassNo(classId.substring(6, 7));
        student.setCreateTime(new Date());
        student.setStuPwd(passwordEncoder.encode(stuIdCard.substring(12, 18)));
        boolean save = studentService.save(student);
        if (save) {
            LambdaUpdateWrapper<Class> classUpdateWrapper = new LambdaUpdateWrapper<>();
            classUpdateWrapper.setSql("stu_total=stu_total+1").eq(Class::getClassId, classId);
            //@Async("taskExecutor")
            classService.update(classUpdateWrapper);

            LambdaUpdateWrapper<Major> majorUpdateWrapper = new LambdaUpdateWrapper<>();
            majorUpdateWrapper.setSql("stu_total=stu_total+1").eq(Major::getMajorId, student.getMajorId());
            //@Async("taskExecutor")
            majorService.update(majorUpdateWrapper);
            System.out.println("线程" + Thread.currentThread().getName() + " 执行异步任务：" + student.getStuId());
            return Result.success("添加学生成功");
        }
        return Result.fail("添加学生失败");
    }

    @GetMapping("/stuPageList")
    public Result stuPageList(int pageNum, int pageSize,
                              @RequestParam(value = "stuId", required = false) String stuId,
                              @RequestParam(value = "stuName", required = false) String stuName,
                              @RequestParam(value = "className", required = false) String className) {
        Map<String, Object> data = new HashMap<>();
        Page<Student> page = new Page<>(pageNum, pageSize);
        LambdaQueryWrapper<Student> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.like(StringUtils.hasLength(stuId), Student::getStuId, stuId)
                .like(StringUtils.hasLength(stuName), Student::getStuName, stuName)
                .like(StringUtils.hasLength(className), Student::getClassName, className)
                .orderByDesc(Student::getCreateTime);
        studentService.page(page, queryWrapper);
        data.put("stuList", page.getRecords());
        data.put("total", page.getTotal());
        return Result.success(data);
    }

    @Transactional
    @DeleteMapping("/delete")
    public Result deleteStu(String stuId) {//202004201
        LambdaQueryWrapper<Score> scoreQueryWrapper = new LambdaQueryWrapper<>();
        scoreQueryWrapper.eq(Score::getStuId,stuId);
        Score scoreDatabase = scoreService.getOne(scoreQueryWrapper);

        LambdaQueryWrapper<StuMessage> stuMessageQueryWrapper = new LambdaQueryWrapper<>();
        stuMessageQueryWrapper.eq(StuMessage::getStuId,stuId);
        StuMessage stuMessageDatabase = stuMessageService.getOne(stuMessageQueryWrapper);

        LambdaQueryWrapper<TeaMessage> teaMessageQueryWrapper = new LambdaQueryWrapper<>();
        teaMessageQueryWrapper.eq(TeaMessage::getStuId,stuId);
        TeaMessage teaMessageDatabase = teaMessageService.getOne(teaMessageQueryWrapper);

        LambdaQueryWrapper<ChooseCourse> chooseCourseQueryWrapper = new LambdaQueryWrapper<>();
        chooseCourseQueryWrapper.eq(ChooseCourse::getStuId,stuId);
        ChooseCourse chooseCourseDatabase = chooseCourseService.getOne(chooseCourseQueryWrapper);
        if (null!=scoreDatabase||null!=stuMessageDatabase||null!=teaMessageDatabase||null!=chooseCourseDatabase){
            return Result.fail("存在关联信息，无法删除学生");
        }
        LambdaQueryWrapper<Student> studentQueryWrapper = new LambdaQueryWrapper<>();
        studentQueryWrapper.eq(Student::getStuId, stuId);
        Student student1 = studentService.getOne(studentQueryWrapper);
        boolean delStuById = studentService.remove(studentQueryWrapper);
        if (delStuById) {
            LambdaUpdateWrapper<Class> classUpdateWrapper = new LambdaUpdateWrapper<>();
            classUpdateWrapper.setSql("stu_total=stu_total-1").eq(Class::getClassId, student1.getClassId());
            //@Async("taskExecutor")
            classService.update(classUpdateWrapper);

            LambdaUpdateWrapper<Major> majorUpdateWrapper = new LambdaUpdateWrapper<>();
            majorUpdateWrapper.setSql("stu_total=stu_total-1").eq(Major::getMajorId, student1.getMajorId());
            //@Async("taskExecutor")
            majorService.update(majorUpdateWrapper);
            return Result.success("删除学生成功");
        }
        return Result.fail("删除学生失败");
    }

    @GetMapping("/getByStuId")
    public Result getByStuId(String stuId) {
        if (StringUtils.isEmpty(stuId)) {
            return Result.fail("获取学生信息失败");
        }
        LambdaQueryWrapper<Student> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Student::getStuId, stuId);
        Student studentDatabase = studentService.getOne(queryWrapper);
        if (null != studentDatabase) {
            return Result.success(studentDatabase);
        }
        return Result.fail("获取学生信息失败");
    }

    @Transactional
    @PutMapping("editByStuId")
    public Result editByStuId(@RequestBody Student student) {//classNo=2022012,使用户选择后的新值
        LambdaQueryWrapper<Student> stuQueryWrapper = new LambdaQueryWrapper<>();
        stuQueryWrapper.eq(Student::getStuId,student.getStuId());
        student.setStuPwd(passwordEncoder.encode(student.getStuPwd()));
        boolean update = studentService.update(student,stuQueryWrapper);
        if (update) {
            chooseCourseService.updateStuName(student.getStuId(),student.getStuName());//级联更新
            scoreService.updateStuName(student.getStuId(),student.getStuName());
            return Result.success("编辑学生成功");
        }
        return Result.fail("编辑学生失败");
    }

    @GetMapping("/coursePageList")
    public Result coursePageList(int pageNum, int pageSize,
                                 @RequestParam(value = "courseName",required = false) String courseName,
                                 @RequestParam(value = "coursePeriod",required = false) String coursePeriod,
                                 String majorName, Integer schoolPeriodNum) {
        Map<String, Object> data = new HashMap<>();
        List<Course> myAllCourseList=courseService.getMyAllCourseList((pageNum-1)*pageSize,pageSize,courseName,majorName,schoolPeriodNum,coursePeriod);
        Integer total=courseService.getMyAllCourseCount((pageNum-1)*pageSize,pageSize,courseName,majorName,schoolPeriodNum,coursePeriod);
        data.put("courseList",myAllCourseList);
        data.put("total",total);
        return Result.success(data);
    }
}
