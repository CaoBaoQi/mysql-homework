package jz.cbq.backend.entity;

import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.util.Date;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 老师 实体类
 *
 * @author caobaoqi
 */
@Data
@TableName("t_teacher")
@ApiModel(value = "老师")
public class Teacher implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 老师 id
     */
    private String teaId;
    /**
     * 专业 id
     */
    private String majorId;
    /**
     * 年级
     */
    private String classYear;
    /**
     * 专业名称
     */
    private String majorName;
    /**
     * 老师名称
     */
    private String teaName;
    /**
     * 班级名称
     */
    private String className;
    /**
     * 老师密码
     */
    private String teaPwd;
    /**
     * 班级 id
     */
    private String classId;
    /**
     * 老师 IDCard
     */
    private String teaIdCard;
    /**
     * 班级编号
     */
    private String classNo;
    /**
     * 创建时间
     */
    private Date createTime;
}