package jz.cbq.backend.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.util.Date;

@Data
public class StuChooseCourseMap {
    @TableId(value = "choose_course_id")
    private String chooseCourseId;
    private String courseId;
    private String majorId;
    private String courseName;
    private String ifDegree;
    private String majorName;
    private Date createTime;
    private String coursePeriod;
    private String stuChooseNum;
    private String stuId;
    private String state;
    private String stuName;
}
