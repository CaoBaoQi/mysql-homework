package jz.cbq.backend.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.util.Date;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.models.auth.In;
import lombok.Data;

/**
 * 专业 实体类
 *
 * @author caobaoqi
 */
@Data
@TableName("t_major")
@ApiModel(value = "专业")
public class Major implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 专业 id
     */
    private String majorId;
    /**
     * 专业名称
     */
    private String majorName;
    /**
     * 班级数量
     */
    private Integer classTotal;
    /**
     * 课程数量
     */
    private Integer courseTotal;
    /**
     * 学生数量
     */
    private Integer stuTotal;
    /**
     * 老师数量
     */
    private Integer teaTotal;
    /**
     * 创建时间
     */
    private Date createTime;
}
