---
title: 学生管理系统-后端
order: 3
icon: /project-02.svg
category:
    - PROJECT
    - MDi在
---

## 配置
### MyBatis-Plus

```java
/**
 * MP 配置类
 *
 * @author caobaoqi
 */
@Configuration
public class MybatisPlusConfig {

    /**
     * MP 分页拦截器
     *
     * @return MybatisPlusInterceptor
     */
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
        return interceptor;
    }
}
```

### Web-MVC 

```java
/**
 * WebMVC 配置类
 *
 * @author caobaoqi
 */
@Configuration
public class MyWebMvcConfig implements WebMvcConfigurer {
    @Resource
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
```

### Redis

```java
/**
 * Redis 配置类
 *
 * @author caobaoqi
 */
@Configuration
public class RedisConfig {
    @Resource
    private RedisConnectionFactory factory;

    /**
     * RedisTemplate
     *
     * @return RedisTemplate
     */
    @Bean
    public RedisTemplate<String, Object> redisTemplate() {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(factory);

        redisTemplate.setKeySerializer(new StringRedisSerializer());
        Jackson2JsonRedisSerializer<Object> serializer = new Jackson2JsonRedisSerializer<>(Object.class);

        redisTemplate.setValueSerializer(serializer);

        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        objectMapper.setDateFormat(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));
        objectMapper.setTimeZone(TimeZone.getDefault());
        JsonMapper.builder()
                .configure(MapperFeature.USE_ANNOTATIONS, false)
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        objectMapper.activateDefaultTyping(LaissezFaireSubTypeValidator.instance, ObjectMapper.DefaultTyping.NON_FINAL, JsonTypeInfo.As.PROPERTY);
        objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        serializer.setObjectMapper(objectMapper);
        return redisTemplate;
    }
}
```

### Swagger

```java
/**
 * Swagger2 配置类
 *
 * @author caobaoqi
 */
@Configuration
public class SwaggerConfig {

    /**
     * docket
     *
     * @return Docket
     */
    @Bean
    public Docket docket() {
        Docket docket = new Docket(DocumentationType.SWAGGER_2);
        ApiInfo apiInfo = new ApiInfoBuilder()
                .title("MySQL-Homework")
                .version("V1.0.0")
                .description("MySQL-Homework 曹宝琪|曹蓓|程柄惠|焦惠静")
                .contact(new Contact("晋中学院-曹宝琪", "https://gitee.com/cola777jz", "1203952894@qq.com"))
                .license("Apache 2.0")
                .build();
        docket = docket.apiInfo(apiInfo);
        return docket;
    }

}
```

### ThreadPool
```java
/**
 * 线程池配置类
 *
 * @author caobaoqi
 */
@Configuration
public class ThreadPoolConfig implements AsyncConfigurer {

    /**
     * 现场管理
     *
     * @return Executor
     */
    @Bean("taskExecutor")
    public Executor asyncServiceExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(20);
        executor.setQueueCapacity(Integer.MAX_VALUE);

        executor.setKeepAliveSeconds(60);
        executor.setThreadNamePrefix("MySQL-Homework");
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.initialize();

        return executor;
    }
}
```

## 工具类

### JWTUtils

```java
/**
 * JWT 工具类
 *
 * @author caobaoqi
 */
@Component
public class JWTUtils {

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    @Value("${cbq.jwt-secret}")
    private static final String JWT_SECRET = "CaoBaoQi";

    /**
     * 成绩 token
     * @param userId userId
     * @return token
     */
    public static String createToken(String userId) {
        HashMap<String, Object> claims = new HashMap<>();
        claims.put("userId", userId);
        JwtBuilder jwtBuilder = Jwts.builder()
                .signWith(SignatureAlgorithm.HS256, JWT_SECRET)
                .setClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24));
        return jwtBuilder.compact();
    }

    /**
     *  解析 token
     * @param token token
     * @return Object
     */
    public static Object getUserIdByToken(String token) {
        Map<String, Object> body = (Map<String, Object>) Jwts.parser().setSigningKey(JWT_SECRET).parse(token).getBody();
        return body.get("userId");
    }

    /**
     * 通过 token 获取 User
     * @param token token
     * @return User
     */
    public Object getUserByToken(String token) {
        Object userIdByToken = getUserIdByToken(token);
        if (null == userIdByToken) {
            return null;
        }
        String userJson = redisTemplate.opsForValue().get(token);
        if (null == userJson) {
            return null;
        }
        return JSON.parseObject(userJson, Object.class);
    }
}
```

