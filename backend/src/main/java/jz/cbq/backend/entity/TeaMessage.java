package jz.cbq.backend.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
/**
 * 老师信息 实体类
 *
 * @author caobaoqi
 */
@Data
@TableName("t_tea_message")
@ApiModel(value = "老师信息")
public class TeaMessage implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 消息 id
     */
    private String msgId;
    /**
     * 学生 id
     */
    private String stuId;
    /**
     * 老师 id
     */
    private String teaId;
    /**
     * 消息内容
     */
    private String msgContent;
    /**
     * 消息时间
     */
    private Date msgTime;
}
