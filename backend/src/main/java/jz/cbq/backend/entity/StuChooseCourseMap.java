package jz.cbq.backend.entity;

import lombok.Data;

import java.util.Date;

@Data
public class StuChooseCourseMap {
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
