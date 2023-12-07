package jz.cbq.backend.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import jz.cbq.backend.entity.ChooseCourse;
import jz.cbq.backend.service.IChooseCourseService;
import jz.cbq.backend.service.ICourseService;
import jz.cbq.backend.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * AdminController
 *
 * @author caobaoqi
 */
@RestController
@RequestMapping("/chooseCourse")
public class ChooseCourseController {
    @Autowired
    private IChooseCourseService chooseCourseService;
    @Autowired
    private ICourseService courseService;
    @Transactional
    @PostMapping("/add")
    public Result add(@RequestBody ChooseCourse chooseCourse){
        String courseId = chooseCourse.getCourseId();
        String stuId = chooseCourse.getStuId();
        String courseName = chooseCourse.getCourseName();
        String majorName = chooseCourse.getMajorName();
        String ifDegree = chooseCourse.getIfDegree();
        String coursePeriod = chooseCourse.getCoursePeriod();
        String chooseCourseId=stuId+"choose"+courseId;
        chooseCourse.setChooseCourseId(chooseCourseId);

        chooseCourse.setCreateTime(new Date());
        chooseCourse.setState(1);

        boolean save = chooseCourseService.save(chooseCourse);
        if (save){//线程池
            courseService.updateStuChooseNum(courseId);
            return Result.success("选课成功");
        }
        return Result.fail("选课失败");
    }

    @GetMapping("/getCanScoreCourse")
    public Result getCanScoreCourse(String stuId){
        LambdaQueryWrapper<ChooseCourse> chooseCourseQueryWrapper = new LambdaQueryWrapper<>();
        chooseCourseQueryWrapper.eq(ChooseCourse::getStuId,stuId);
        List<ChooseCourse> canScoreCourseList = chooseCourseService.list(chooseCourseQueryWrapper);
        return Result.success(canScoreCourseList);
    }
    @Transactional
    @DeleteMapping("/cancelChooseCourse")
    public Result cancelChooseCourse(){
        long start=System.currentTimeMillis();
        int cancelChooseCourse=chooseCourseService.cancelChooseCourse();
        if (cancelChooseCourse>=1){
            courseService.updateChooseCourseNum();
            long end=System.currentTimeMillis();
            return Result.success("一键退课完毕,服务器花费时间" + (end - start) + "ms");
        }
        return Result.fail("一键退课失败");
    }
}
