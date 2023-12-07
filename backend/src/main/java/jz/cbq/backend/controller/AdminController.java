package jz.cbq.backend.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import jz.cbq.backend.entity.*;
import jz.cbq.backend.service.*;
import jz.cbq.backend.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;
import java.util.Random;


/**
 * AdminController
 *
 * @author caobaoqi
 */
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Value("${adminSecret}")
    private String adminSecret;
    @Autowired
    private IAdminService adminService;
    @Resource
    private PasswordEncoder passwordEncoder;
    @Autowired
    private IStudentService studentService;
    @Autowired
    private ICourseService courseService;
    @Autowired
    private IMajorService majorService;
    @Autowired
    private IChooseCourseService chooseCourseService;
    @Autowired
    private IScoreService scoreService;
    @Autowired
    private ILoginService loginService;
    @PostMapping("/add")
    public Result addAdmin(@RequestBody Admin admin, String adminSecret) {
        if (adminSecret.equals(this.adminSecret)) {
            String adminId = adminService.getNextId();
            admin.setAdminId(adminId);
            admin.setAdminPwd(passwordEncoder.encode(admin.getAdminPwd()));
            admin.setCreateTime(new Date());
            boolean save = adminService.save(admin);
            if (save) {
                return Result.success("注册管理员成功,你的管理员账号为" + admin.getAdminId());
            } else {
                return Result.fail("系统错误，注册管理员失败");
            }
        }
        return Result.fail("管理员密钥错误");
    }

    @GetMapping("/getAdminById")
    public Result getAdminById(String adminId) {
        if (StringUtils.isBlank(adminId)) {
            return Result.fail("获取管理员信息失败");
        }
        LambdaQueryWrapper<Admin> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Admin::getAdminId, adminId);
        Admin adminDatabase = adminService.getOne(queryWrapper);
        return Result.success(adminDatabase);
    }

    @PutMapping("/editAdmin")
    public Result editAdmin(@RequestBody Admin admin) {
        LambdaUpdateWrapper<Admin> adminUpdateWrapper = new LambdaUpdateWrapper<>();
        adminUpdateWrapper.eq(Admin::getAdminId, admin.getAdminId());
        admin.setAdminPwd(passwordEncoder.encode(admin.getAdminPwd()));
        boolean update = adminService.update(admin, adminUpdateWrapper);
        if (update) {
            return Result.success("更新个人信息成功");
        }
        return Result.fail("更新个人信息失败");
    }

    //一键帮助学生选课
    @Transactional
    @GetMapping("/adminChooseCourse")
    public Result adminChooseCourse() {
        Long start = System.currentTimeMillis();
//        adminService.adminChooseCourse();
        //查询所有专业
        List<Major> majorList = majorService.list();

        int nowYear = new Date().getYear() + 1900;//2023
        int nowMonth = new Date().getMonth() + 1;//4


        if (nowMonth >= 3 || nowMonth < 9) {
            //下学期
            for (Major major : majorList) {
                List<Student> studentList42 = studentService.studentList42(nowYear, major.getMajorId());//大四下
                List<Student> studentList32 = studentService.studentList32(nowYear, major.getMajorId());//大三下
                List<Student> studentList22 = studentService.studentList22(nowYear, major.getMajorId());//大二下
                List<Student> studentList12 = studentService.studentList12(nowYear, major.getMajorId());//大一下
                List<Course> courseList42Must = courseService.courseList42Must(major.getMajorId());
                List<Course> courseList32Must = courseService.courseList32Must(major.getMajorId());
                List<Course> courseList22Must = courseService.courseList22Must(major.getMajorId());
                List<Course> courseList12Must = courseService.courseList12Must(major.getMajorId());

                listChooseCourse(studentList42, courseList42Must);

                listChooseCourse(studentList32, courseList32Must);


                listChooseCourse(studentList22, courseList22Must);

                listChooseCourse(studentList12, courseList12Must);
            }
        } else {
            //上学期
            for (Major major : majorList) {
                List<Student> studentList51 = studentService.studentList51(nowYear, major.getMajorId());
                List<Student> studentList41 = studentService.studentList41(nowYear, major.getMajorId());//大四上
                List<Student> studentList31 = studentService.studentList31(nowYear, major.getMajorId());//大三上
                List<Student> studentList21 = studentService.studentList21(nowYear, major.getMajorId());//大二上
                List<Student> studentList11 = studentService.studentList11(nowYear, major.getMajorId());//大一上

                List<Course> courseList51Must = courseService.courseList51Must(major.getMajorId());
                List<Course> courseList41Must = courseService.courseList41Must(major.getMajorId());
                List<Course> courseList31Must = courseService.courseList31Must(major.getMajorId());
                List<Course> courseList21Must = courseService.courseList21Must(major.getMajorId());
                List<Course> courseList11Must = courseService.courseList11Must(major.getMajorId());

                listChooseCourse(studentList51, courseList51Must);

                listChooseCourse(studentList41, courseList41Must);

                listChooseCourse(studentList31, courseList31Must);


                listChooseCourse(studentList21, courseList21Must);

                listChooseCourse(studentList11, courseList11Must);
            }
        }

        Long end = System.currentTimeMillis();
        return Result.success("一键选课完毕,服务器花费时间" + (end - start) + "ms");
    }


    public void listChooseCourse(List<Student> studentList, List<Course> courseList) {
        ChooseCourse chooseCourse = new ChooseCourse();
        for (Student student : studentList) {
            for (Course course : courseList) {
                chooseCourse.setChooseCourseId(student.getStuId() + "choosecourse" + course.getCourseId().substring(6, 10));
                LambdaQueryWrapper<ChooseCourse> queryWrapper = new LambdaQueryWrapper<>();
                queryWrapper.eq(ChooseCourse::getChooseCourseId, chooseCourse.getChooseCourseId());
                ChooseCourse one = chooseCourseService.getOne(queryWrapper);
                if (null != one) {
                    continue;
                }
                chooseCourse.setStuId(student.getStuId());
                chooseCourse.setCourseId(course.getCourseId());
                chooseCourse.setCreateTime(new Date());
                chooseCourse.setState(1);
                chooseCourse.setStuName(student.getStuName());
                chooseCourse.setCourseName(course.getCourseName());
                chooseCourse.setMajorName(student.getMajorName());
                chooseCourse.setCoursePeriod(course.getCoursePeriod());
                chooseCourse.setIfDegree(course.getIfDegree());
                chooseCourseService.save(chooseCourse);//有事务，不怕部分成功
                courseService.updateStuChooseNum(course.getCourseId());
            }
        }
    }

    @Transactional
    @GetMapping("/adminScoreRandomly")
    public Result adminScoreRandomly(){
        Long start=System.currentTimeMillis();
        Random random = new Random();
        Score score = new Score();
        List<ChooseCourse> chooseCourseList = chooseCourseService.list();//select * from t_choose_course
        for (ChooseCourse chooseCourse : chooseCourseList) {
            score.setScoreId(chooseCourse.getStuId()+ "-"+chooseCourse.getChooseCourseId());
            LambdaQueryWrapper<Score> scoreQueryWrapper = new LambdaQueryWrapper<>();
            scoreQueryWrapper.eq(Score::getScoreId,score.getScoreId());
            Score scoreDatabase = scoreService.getOne(scoreQueryWrapper);
            if (null!=scoreDatabase)//针对此选课记录打过分
            {
                continue;
            }
            score.setChooseCourseId(chooseCourse.getChooseCourseId());
            score.setStuId(chooseCourse.getStuId());
            score.setCourseName(chooseCourse.getCourseName());
            score.setStuName(chooseCourse.getStuName());
            score.setCreateTime(new Date());
            score.setScore(random.nextInt(101));//[0,100]的随机整数
            scoreService.save(score);
        }
        Long end=System.currentTimeMillis();
        return Result.success("一键随机打分完毕,服务器花费时间" + (end - start) + "ms");
    }
    @DeleteMapping("/delAdmin")
    public Result delAdmin(@RequestHeader("Authorization")String token,String adminId){
        boolean removeById = adminService.removeById(adminId);
        if (removeById){
            loginService.logout(token);
            return Result.success("注销账号成功");
        }
        return Result.fail("注销账号失败");
    }
}
