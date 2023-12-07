package jz.cbq.backend.utils;

import jz.cbq.backend.vo.Result;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 异常拦截器
 *
 * @author caobaoqi
 */
@ControllerAdvice
public class AllExceptionHandler {
    @ExceptionHandler(Exception.class)
    @ResponseBody
    public Result doException(Exception e) {
        System.out.println(e.getMessage());
        return Result.fail("服务器出错 | 或存在关联信息请联系 1203952894@qq.com");
    }
}
