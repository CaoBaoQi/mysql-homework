package jz.cbq.bookdemobackend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * BaseEntity
 *
 * @author cbq
 * @date 2023/12/15 12:48
 * @since 1.0.0
 */
@Data
public class BaseEntity implements Serializable {
    /**
     * 创建人
     */
    private String createdBy;
    /**
     * 修改人
     */
    private String updatedBy;
    /**
     * 创建时间
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT")
    private LocalDateTime createdTime;
    /**
     * 修改时间
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT")
    private LocalDateTime updatedTime;
    /**
     * 备注
     */
    private String remark;
    /**
     * 逻辑删除字段 (0-未删除 | 1-已删除)
     */
    private Integer isDeleted;
}