### LoginInterceptro

```java
/**
 * 登录拦截器
 *
 * @author caobaoqi
 */
@Slf4j
@Component
public class LoginInterceptor implements HandlerInterceptor {
    @Resource
    private JWTUtils jwtUtils;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        /*
         * 1.需要判断请求的接口路径是否为 HandlerMethod（controller方法）
         * 2.判断 token 是否为空，如果为空，未登录
         * 3.如 果token不 为空，登录验证 loginService checkToken
         * 4.如果认证成功，放行即可
         */
        if (!(handler instanceof HandlerMethod)) {
            return true;
        }
        String token = request.getHeader("Authorization");
        log.info("==============request start========================");
        String requestURI = request.getRequestURI();
        log.info("request uri:{}", requestURI);
        log.info("request method:{}", request.getMethod());
        log.info("token:{}", token);
        log.info("==============request end==========================");

        if (StringUtils.isBlank(token)) {
            response.setContentType("application/json;charset=utf-8");
            response.getWriter().print(JSON.toJSONString(Result.fail("请登录后再访问")));
            return false;
        }
        Object user = null;
        try {
            user = jwtUtils.getUserByToken(token);
        } catch (Exception e) {
            response.getWriter().print(JSON.toJSONString(Result.fail("请登录后再访问")));
        }
        if (null == user) {
            response.setContentType("application/json;charset=utf-8");
            response.getWriter().print(JSON.toJSONString(Result.fail("请登录后再访问")));
            return false;
        }

        UserThreadLocal.put(user);
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    /**
     * 删除 ThreadLocal 中用完的信息，避免出现内泄露的风险
     *
     * @param request  request
     * @param response response
     * @param handler  handler
     * @param ex       ex
     * @throws Exception Exception
     */
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        UserThreadLocal.remove();
    }
}
```

### UserThreadLocal

```java
/**
 * 用户线程
 *
 * @author caobaoqi
 */
public class UserThreadLocal {
    private UserThreadLocal() {
    }

    private static final ThreadLocal<Object> LOCAL = new ThreadLocal<>();

    public static void put(Object user) {
        LOCAL.set(user);
    }

    public static Object get() {
        return LOCAL.get();
    }

    public static void remove() {
        LOCAL.remove();
    }

}
```

### Result 实体集

```java
/**
 * Result 返回操作类
 *
 * @param <T>
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Result<T> {
    /**
     * 状态码
     */
    private String code;
    /**
     * 数据
     */
    private T data;
    /**
     * msg
     */
    private String msg;

    public static <T> Result<T> success() {
        return new Result<>("20000", null, "success");
    }

    public static <T> Result<T> success(T data) {
        return new Result<>("20000", data, "success");
    }

    public static <T> Result<T> success(T data, String msg) {
        return new Result<>("20000", data, msg);
    }

    public static <T> Result<T> success(String msg) {
        return new Result<>("20000", null, msg);
    }

    public static <T> Result<T> fail() {
        return new Result<>("20001", null, "fail");
    }

    public static <T> Result<T> fail(String msg) {
        return new Result<>("20001", null, msg);
    }
}
```

## 管理员模块

### 人员管理



### 课程管理



### 班级管理



### 专业管理



### 全校成绩管理



## 老师模块

### 本班成绩管理



### 专业成绩管理



### 消息管理

## 学生模块

### 学生信息查看



### 选课



### 消息查看



## X. 开发环境

```yaml
version: '3.1'
services:
  mysql:
    container_name: mysql-3306
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: mysql-homework
    ports:
      - "3306:3306"
  redis:
    container_name: redis-6379
    image: redis
    restart: always
    ports:
      - "6379:6379"

```

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209202913434.png" alt="image-20231209202913434" style="zoom:67%;" />

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209202932472.png" alt="image-20231209202932472" style="zoom:67%;" />

