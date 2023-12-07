package jz.cbq.backend.mapper;

import jz.cbq.backend.entity.Admin;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Select;

/**
 * AdminMapper
 *
 * @author caobaoqi
 */
public interface AdminMapper extends BaseMapper<Admin> {
    @Select("select admin_id from t_admin order by admin_id desc limit 1")
    String getMaxId();
}
