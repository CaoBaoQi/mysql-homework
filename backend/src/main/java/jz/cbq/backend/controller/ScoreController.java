package jz.cbq.backend.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import jz.cbq.backend.entity.ChooseCourse;
import jz.cbq.backend.entity.Course;
import jz.cbq.backend.entity.Score;
import jz.cbq.backend.entity.StuScoreMap;
import jz.cbq.backend.service.IChooseCourseService;
import jz.cbq.backend.service.ICourseService;
import jz.cbq.backend.service.IScoreService;
import jz.cbq.backend.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * AdminController
 *
 * @author caobaoqi
 */
@RestController
@RequestMapping("/score")
public class ScoreController {
    @Autowired
    private IScoreService scoreService;
    @Autowired
    private IChooseCourseService chooseCourseService;
    @Autowired
    private ICourseService courseService;

    @GetMapping("getScoreByCourseName")//获取某科成绩的分数
    public Result getScoreByCourseName(String courseName, String stuId) {
        LambdaQueryWrapper<Score> scoreQueryWrapper = new LambdaQueryWrapper<>();
        scoreQueryWrapper.eq(Score::getCourseName, courseName).eq(Score::getStuId, stuId);
        Score score = scoreService.getOne(scoreQueryWrapper);
        if (null != score) {//打分了
            return Result.success(score.getScore());
        }
        return Result.success();
    }

    //打分
    @PutMapping("/giveNewScore")
    public Result giveNewScore(@RequestBody Score score) {

        String stuId = score.getStuId();
        String courseName = score.getCourseName();
        LambdaQueryWrapper<ChooseCourse> chooseCourseQueryWrapper = new LambdaQueryWrapper<>();
        chooseCourseQueryWrapper.eq(ChooseCourse::getCourseName, courseName).eq(ChooseCourse::getStuId, stuId);
        ChooseCourse chooseCourseDatabase = chooseCourseService.getOne(chooseCourseQueryWrapper);//查到唯一一条选课记录
        String chooseCourseId = chooseCourseDatabase.getChooseCourseId();

        LambdaQueryWrapper<Score> scoreQueryWrapper = new LambdaQueryWrapper<>();
        scoreQueryWrapper.eq(Score::getStuId, stuId).eq(Score::getChooseCourseId, chooseCourseId);
        Score scoreDatabase = scoreService.getOne(scoreQueryWrapper);

        if (null != scoreDatabase) {//修改分数
            LambdaUpdateWrapper<Score> scoreLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
            scoreLambdaUpdateWrapper.eq(Score::getStuId, stuId).eq(Score::getChooseCourseId, chooseCourseId);
            scoreService.update(score, scoreLambdaUpdateWrapper);
            return Result.success("更新分数成功");
        } else if (null == scoreDatabase) {//新增分数
            score.setChooseCourseId(chooseCourseId);
            score.setScoreId(stuId + "-" + chooseCourseId);
            score.setCreateTime(new Date());
            scoreService.save(score);
            return Result.success("初次打分成功");
        }

        return Result.fail("打分失败");
    }

    @GetMapping("/getStuScoreList")//返回表格数据
    public Result getStuScoreList( @RequestParam(value = "stuName", required = false) String stuName,//201901
                                  @RequestParam(value = "stuId", required = false) String stuId,
                                  @RequestParam(value = "className", required = false) String className,String admissionYearMajor,int pageNum, int pageSize) {
        HashMap<String, Object> data = new HashMap<>();
        int nowYear=new Date().getYear()+1900;//2023
        int nowMonth = new Date().getMonth() + 1;//4
        String admissionYear=admissionYearMajor.substring(0,4);//2019
        String majorId=admissionYearMajor.substring(4,6);//01
        List<Course> courseList = new ArrayList<>();
        if (nowMonth >= 3 || nowMonth < 9) {//下学期
            if (nowYear-Integer.parseInt(admissionYear)>=4){//大一
                courseList = courseService.courseList42(majorId);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=3) {
                courseList = courseService.courseList32(majorId);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=2) {
                courseList = courseService.courseList22(majorId);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=1) {
                courseList = courseService.courseList12(majorId);
            }
        }
        else {
            if (nowYear-Integer.parseInt(admissionYear)>=4){
                courseList = courseService.courseList51(majorId);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=3) {
                courseList = courseService.courseList41(majorId);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=2) {
                courseList = courseService.courseList31(majorId);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=1) {
                courseList = courseService.courseList21(majorId);
            }
            else if (nowYear-Integer.parseInt(admissionYear)>=0) {
                courseList = courseService.courseList11(majorId);
            }
        }

        List<StuScoreMap> stuScoreList = scoreService.getStuScoreList(admissionYearMajor, stuName,stuId,className,(pageNum-1)*pageSize,pageSize);
        int total=scoreService.getStuScoreTotal(admissionYearMajor, stuName,stuId,className,(pageNum-1)*pageSize,pageSize);
        for (StuScoreMap stuScoreMap : stuScoreList) {
            List<Integer> courseScoreList = new ArrayList<>();
            for (Course course : courseList) {
                LambdaQueryWrapper<Score> scoreQueryWrapper = new LambdaQueryWrapper<>();
                scoreQueryWrapper.eq(Score::getChooseCourseId,stuScoreMap.getStuId()+"choose"+course.getCourseId());
                Score scoreDatabase = scoreService.getOne(scoreQueryWrapper);
                if (null==scoreDatabase){
                    courseScoreList.add(0);
                }
                else {
                    courseScoreList.add(scoreDatabase.getScore());
                }
                stuScoreMap.setCourseScore(courseScoreList);
            }
        }
        data.put("stuScoreList",stuScoreList);
        data.put("total",total);
        return Result.success(data);
    }
    @DeleteMapping("/cancelAllScore")
    public Result cancelAllScore(){
        long start=System.currentTimeMillis();
        int cancelAllScore=scoreService.cancelAllScore();
        if (cancelAllScore>=1){
            long end=System.currentTimeMillis();
            return Result.success("一键分数置空完毕,服务器花费时间" + (end - start) + "ms");
        }
        return Result.fail("一键分数置空失败");
    }
}
