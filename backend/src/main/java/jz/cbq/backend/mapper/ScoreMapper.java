package jz.cbq.backend.mapper;

import jz.cbq.backend.entity.Score;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import jz.cbq.backend.entity.StuScoreMap;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

/**
 * AdminMapper
 *
 * @author caobaoqi
 */
public interface ScoreMapper extends BaseMapper<Score> {

    List<StuScoreMap> getStuScoreList(String admissionYearMajor, String stuName, String stuId, String className, int limit1, int limit2);

    @Select("select a.score from t_score a join t_course b on a.course_name=b.course_name where stu_id=#{stuId}\n" +
            "ORDER BY FIELD(course_period,'大一上','大一下','大二上','大二下','大三上','大三下','大四上','大四下')")

    int getStuScoreTotal(String admissionYearMajor, String stuName, String stuId, String className, int limit1, int limit2);


    @Update("update t_score set stu_name=#{stuName} where stu_id=#{stuId}")
    void updateStuName(String stuId, String stuName);

    @Delete("delete from t_score")
    int cancelAllScore();
}
