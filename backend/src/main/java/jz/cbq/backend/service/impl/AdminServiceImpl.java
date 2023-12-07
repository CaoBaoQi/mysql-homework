package jz.cbq.backend.service.impl;

import jz.cbq.backend.entity.*;
import jz.cbq.backend.mapper.AdminMapper;
import jz.cbq.backend.service.*;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Calendar;

/**
 * AdminServiceImpl
 *
 * @author caobaoqi
 */
@Service
public class AdminServiceImpl extends ServiceImpl<AdminMapper, Admin> implements IAdminService {
    @Resource
    private AdminMapper adminMapper;


    @Override
    public String getNextId() {
        String nowYear = Calendar.getInstance().get(Calendar.YEAR) + "";
        String maxId = getMaxId();
        int nextNum = 1;
        if (null != maxId) {
            String maxYear = maxId.substring(3, 7);
            if (nowYear.equals(maxYear)) {
                nextNum = Integer.parseInt(maxId.substring(7, 9)) + 1;
                System.out.println("下一个编号是：" + nextNum);
                System.out.println(nowYear + String.format("%02d", Integer.valueOf(nextNum)));
                return "gly" + nowYear + String.format("%02d", Integer.valueOf(nextNum));
            } else {
                return "gly" + nowYear + "01";
            }
        }
        return "gly" + nowYear + "01";
    }


    public String getMaxId() {
        return adminMapper.getMaxId();
    }
}
