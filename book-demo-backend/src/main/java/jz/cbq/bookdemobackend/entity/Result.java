package jz.cbq.bookdemobackend.entity;

import jz.cbq.bookdemobackend.enums.ResponseStatus;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Result
 *
 * @author cbq
 * @date 2023/12/15 15:40
 * @since 1.0.0
 */
@Data
@NoArgsConstructor(access = AccessLevel.PRIVATE) // 私有化构造方法，防止外部直接创建实例
@AllArgsConstructor(access = AccessLevel.PRIVATE) // 提供全参构造方法，用于内部构建对象
public class Result<T> {

    private Integer code;

    private String message;

    private T data;

    public static <T> Result<T> ok(T data) {
        return new Result<>(ResponseStatus.SUCCESS.getCode(), ResponseStatus.SUCCESS.getMessage(), data);
    }

    public static <T> Result<T> ok(Integer code, String message, T data) {
        return new Result<>(code, message, data);
    }

    public static <T> Result<T> ok() {
        return new Result<>(ResponseStatus.SUCCESS.getCode(), ResponseStatus.SUCCESS.getMessage(), null);
    }

    public static <T> Result<T> error() {
        return new Result<>(ResponseStatus.ERROR.getCode(), ResponseStatus.ERROR.getMessage(), null);
    }

    public static <T> Result<T> error(String message) {
        return new Result<>(ResponseStatus.ERROR.getCode(), message, null);
    }

    public static <T> Result<T> error(Integer code, String message) {
        return new Result<>(code, message, null);
    }

    // 提供一个方法用于设置错误信息并返回当前对象，便于链式调用
    public Result<T> errorWithMessage(String message) {
        this.code = ResponseStatus.ERROR.getCode();
        this.message = message;
        this.data = null;
        return this;
    }
}
