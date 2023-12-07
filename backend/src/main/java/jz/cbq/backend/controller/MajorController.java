package jz.cbq.backend.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import jz.cbq.backend.vo.Result;
import jz.cbq.backend.entity.Major;
import jz.cbq.backend.service.IClassService;
import jz.cbq.backend.service.ICourseService;
import jz.cbq.backend.service.IMajorService;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/major")
public class MajorController {
    @Autowired
    private IMajorService majorService;
    @Autowired
    ICourseService courseService;
    @Autowired
    IClassService classService;
    @PostMapping("/add")
    public Result addMajor(@RequestBody Major major){
        LambdaQueryWrapper<Major> majorQueryWrapper = new LambdaQueryWrapper<>();
        majorQueryWrapper.eq(Major::getMajorName,major.getMajorName()).last("limit 1");
        Major one = majorService.getOne(majorQueryWrapper);
        if (null!=one){
            return Result.fail("该专业已存在");
        }
        String nextMajorId=majorService.findNextMajorId();
        major.setMajorId(nextMajorId);
        major.setCreateTime(new Date());
        major.setClassTotal(0);
        major.setCourseTotal(0);
        major.setStuTotal(0);
        major.setTeaTotal(0);
        boolean save = majorService.save(major);
        if (save){
            return Result.success("添加专业成功");
        }
        return Result.fail("添加专业失败");
    }
    @GetMapping("getByMajorId")
    public Result getByMajorId(String majorId){
        LambdaQueryWrapper<Major> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Major::getMajorId,majorId).last("limit 1");
        Major major = majorService.getOne(queryWrapper);
        if (null!=major){
            return Result.success(major);
        }
        return Result.fail("打开编辑表单失败");
    }
    @PutMapping("/edit")
    public Result editMajor(@RequestBody Major major){
        LambdaUpdateWrapper<Major> updateWrapper = new LambdaUpdateWrapper<>();
        updateWrapper.set(Major::getMajorName,major.getMajorName()).eq(Major::getMajorId,major.getMajorId());
        boolean update = majorService.update(updateWrapper);
        if (update){
            return Result.success("编辑专业成功");
        }
        return Result.fail("编辑专业失败");
    }
    @GetMapping("/majorPageList")
    public Result majorPageList(int pageNum, int pageSize,@RequestParam(value = "majorName", required = false) String majorName){
        Map<String, Object> data = new HashMap<>();
        Page<Major> page = new Page<>(pageNum, pageSize);
        LambdaQueryWrapper<Major> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.like(StringUtils.hasLength(majorName), Major::getMajorName, majorName).orderByDesc(Major::getCreateTime);
        majorService.page(page,queryWrapper);
        data.put("majorList",page.getRecords());
        data.put("total",page.getTotal());
        return Result.success(data);
    }
    @DeleteMapping("/delById")
    public Result delById(String majorId){
        LambdaQueryWrapper<Major> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Major::getMajorId,majorId);
        boolean remove = majorService.remove(queryWrapper);
        if (remove){
            return Result.success("删除专业成功");
        }
        return Result.fail("删除专业失败");
    }
    @GetMapping("/getAllMajorName")
    public Result getAllMajorName(){
        List<Major> majorList = majorService.list();
        return Result.success(majorList);
    }
}
