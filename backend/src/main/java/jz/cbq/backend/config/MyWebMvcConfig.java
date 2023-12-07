package jz.cbq.backend.config;

import jz.cbq.backend.utils.LoginInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * WebMVC 配置类
 *
 * @author caobaoqi
 */
@Configuration
public class MyWebMvcConfig implements WebMvcConfigurer {
    @Autowired
    private LoginInterceptor loginInterceptor;

    /**
     * 跨域
     *
     * @param registry registry
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("*")
                .allowedHeaders("*");
    }

    /**
     * 登录拦截器
     *
     * @param registry registry
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns("/login")
                .excludePathPatterns("/admin/add")
                .excludePathPatterns("/swagger-resources/**", "/webjars/**", "v2/**", "swagger-ui.html/**")
                .excludePathPatterns("/logout");
    }
}
