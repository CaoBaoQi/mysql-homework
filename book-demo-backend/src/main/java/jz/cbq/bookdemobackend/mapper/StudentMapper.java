package jz.cbq.bookdemobackend.mapper;

import jz.cbq.bookdemobackend.entity.Student;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * StudentMapper
 *
 * @author cbq
 * @date 2023/12/15 13:10
 * @since 1.0.0
 */
public interface StudentMapper extends BaseMapper<Student> {
    @Select("SELECT * FROM `mysql-demo`.tb_student WHERE id = #{id}")
    @Override
    Student findById(Integer id);

    @Select("SELECT * FROM `mysql-demo`.tb_student")
    @Override
    List<Student> selectAll();

    @Insert("INSERT INTO `mysql-demo`.tb_student (name, address) VALUES (#{name}, #{address})")
    @Override
    Integer save(Student student);

    @Update("UPDATE `mysql-demo`.tb_student SET name = #{name}, address = #{address} WHERE id = #{id}")
    @Override
    Integer updateById(Student student);

    @Delete("DELETE FROM `mysql-demo`.tb_student WHERE id = #{id}")
    @Override
    Integer deleteById(Integer id);
}
