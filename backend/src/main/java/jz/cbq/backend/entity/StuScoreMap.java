package jz.cbq.backend.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.util.List;
@Data
public class StuScoreMap {
    @TableId(value = "stu_id")
    private String stuId;
    private String stuName;
    private String className;
    private List<Integer> courseScore;
    private Integer scoreTotal;
}
