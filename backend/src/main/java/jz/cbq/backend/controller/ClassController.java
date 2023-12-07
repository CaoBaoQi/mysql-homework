package jz.cbq.backend.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import jz.cbq.backend.vo.Result;
import jz.cbq.backend.entity.Class;
import jz.cbq.backend.entity.Major;
import jz.cbq.backend.service.IClassService;
import jz.cbq.backend.service.IMajorService;
import jz.cbq.backend.service.ITeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * AdminController
 *
 * @author caobaoqi
 */
@RestController
@RequestMapping("/class")
public class ClassController {
    @Autowired
    private IMajorService majorService;
    @Autowired
    private IClassService classService;
    @Autowired
    private ITeacherService teacherService;
    @Transactional
    @PostMapping("/add")
    public Result addClass(@RequestBody Class class1){
        //根据专业名查询出专业=>专业编号
        LambdaQueryWrapper<Major> majorQueryWrapper = new LambdaQueryWrapper<>();
        majorQueryWrapper.eq(Major::getMajorName,class1.getMajorName()).last("limit 1");
        Major major = majorService.getOne(majorQueryWrapper);//根据专业名查出专业编号01、02、03
        //根据专业编号查询下一个班级编号
        LambdaQueryWrapper<Class> classQueryWrapper = new LambdaQueryWrapper<>();
        classQueryWrapper.likeRight(Class::getClassId,class1.getClassYear()+major.getMajorId()).orderByDesc(Class::getClassId).last("limit 1");
        Class maxClass = classService.getOne(classQueryWrapper);//2020 022
        if (null!=maxClass){
            class1.setClassId(Integer.valueOf(maxClass.getClassId())+1+"");//202051
        }
        else {
            class1.setClassId(class1.getClassYear()+major.getMajorId()+"1");//置1
        }
        class1.setClassName(class1.getClassYear()+"级"+class1.getMajorName()+class1.getClassId().substring(6,7)+"班");
        class1.setCreateTime(new Date());
        class1.setMajorId(major.getMajorId());
        class1.setStuTotal(0);
        boolean save = classService.save(class1);
        if (save){
            LambdaUpdateWrapper<Major> majorUpdateWrapper = new LambdaUpdateWrapper<>();//设置对应专业的班级数+1
            majorUpdateWrapper.setSql("class_total=class_total+1").eq(Major::getMajorName,class1.getMajorName());
            majorService.update(majorUpdateWrapper);
            return Result.success("添加班级成功");
        }
        return Result.fail("添加班级失败");
    }
    @GetMapping("/classPageList")
    public Result classPageList(int pageNum, int pageSize,@RequestParam(value = "className", required = false) String className,
                                @RequestParam(value = "teaName", required = false) String teaName){
        Map<String, Object> data = new HashMap<>();
        Page<Class> page = new Page<>(pageNum, pageSize);
        LambdaQueryWrapper<Class> classQueryWrapper = new LambdaQueryWrapper<>();
        classQueryWrapper.like(StringUtils.hasLength(className), Class::getClassName, className)
                .like(StringUtils.hasLength(teaName),Class::getTeaName,teaName).orderByDesc(Class::getCreateTime);
        classService.page(page,classQueryWrapper);
        data.put("classList",page.getRecords());
        data.put("total",page.getTotal());
        if (data.size()==0){
            return Result.fail("分页查询班级失败");
        }
        return Result.success(data);
    }
    @Transactional
    @DeleteMapping("/delClassById")
    public Result delClassById(String classId){
//        LambdaQueryWrapper<Teacher> teaQueryWrapper = new LambdaQueryWrapper<>();
//        teaQueryWrapper.eq(Teacher::getClassId,classId);
//        Teacher teacher = teacherService.getOne(teaQueryWrapper);
//        if (null!=teacher){
//            return Result.fail("改班级还有班主任无法删除");
//        }
        LambdaQueryWrapper<Class> classQueryWrapper = new LambdaQueryWrapper<>();
        classQueryWrapper.eq(Class::getClassId,classId);
        Class class1 = classService.getOne(classQueryWrapper);
        boolean remove = classService.remove(classQueryWrapper);
        if (remove){
            LambdaUpdateWrapper<Major> majorUpdateWrapper = new LambdaUpdateWrapper<>();
            majorUpdateWrapper.setSql("class_total=class_total-1").eq(Major::getMajorId,class1.getMajorId());
            majorService.update(majorUpdateWrapper);
            return Result.success("删除班级成功");
        }
        return Result.fail("删除班级失败");
    }
    @GetMapping("getClassesByMajorName")
    public Result getClassesByMajorName(String majorName,String classYear){
        LambdaQueryWrapper<Class> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Class::getMajorName,majorName).eq(Class::getClassYear,classYear);
        List<Class> classes = classService.list(queryWrapper);
        return Result.success(classes);
    }

}
