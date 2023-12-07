package jz.cbq.backend.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import jz.cbq.backend.entity.TeaMessage;
import jz.cbq.backend.entity.TeaMsgMap;
import jz.cbq.backend.service.ITeaMessageService;
import jz.cbq.backend.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("teaMessage")
public class TeaMessageController {
    @Autowired
    private ITeaMessageService teaMessageService;

    @GetMapping("/getMsgsByTeaId")
    public Result getMsgsByTeaId(String teaId, @RequestParam(value = "stuName",required = false) String stuName){
        List<TeaMsgMap> allTeaMsg =teaMessageService.getAllTeaMsg(teaId,stuName);
        return Result.success(allTeaMsg);
    }
    @PostMapping("/addMsg")//新增消息
    public Result addMsg(@RequestBody TeaMessage teaMessage){
        teaMessage.setMsgId(teaMessage.getTeaId()+"msg"+ teaMessage.getStuId()+ UUID.randomUUID());
        teaMessage.setMsgTime(new Date());
        boolean save = teaMessageService.save(teaMessage);
        if (save){
            return Result.success("发消息成功");
        }
        return Result.fail("发消息失败");
    }
    @DeleteMapping("/delById")
    public Result delById(String msgId){
        LambdaQueryWrapper<TeaMessage> msgQueryWrapper = new LambdaQueryWrapper<>();
        msgQueryWrapper.eq(TeaMessage::getMsgId,msgId);
        boolean remove = teaMessageService.remove(msgQueryWrapper);
        if (remove){
            return Result.success("删除消息成功");
        }
        return Result.fail("删除消息失败");
    }
}