## X. 部署

### Yaml

```yaml
server:
  port: 8091
spring:
  mvc:
    path match:
      matching-strategy: ant_path_matcher
  redis:
    host: YOUR_HOST
    port: 6379
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: YOUR_URL
    username: YOUR_USERNAME
    password: YOUR_PASSWORD
    druid:
      initial-size: 5
      max-active: 20
      max-wait: 60000
      min-idle: 1
      validation-query: select 1
  devtools:
    restart:
      enabled: true
  jackson:
    date-format: yyyy-MM-dd HH:mm:ss
    time-zone: GMT+8
  flyway:
    baseline-description:
    baseline-version: 20231209001
    baseline-on-migrate: true
    default-schema: mysql-homework
mybatis-plus:
  mapper-locations: classpath:mapper/*.xml
  type-aliases-package: jz.cbq.backend.entity
  configuration:
    map-underscore-to-camel-case: true
#    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
  global-config:
    db-config:
      logic-delete-field: deleted
      logic-not-delete-value: 0
      logic-delete-value: 1
      table-prefix: t_
logging:
  level:
    jz:
      cbq:
        backend:
          mapper: INFO
cbq:
  admin-secret: TODO
  jwt-secret: TODO
```

### Docker

```dockerfile
FROM eclipse/centos_jdk8
LABEL authors="caobaoqi"


COPY target/backend-0.0.1-SNAPSHOT.jar .

CMD java -jar backend-0.0.1-SNAPSHOT.jar

EXPOSE 8091

```

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209202959539.png" alt="image-20231209202959539" style="zoom:67%;" />

## X. 依赖 .xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.7.10</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>

    <!--INFO-->
    <groupId>jz.cbq</groupId>
    <artifactId>backend</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <url>https://gitee.com/cola777jz/mysql-homework</url>
    <description>MySQL Homework</description>

    <properties>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <!--stater-redis-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>
        <!--stater-web-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <!--Security + JWT-->
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-core</artifactId>
            <version>5.6.2</version>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt</artifactId>
            <version>0.9.1</version>
        </dependency>
        <!--Flyway-->
        <dependency>
            <groupId>org.flywaydb</groupId>
            <artifactId>flyway-core</artifactId>
        </dependency>
        <dependency>
            <groupId>org.flywaydb</groupId>
            <artifactId>flyway-mysql</artifactId>
        </dependency>
        <!--DB-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <version>1.2.6</version>
        </dependency>
        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <scope>runtime</scope>
        </dependency>
        <!--MP-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.5.1</version>
        </dependency>
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-generator</artifactId>
            <version>3.5.1</version>
        </dependency>
        <!--Swagger2-->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>2.9.2</version>
        </dependency>
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.9.2</version>
        </dependency>
        <!--Freemarker-->
        <dependency>
            <groupId>org.freemarker</groupId>
            <artifactId>freemarker</artifactId>
            <version>2.3.28</version>
        </dependency>
        <!--Bootstarp-UI-->
        <dependency>
            <groupId>com.github.xiaoymin</groupId>
            <artifactId>swagger-bootstrap-ui</artifactId>
            <version>1.9.6</version>
        </dependency>
        <!--FastJson-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>2.0.17</version>
        </dependency>
        <!--Ngrok-->
        <dependency>
            <groupId>io.github.kilmajster</groupId>
            <artifactId>ngrok-spring-boot-starter</artifactId>
            <version>0.6.0</version>
        </dependency>
        <!--Lombok-->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <!--DevTools-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <!--Test-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>

```

## X. Entity 实体

### Admin 管理员
```java
/**
 * 管理员 实体类
 *
 * @author caobaoqi
 */
@Data
@ApiModel(value = "管理员")
public class Admin implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 管理员 id
     */
    @TableId(value = "admin_id")
    private String adminId;
    /**
     * 管理员名称
     */
    private String adminName;
    /**
     * 管理员密码
     */
    private String adminPwd;
    /**
     * 创建时间
     */
    private Date createTime;
    /**
     * 是否删除
     */
    private Integer deleted;
}
```
### Major 专业

```java
/**
 * 专业 实体类
 *
 * @author caobaoqi
 */
