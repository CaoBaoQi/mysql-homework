package jz.cbq.backend.entity;

import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.util.Date;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 成绩 实体类
 *
 * @author caobaoqi
 */
@Data
@TableName("t_score")
@ApiModel(value = "成绩")
public class Score implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 成绩 id
     */
    private String scoreId;
    /**
     * 课程 id
     */
    private String ChooseCourseId;
    /**
     * 学生 id
     */
    private String stuId;
    /**
     * 成绩
     */
    private Integer score;
    /**
     * 课程名称
     */
    private String courseName;
    /**
     * 学生名称
     */
    private String stuName;
    /**
     * 创建时间
     */
    private Date createTime;
}