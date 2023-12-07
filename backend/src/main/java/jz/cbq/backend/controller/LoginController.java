package jz.cbq.backend.controller;

import com.alibaba.fastjson2.JSON;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import jz.cbq.backend.vo.Result;
import jz.cbq.backend.entity.Admin;
import jz.cbq.backend.entity.Student;
import jz.cbq.backend.entity.Teacher;
import jz.cbq.backend.service.IAdminService;
import jz.cbq.backend.service.ILoginService;
import jz.cbq.backend.service.IStudentService;
import jz.cbq.backend.service.ITeacherService;
import jz.cbq.backend.utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;

/**
 * AdminController
 *
 * @author caobaoqi
 */
@RestController
public class LoginController {
    @Autowired
    private IAdminService adminService;
    @Autowired
    private IStudentService studentService;
    @Autowired
    private ITeacherService teacherService;
    @Autowired
    private RedisTemplate<String,String> redisTemplate;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private ILoginService loginService;
    @PostMapping("/login")
    public Result login(String id,String password,String state){
        HashMap<String, Object> data = new HashMap<>();
        String token = JWTUtils.createToken(id);
        data.put("token",token);
        data.put("state",state);
        if ("管理员".equals(state)){
            LambdaQueryWrapper<Admin> queryWrapper = new LambdaQueryWrapper<>();
            queryWrapper.eq(Admin::getAdminId, id);
            Admin adminDatabase = adminService.getOne(queryWrapper);
            if (null != adminDatabase && passwordEncoder.matches(password, adminDatabase.getAdminPwd())) {
                redisTemplate.opsForValue().set(token, JSON.toJSONString(adminDatabase), 1, TimeUnit.DAYS);//1天
                data.put("user",adminDatabase);
                return Result.success(data, state+"登录成功");
            }
            return Result.fail(state+"不存在或密码错误");
        }
        else if ("学生".equals(state)){
            LambdaQueryWrapper<Student> queryWrapper = new LambdaQueryWrapper<>();
            queryWrapper.eq(Student::getStuId, id);
            Student stuDatabase = studentService.getOne(queryWrapper);
            if (null != stuDatabase && passwordEncoder.matches(password, stuDatabase.getStuPwd())){
                redisTemplate.opsForValue().set(token, JSON.toJSONString(stuDatabase), 1, TimeUnit.DAYS);//1天
                data.put("user",stuDatabase);
                return Result.success(data, state+"登录成功");
            }
            return Result.fail(state+"不存在或密码错误");
        }
        else if ("班主任".equals(state)){
            LambdaQueryWrapper<Teacher> queryWrapper = new LambdaQueryWrapper<>();
            queryWrapper.eq(Teacher::getTeaId, id);
            Teacher teaDatabase = teacherService.getOne(queryWrapper);
            if (null != teaDatabase && passwordEncoder.matches(password, teaDatabase.getTeaPwd())){
                redisTemplate.opsForValue().set(token, JSON.toJSONString(teaDatabase), 1, TimeUnit.DAYS);//1天
                data.put("user",teaDatabase);
                return Result.success(data, state+"登录成功");
            }
            return Result.fail(state+"不存在或密码错误");
        }
        return Result.fail("没有选择身份");
    }
    @GetMapping("/logout")
    public Result adminLogout(@RequestHeader("Authorization")String token){
        loginService.logout(token);
        return Result.success("退出登录成功");
    }
}