@Data
@ApiModel(value = "专业")
public class Major implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 专业 id
     */
    @TableId(value = "major_id")
    private String majorId;
    /**
     * 专业名称
     */
    private String majorName;
    /**
     * 班级数量
     */
    private Integer classTotal;
    /**
     * 课程数量
     */
    private Integer courseTotal;
    /**
     * 学生数量
     */
    private Integer stuTotal;
    /**
     * 老师数量
     */
    private Integer teaTotal;
    /**
     * 创建时间
     */
    private Date createTime;
    /**
     * 是否删除
     */
    private Integer deleted;
}
```
### Class 班级

```java
/**
 * 班级 实体类
 *
 * @author caobaoqi
 */
@Data
@ApiModel(value = "班级")
public class Class implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 班级 id
     */
    @TableId(value = "class_id")
    private String classId;
    /**
     * 年级
     */
    private String classYear;
    /**
     * 专业 id
     */
    private String majorId;
    /**
     * 专业名称
     */
    private String majorName;
    /**
     * 老师名称
     */
    private String teaName;
    /**
     * 班级名称
     */
    private String className;
    /**
     * 学生数量
     */
    private Integer stuTotal;
    /**
     * 创建时间
     */
    private Date createTime;
    /**
     * 是否删除
     */
    private Integer deleted;

}
```
### Teacher 老师
```java
/**
 * 老师 实体类
 *
 * @author caobaoqi
 */
@Data
@ApiModel(value = "老师")
public class Teacher implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 老师 id
     */
    @TableId(value = "tea_id")
    private String teaId;
    /**
     * 专业 id
     */
    private String majorId;
    /**
     * 年级
     */
    private String classYear;
    /**
     * 专业名称
     */
    private String majorName;
    /**
     * 老师名称
     */
    private String teaName;
    /**
     * 班级名称
     */
    private String className;
    /**
     * 老师密码
     */
    private String teaPwd;
    /**
     * 班级 id
     */
    private String classId;
    /**
     * 老师 IDCard
     */
    private String teaIdCard;
    /**
     * 班级编号
     */
    private String classNo;
    /**
     * 创建时间
     */
    private Date createTime;
    /**
     * 是否删除
     */
    private Integer deleted;
}
```
### Student 学生
```java
/**
 * 学生 实体类
 *
 * @author caobaoqi
 */
@Data
@ApiModel(value = "学生")
public class Student implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 学生 id
     */
    @TableId(value = "stu_id")
    private String stuId;
    /**
     * 老师 id
     */
    private String teaId;
    /**
     * 专业 id
     */
    private String majorId;
    /**
     * 班级 id
     */
    private String classId;
    /**
     * 学生名称
     */
    private String stuName;
    /**
     * 年级
     */
    private String admissionYear;
    /**
     * 班级名称
     */
    private String className;
    /**
     * 学生 IDCard
     */
    private String stuIdCard;
    /**
     * 学生密码
     */
    private String stuPwd;
    /**
     * 班级编号
     */
    private String classNo;
    /**
     * 专业名称
     */
    private String majorName;
    /**
     * 老师名称
     */
    private String teaName;
    /**
     * 信息数量
     */
    private String messageNum;
    /**
     * 创建时间
     */
    private Date createTime;
    /**
     * 是否删除
     */
    private Integer deleted;
}
```
### Course 课程
```java
/**
 * 课程 实体类
 *
 * @author caobaoqi
 */
@Data
@ApiModel(value = "课程")
public class Course implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 课程 id
     */
    @TableId(value = "course_id")
    private String courseId;
    /**
     * 专业 id
     */
    private String majorId;
    /**
     * 专业名称
     */
    private String majorName;
    /**
     * 课程名称
     */
    private String courseName;
    /**
     * 是否选修
     */
    private String ifDegree;
    /**
     * 课程时间
     */
    private String coursePeriod;
    /**
     * 选择该课程的学生数量
     */
    private Integer stuChooseNum;
    /**
     * 创建时间
     */
    private Date createTime;
    /**
     * 是否删除
     */
	private Integer deleted;
}

