package jz.cbq.backend.entity;

import lombok.Data;

import java.util.List;
@Data
public class StuScoreMap {
    private String stuId;
    private String stuName;
    private String className;
    private List<Integer> courseScore;
    private Integer scoreTotal;
}
