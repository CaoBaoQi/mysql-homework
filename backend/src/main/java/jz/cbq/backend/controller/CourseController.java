package jz.cbq.backend.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import jz.cbq.backend.vo.Result;
import jz.cbq.backend.entity.Course;
import jz.cbq.backend.entity.Major;
import jz.cbq.backend.service.ICourseService;
import jz.cbq.backend.service.IMajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.locks.ReentrantLock;

/**
 * AdminController
 *
 * @author caobaoqi
 */
@RestController
@RequestMapping("/course")
public class CourseController {
    @Autowired
    private IMajorService majorService;
    @Autowired
    private ICourseService courseService;
    @Transactional
    @PostMapping("/add")
    public Result addCourse(@RequestBody Course course) {
        String courseName = course.getCourseName();
        LambdaQueryWrapper<Course> courseQueryWrapper = new LambdaQueryWrapper<>();
        courseQueryWrapper.eq(Course::getCourseName,courseName).last("limit 1");
        Course courseDatabase = courseService.getOne(courseQueryWrapper);
        if (null!=courseDatabase){
            return Result.fail("存在同名课程，添加失败");
        }
        String majorName = course.getMajorName();
        LambdaQueryWrapper<Major> majorQueryWrapper = new LambdaQueryWrapper<>();
        majorQueryWrapper.eq(Major::getMajorName, majorName).last("limit 1");
        Major major = majorService.getOne(majorQueryWrapper);
        course.setMajorId(major.getMajorId());
        course.setCreateTime(new Date());
        String nextCourseId = courseService.findNextCourseId(major.getMajorId());
        course.setCourseId(nextCourseId);
        course.setStuChooseNum(0);
        boolean save = courseService.save(course);
        if (save) {
            LambdaUpdateWrapper<Major> majorUpdateWrapper = new LambdaUpdateWrapper<>();
            majorUpdateWrapper.setSql("course_total=course_total+1").eq(Major::getMajorName,course.getMajorName());
            majorService.update(majorUpdateWrapper);
            return Result.success("添加课程成功");
        }
        return Result.fail("添加课程失败");
    }

    @GetMapping("/coursePageList")
    public Result coursePageList(int pageNum, int pageSize, @RequestParam(value = "courseName") String courseName,
                                 @RequestParam(value = "majorName") String majorName,
                                 @RequestParam(value = "coursePeriod") String coursePeriod) {
        Map<String, Object> data = new HashMap<>();
        Page<Course> page = new Page<>(pageNum, pageSize);
        LambdaQueryWrapper<Course> courseQueryWrapper = new LambdaQueryWrapper<>();
        courseQueryWrapper.like(StringUtils.hasLength(courseName), Course::getCourseName, courseName)
                .like(StringUtils.hasLength(majorName),Course::getMajorName,majorName)
                .eq(StringUtils.hasLength(coursePeriod),Course::getCoursePeriod,coursePeriod)
                .orderByDesc(Course::getCreateTime);
        courseService.page(page,courseQueryWrapper);
        data.put("courseList",page.getRecords());
        data.put("total",page.getTotal());
        return Result.success(data);
    }
    @GetMapping("/getCourseById")
    public Result getCourseById(String courseId){
        LambdaQueryWrapper<Course> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Course::getCourseId,courseId).last("limit 1");
        Course course = courseService.getOne(queryWrapper);
        if (null!=course){
            return Result.success(course);
        }
        return Result.fail("打开编辑表单失败");
    }
    @Transactional
    @PutMapping("/edit")
    public Result editCourseById(@RequestBody Course course){
        LambdaQueryWrapper<Course> courseQueryWrapper = new LambdaQueryWrapper<>();
        courseQueryWrapper.eq(Course::getCourseId,course.getCourseId());
        Course courseDatabase = courseService.getOne(courseQueryWrapper);
        LambdaUpdateWrapper<Course> courseUpdateWrapper = new LambdaUpdateWrapper<>();
        courseUpdateWrapper.eq(Course::getCourseId,course.getCourseId());
        boolean update = courseService.update(course,courseUpdateWrapper);
        if (update){
            return Result.success("修改课程成功");
        }
        return Result.fail("修改课程失败");
    }
    @Transactional
    @DeleteMapping("/delCourseById")
    public Result delCourseById(String courseId){
        LambdaQueryWrapper<Course> courseQueryWrapper = new LambdaQueryWrapper<>();
        courseQueryWrapper.eq(Course::getCourseId,courseId);
        Course course = courseService.getOne(courseQueryWrapper);
        boolean remove = courseService.remove(courseQueryWrapper);
        if (remove){
            LambdaUpdateWrapper<Major> majorUpdateWrapper = new LambdaUpdateWrapper<>();
            majorUpdateWrapper.setSql("course_total=course_total-1").eq(Major::getMajorId,course.getMajorId());
            majorService.update(majorUpdateWrapper);
            return Result.success("删除课程成功");
        }
        return Result.fail("删除课程失败");
    }

    @GetMapping("/getScoreCourse")
    public Result getScoreCourse(String majorId,String admissionYear){
        int nowYear=new Date().getYear()+1900;//2023
        int nowMonth = new Date().getMonth() + 1;//4
        if (nowMonth >= 3 || nowMonth < 9) {//下学期
            if (nowYear-Integer.parseInt(admissionYear)>=4){
                List<Course> courseList = courseService.courseList42(majorId);
                return Result.success(courseList);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=3) {
                List<Course> courseList = courseService.courseList32(majorId);
                return Result.success(courseList);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=2) {
                List<Course> courseList = courseService.courseList22(majorId);
                return Result.success(courseList);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=1) {
                List<Course> courseList = courseService.courseList12(majorId);
                return Result.success(courseList);
            }
        }
        else {
            if (nowYear-Integer.parseInt(admissionYear)>=4){
                List<Course> courseList = courseService.courseList51(majorId);
                return Result.success(courseList);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=3) {
                List<Course> courseList = courseService.courseList41(majorId);
                return Result.success(courseList);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=2) {
                List<Course> courseList = courseService.courseList31(majorId);
                return Result.success(courseList);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=1) {
                List<Course> courseList = courseService.courseList21(majorId);
                return Result.success(courseList);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=0) {
                List<Course> courseList = courseService.courseList11(majorId);
                return Result.success(courseList);
            }
        }
        return Result.fail();
    }
}
