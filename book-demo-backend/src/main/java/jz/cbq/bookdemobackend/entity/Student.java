package jz.cbq.bookdemobackend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * Student
 *
 * @author cbq
 * @date 2023/12/15 13:07
 * @since 1.0.0
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class Student extends BaseEntity{
    /**
     * 学生 id
     */
    private Integer id;
    /**
     * 学生名称
     */
    private String name;
    /**
     * 籍贯
     */
    private String address;
}
