package jz.cbq.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import jz.cbq.backend.entity.ChooseCourse;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Update;

/**
 * ChooseCourseMapper
 *
 * @author caobaoqi
 */
public interface ChooseCourseMapper extends BaseMapper<ChooseCourse> {
    @Update("update t_choose_course set stu_name=#{stuName} where stu_id=#{stuId}")
    void updateStuName(String stuId, String stuName);

    @Delete("delete from t_choose_course")
    int cancelChooseCourse();
}