```
### ChooseCourse 选课
```java
/**
 * 选课 实体类
 *
 * @author caobaoqi
 */
@Data
@ApiModel(value = "选课")
public class ChooseCourse {
    /**
     * 选课 id
     */
    @TableId(value = "choose_course_id")
    private String ChooseCourseId;
    /**
     * 学生 id
     */
    private String stuId;
    /**
     * 课程 id
     */
    private String CourseId;
    /**
     * 创建时间
     */
    private Date CreateTime;
    /**
     * 状态
     */
    private Integer state;
    /**
     * 学生名称
     */
    private String stuName;
    /**
     * 课程名称
     */
    private String courseName;
    /**
     * 专业名称
     */
    private String majorName;
    /**
     * 课程时间
     */
    private String coursePeriod;
    /**
     * 是否选修
     */
    private String ifDegree;
    /**
     * 是否删除
     */
	private Integer deleted;  
}
```
### Score 成绩
```java
/**
 * 成绩 实体类
 *
 * @author caobaoqi
 */
@Data
@ApiModel(value = "成绩")
public class Score implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 成绩 id
     */
    @TableId(value = "score_id")
    private String scoreId;
    /**
     * 课程 id
     */
    private String ChooseCourseId;
    /**
     * 学生 id
     */
    private String stuId;
    /**
     * 成绩
     */
    private Integer score;
    /**
     * 课程名称
     */
    private String courseName;
    /**
     * 学生名称
     */
    private String stuName;
    /**
     * 创建时间
     */
    private Date createTime;
    /**
     * 是否删除
     */
    private Integer deleted;

}
```
### StuMessage 学生消息
```java
/**
 * 学生信息 实体类
 *
 * @author caobaoqi
 */
@Data
@ApiModel(value = "学生信息")
public class StuMessage implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 信息 id
     */
    @TableId(value = "msg_id")
    private String msgId;
    /**
     * 学生 id
     */
    private String stuId;
    /**
     * 老师 id
     */
    private String teaId;
    /**
     * 信息内容
     */
    private String msgContent;
    /**
     * 消息时间
     */
    private Date msgTime;
    /**
     * 消息状态(已读|未读)
     */
    private String msgState;
    /**
     * 是否删除
     */
    private Integer deleted;

}
```
### TeaMessage 老师消息
```java
/**
 * 老师信息 实体类
 *
 * @author caobaoqi
 */
@Data
@ApiModel(value = "老师信息")
public class TeaMessage implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 消息 id
     */
    @TableId(value = "msg_id")
    private String msgId;
    /**
     * 学生 id
     */
    private String stuId;
    /**
     * 老师 id
     */
    private String teaId;
    /**
     * 消息内容
     */
    private String msgContent;
    /**
     * 消息时间
     */
    private Date msgTime;
    /**
     * 是否删除
     */
    private Integer deleted;

}
```

### StuChooseCourseMap

```java
@Data
public class StuChooseCourseMap {
    /**
     * 选课 id
     */
    private String chooseCourseId;
    /**
     * 课程 id
     */
    private String courseId;
    /**
     * 专业 id
     */
    private String majorId;
    /**
     * 课程名称
     */
    private String courseName;
    /**
     * 是否必修
     */
    private String ifDegree;
    /**
     * 专业名称
     */
    private String majorName;
    /**
     * 创建时间
     */
    private Date createTime;
    /**
     * 课程时间
     */
    private String coursePeriod;
    /**
     * 学生数
     */
    private String stuChooseNum;
    /**
     * 学生 id
     */
    private String stuId;
    /**
     * 状态
     */
    private String state;
    /**
     * 学生名称
     */
    private String stuName;
}
```

### StuScoreMap

```java
@Data
public class StuScoreMap {
    /**
     * 学生 id
     */
    private String stuId;
    /**
     * 学生名称
     */
    private String stuName;
    /**
     * 班级名称
     */
    private String className;
    /**
     * 课程成绩
     */
    private List<Integer> courseScore;
    /**
     * 课程数量
     */
    private Integer scoreTotal;
}
```

