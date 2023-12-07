package jz.cbq.backend.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import jz.cbq.backend.vo.Result;
import jz.cbq.backend.entity.StuMessage;
import jz.cbq.backend.service.IStuMessageService;
import jz.cbq.backend.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * AdminController
 *
 * @author caobaoqi
 */
@RestController
@RequestMapping("/stuMessage")
public class StuMessageController {
    @Autowired
    private IStuMessageService stuMessageService;
    @Autowired
    private IStudentService studentService;
    @Transactional
    @PostMapping("/addMsg")//新增消息
    public Result addMsg(@RequestBody StuMessage stuMessage){
        stuMessage.setMsgId(stuMessage.getTeaId()+"msg"+ stuMessage.getStuId()+ UUID.randomUUID());
        stuMessage.setMsgTime(new Date());
        boolean save = stuMessageService.save(stuMessage);
        if (save){
            studentService.plusMsgNum(stuMessage.getStuId());
            return Result.success("发消息成功");
        }
        return Result.fail("发消息失败");
    }
    @GetMapping("/getMsgsByStuId")
    public Result getMsgsByStuId(String stuId){
        LambdaQueryWrapper<StuMessage> msgQueryWrapper = new LambdaQueryWrapper<>();
        msgQueryWrapper.eq(StuMessage::getStuId,stuId).orderByDesc(StuMessage::getMsgTime);
        List<StuMessage> msgList = stuMessageService.list(msgQueryWrapper);
        return Result.success(msgList);
    }
    @DeleteMapping("/delById")
    public Result delById(String msgId,String stuId){
        LambdaQueryWrapper<StuMessage> msgQueryWrapper = new LambdaQueryWrapper<>();
        msgQueryWrapper.eq(StuMessage::getMsgId,msgId);
        boolean remove = stuMessageService.remove(msgQueryWrapper);
        if (remove){
            studentService.delMsgNum(stuId);
            return Result.success("删除消息成功");
        }
        return Result.fail("删除消息失败");
    }
    @PutMapping("/hasRead")
    public Result hasRead(@RequestBody StuMessage stuMessage){
        String stuId= stuMessage.getStuId();
        LambdaUpdateWrapper<StuMessage> msgUpdateWrapper = new LambdaUpdateWrapper<>();
        msgUpdateWrapper.set(StuMessage::getMsgState,"已读").eq(StuMessage::getStuId,stuId);
        stuMessageService.update(msgUpdateWrapper);
        return Result.success();
    }

    @GetMapping("/getStuUnreadNum")
    public Result getStuUnreadNum(String stuId){
        LambdaQueryWrapper<StuMessage> msgQueryWrapper = new LambdaQueryWrapper<>();
        msgQueryWrapper.eq(StuMessage::getMsgState,"未读").eq(StuMessage::getStuId,stuId);
        long count = stuMessageService.count(msgQueryWrapper);
        return Result.success(count);
    }
}
