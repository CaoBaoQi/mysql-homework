import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-TTCQfrUW.js";const e={},p=t(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="mybatis-plus" tabindex="-1"><a class="header-anchor" href="#mybatis-plus" aria-hidden="true">#</a> MyBatis-Plus</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * MP 配置类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * MP 分页拦截器
     *
     * <span class="token keyword">@return</span> MybatisPlusInterceptor
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token class-name">DbType</span><span class="token punctuation">.</span><span class="token constant">MYSQL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web-mvc" tabindex="-1"><a class="header-anchor" href="#web-mvc" aria-hidden="true">#</a> Web-MVC</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * WebMVC 配置类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyWebMvcConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">LoginInterceptor</span> loginInterceptor<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 跨域
     *
     * <span class="token keyword">@param</span> <span class="token parameter">registry</span> registry
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCorsMappings</span><span class="token punctuation">(</span><span class="token class-name">CorsRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowedOrigins</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowedHeaders</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 登录拦截器
     *
     * <span class="token keyword">@param</span> <span class="token parameter">registry</span> registry
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span>loginInterceptor<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">excludePathPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">excludePathPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;/admin/add&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">excludePathPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;/swagger-resources/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/webjars/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;v2/**&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;swagger-ui.html/**&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">excludePathPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;/logout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Redis 配置类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisConnectionFactory</span> factory<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * RedisTemplate
     *
     * <span class="token keyword">@return</span> RedisTemplate
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>

        redisTemplate<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> serializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        redisTemplate<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span>serializer<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ObjectMapper</span> objectMapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectMapper<span class="token punctuation">.</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">,</span> <span class="token class-name">JsonAutoDetect<span class="token punctuation">.</span>Visibility</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectMapper<span class="token punctuation">.</span><span class="token function">setDateFormat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectMapper<span class="token punctuation">.</span><span class="token function">setTimeZone</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JsonMapper</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">MapperFeature</span><span class="token punctuation">.</span><span class="token constant">USE_ANNOTATIONS</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">DeserializationFeature</span><span class="token punctuation">.</span><span class="token constant">FAIL_ON_UNKNOWN_PROPERTIES</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">SerializationFeature</span><span class="token punctuation">.</span><span class="token constant">FAIL_ON_EMPTY_BEANS</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectMapper<span class="token punctuation">.</span><span class="token function">activateDefaultTyping</span><span class="token punctuation">(</span><span class="token class-name">LaissezFaireSubTypeValidator</span><span class="token punctuation">.</span>instance<span class="token punctuation">,</span> <span class="token class-name">ObjectMapper<span class="token punctuation">.</span>DefaultTyping</span><span class="token punctuation">.</span><span class="token constant">NON_FINAL</span><span class="token punctuation">,</span> <span class="token class-name">JsonTypeInfo<span class="token punctuation">.</span>As</span><span class="token punctuation">.</span><span class="token constant">PROPERTY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectMapper<span class="token punctuation">.</span><span class="token function">setSerializationInclusion</span><span class="token punctuation">(</span><span class="token class-name">JsonInclude<span class="token punctuation">.</span>Include</span><span class="token punctuation">.</span><span class="token constant">NON_NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        serializer<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>objectMapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swagger" tabindex="-1"><a class="header-anchor" href="#swagger" aria-hidden="true">#</a> Swagger</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Swagger2 配置类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerConfig</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * docket
     *
     * <span class="token keyword">@return</span> Docket
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">docket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Docket</span> docket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ApiInfo</span> apiInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApiInfoBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string">&quot;MySQL-Homework&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">&quot;V1.0.0&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">&quot;MySQL-Homework 曹宝琪|曹蓓|程柄惠|焦惠静&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">contact</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Contact</span><span class="token punctuation">(</span><span class="token string">&quot;晋中学院-曹宝琪&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://gitee.com/cola777jz&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1203952894@qq.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">license</span><span class="token punctuation">(</span><span class="token string">&quot;Apache 2.0&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        docket <span class="token operator">=</span> docket<span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span>apiInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> docket<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="threadpool" tabindex="-1"><a class="header-anchor" href="#threadpool" aria-hidden="true">#</a> ThreadPool</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 线程池配置类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPoolConfig</span> <span class="token keyword">implements</span> <span class="token class-name">AsyncConfigurer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 现场管理
     *
     * <span class="token keyword">@return</span> Executor
     */</span>
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;taskExecutor&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Executor</span> <span class="token function">asyncServiceExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ThreadPoolTaskExecutor</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">setCorePoolSize</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">setMaxPoolSize</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">setQueueCapacity</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        executor<span class="token punctuation">.</span><span class="token function">setKeepAliveSeconds</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">setThreadNamePrefix</span><span class="token punctuation">(</span><span class="token string">&quot;MySQL-Homework&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">setWaitForTasksToCompleteOnShutdown</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> executor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工具类" tabindex="-1"><a class="header-anchor" href="#工具类" aria-hidden="true">#</a> 工具类</h2><h3 id="jwtutils" tabindex="-1"><a class="header-anchor" href="#jwtutils" aria-hidden="true">#</a> JWTUtils</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * JWT 工具类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JWTUtils</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> redisTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${cbq.jwt-secret}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">JWT_SECRET</span> <span class="token operator">=</span> <span class="token string">&quot;CaoBaoQi&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 成绩 token
     * <span class="token keyword">@param</span> <span class="token parameter">userId</span> userId
     * <span class="token keyword">@return</span> token
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">createToken</span><span class="token punctuation">(</span><span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> claims <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        claims<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JwtBuilder</span> jwtBuilder <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">signWith</span><span class="token punctuation">(</span><span class="token class-name">SignatureAlgorithm</span><span class="token punctuation">.</span><span class="token constant">HS256</span><span class="token punctuation">,</span> <span class="token constant">JWT_SECRET</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setClaims</span><span class="token punctuation">(</span>claims<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setIssuedAt</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setExpiration</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> jwtBuilder<span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *  解析 token
     * <span class="token keyword">@param</span> <span class="token parameter">token</span> token
     * <span class="token keyword">@return</span> Object
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getUserIdByToken</span><span class="token punctuation">(</span><span class="token class-name">String</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> body <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">parser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span><span class="token constant">JWT_SECRET</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> body<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 通过 token 获取 User
     * <span class="token keyword">@param</span> <span class="token parameter">token</span> token
     * <span class="token keyword">@return</span> User
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getUserByToken</span><span class="token punctuation">(</span><span class="token class-name">String</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> userIdByToken <span class="token operator">=</span> <span class="token function">getUserIdByToken</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> userIdByToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span> userJson <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> userJson<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>userJson<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logininterceptro" tabindex="-1"><a class="header-anchor" href="#logininterceptro" aria-hidden="true">#</a> LoginInterceptro</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 登录拦截器
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">JWTUtils</span> jwtUtils<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
         * 1.需要判断请求的接口路径是否为 HandlerMethod（controller方法）
         * 2.判断 token 是否为空，如果为空，未登录
         * 3.如 果token不 为空，登录验证 loginService checkToken
         * 4.如果认证成功，放行即可
         */</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>handler <span class="token keyword">instanceof</span> <span class="token class-name">HandlerMethod</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">String</span> token <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;==============request start========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> requestURI <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;request uri:{}&quot;</span><span class="token punctuation">,</span> requestURI<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;request method:{}&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;token:{}&quot;</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;==============request end==========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/json;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            response<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">&quot;请登录后再访问&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Object</span> user <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            user <span class="token operator">=</span> jwtUtils<span class="token punctuation">.</span><span class="token function">getUserByToken</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            response<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">&quot;请登录后再访问&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/json;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            response<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">&quot;请登录后再访问&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">UserThreadLocal</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除 ThreadLocal 中用完的信息，避免出现内泄露的风险
     *
     * <span class="token keyword">@param</span> <span class="token parameter">request</span>  request
     * <span class="token keyword">@param</span> <span class="token parameter">response</span> response
     * <span class="token keyword">@param</span> <span class="token parameter">handler</span>  handler
     * <span class="token keyword">@param</span> <span class="token parameter">ex</span>       ex
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span> Exception
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserThreadLocal</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="userthreadlocal" tabindex="-1"><a class="header-anchor" href="#userthreadlocal" aria-hidden="true">#</a> UserThreadLocal</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 用户线程
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserThreadLocal</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">UserThreadLocal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token constant">LOCAL</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">Object</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">LOCAL</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">LOCAL</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">LOCAL</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="result-实体集" tabindex="-1"><a class="header-anchor" href="#result-实体集" aria-hidden="true">#</a> Result 实体集</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Result 返回操作类
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>
 */</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 状态码
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> code<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 数据
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span> data<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * msg
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msg<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;20000&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token class-name">T</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;20000&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token class-name">T</span> data<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;20000&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;20000&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;20001&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;fail&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">fail</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;20001&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="管理员模块" tabindex="-1"><a class="header-anchor" href="#管理员模块" aria-hidden="true">#</a> 管理员模块</h2><h3 id="人员管理" tabindex="-1"><a class="header-anchor" href="#人员管理" aria-hidden="true">#</a> 人员管理</h3><h3 id="课程管理" tabindex="-1"><a class="header-anchor" href="#课程管理" aria-hidden="true">#</a> 课程管理</h3><h3 id="班级管理" tabindex="-1"><a class="header-anchor" href="#班级管理" aria-hidden="true">#</a> 班级管理</h3><h3 id="专业管理" tabindex="-1"><a class="header-anchor" href="#专业管理" aria-hidden="true">#</a> 专业管理</h3><h3 id="全校成绩管理" tabindex="-1"><a class="header-anchor" href="#全校成绩管理" aria-hidden="true">#</a> 全校成绩管理</h3><h2 id="老师模块" tabindex="-1"><a class="header-anchor" href="#老师模块" aria-hidden="true">#</a> 老师模块</h2><h3 id="本班成绩管理" tabindex="-1"><a class="header-anchor" href="#本班成绩管理" aria-hidden="true">#</a> 本班成绩管理</h3><h3 id="专业成绩管理" tabindex="-1"><a class="header-anchor" href="#专业成绩管理" aria-hidden="true">#</a> 专业成绩管理</h3><h3 id="消息管理" tabindex="-1"><a class="header-anchor" href="#消息管理" aria-hidden="true">#</a> 消息管理</h3><h2 id="学生模块" tabindex="-1"><a class="header-anchor" href="#学生模块" aria-hidden="true">#</a> 学生模块</h2><h3 id="学生信息查看" tabindex="-1"><a class="header-anchor" href="#学生信息查看" aria-hidden="true">#</a> 学生信息查看</h3><h3 id="选课" tabindex="-1"><a class="header-anchor" href="#选课" aria-hidden="true">#</a> 选课</h3><h3 id="消息查看" tabindex="-1"><a class="header-anchor" href="#消息查看" aria-hidden="true">#</a> 消息查看</h3><h2 id="x-开发环境" tabindex="-1"><a class="header-anchor" href="#x-开发环境" aria-hidden="true">#</a> X. 开发环境</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span><span class="token number">3306</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">8.0</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> root
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>homework
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span><span class="token number">6379</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6379:6379&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209202913434.png" alt="image-20231209202913434" style="zoom:67%;"><img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209202932472.png" alt="image-20231209202932472" style="zoom:67%;"><h2 id="x-部署" tabindex="-1"><a class="header-anchor" href="#x-部署" aria-hidden="true">#</a> X. 部署</h2><h3 id="yaml" tabindex="-1"><a class="header-anchor" href="#yaml" aria-hidden="true">#</a> Yaml</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8091</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">mvc</span><span class="token punctuation">:</span>
    <span class="token key atrule">path match</span><span class="token punctuation">:</span>
      <span class="token key atrule">matching-strategy</span><span class="token punctuation">:</span> ant_path_matcher
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> YOUR_HOST
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> YOUR_URL
    <span class="token key atrule">username</span><span class="token punctuation">:</span> YOUR_USERNAME
    <span class="token key atrule">password</span><span class="token punctuation">:</span> YOUR_PASSWORD
    <span class="token key atrule">druid</span><span class="token punctuation">:</span>
      <span class="token key atrule">initial-size</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">20</span>
      <span class="token key atrule">max-wait</span><span class="token punctuation">:</span> <span class="token number">60000</span>
      <span class="token key atrule">min-idle</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token key atrule">validation-query</span><span class="token punctuation">:</span> select 1
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">jackson</span><span class="token punctuation">:</span>
    <span class="token key atrule">date-format</span><span class="token punctuation">:</span> yyyy<span class="token punctuation">-</span>MM<span class="token punctuation">-</span>dd HH<span class="token punctuation">:</span>mm<span class="token punctuation">:</span>ss
    <span class="token key atrule">time-zone</span><span class="token punctuation">:</span> GMT+8
  <span class="token key atrule">flyway</span><span class="token punctuation">:</span>
    <span class="token key atrule">baseline-description</span><span class="token punctuation">:</span>
    <span class="token key atrule">baseline-version</span><span class="token punctuation">:</span> <span class="token number">20231209001</span>
    <span class="token key atrule">baseline-on-migrate</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">default-schema</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>homework
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mapper/<span class="token important">*.xml</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> jz.cbq.backend.entity
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">map-underscore-to-camel-case</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl</span>
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token key atrule">db-config</span><span class="token punctuation">:</span>
      <span class="token key atrule">logic-delete-field</span><span class="token punctuation">:</span> deleted
      <span class="token key atrule">logic-not-delete-value</span><span class="token punctuation">:</span> <span class="token number">0</span>
      <span class="token key atrule">logic-delete-value</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token key atrule">table-prefix</span><span class="token punctuation">:</span> t_
<span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">jz</span><span class="token punctuation">:</span>
      <span class="token key atrule">cbq</span><span class="token punctuation">:</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">mapper</span><span class="token punctuation">:</span> INFO
<span class="token key atrule">cbq</span><span class="token punctuation">:</span>
  <span class="token key atrule">admin-secret</span><span class="token punctuation">:</span> TODO
  <span class="token key atrule">jwt-secret</span><span class="token punctuation">:</span> TODO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> eclipse/centos_jdk8</span>
<span class="token instruction"><span class="token keyword">LABEL</span> authors=<span class="token string">&quot;caobaoqi&quot;</span></span>


<span class="token instruction"><span class="token keyword">COPY</span> target/backend-0.0.1-SNAPSHOT.jar .</span>

<span class="token instruction"><span class="token keyword">CMD</span> java -jar backend-0.0.1-SNAPSHOT.jar</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8091</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209202959539.png" alt="image-20231209202959539" style="zoom:67%;"><h2 id="x-依赖-xml" tabindex="-1"><a class="header-anchor" href="#x-依赖-xml" aria-hidden="true">#</a> X. 依赖 .xml</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.7.10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- lookup parent from repository --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--INFO--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>jz.cbq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>backend<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://gitee.com/cola777jz/mysql-homework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>MySQL Homework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--stater-redis--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--stater-web--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--Security + JWT--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-security-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.6.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.jsonwebtoken<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jjwt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.9.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--Flyway--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.flywaydb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>flyway-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.flywaydb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>flyway-mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--DB--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--MP--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-generator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--Swagger2--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springfox-swagger-ui<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.9.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springfox-swagger2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.9.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--Freemarker--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.freemarker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>freemarker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.3.28<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--Bootstarp-UI--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.xiaoymin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>swagger-bootstrap-ui<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.9.6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--FastJson--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>fastjson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.0.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--Ngrok--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.github.kilmajster<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>ngrok-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.6.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--Lombok--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--DevTools--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--Test--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclude</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclude</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>excludes</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="x-entity-实体" tabindex="-1"><a class="header-anchor" href="#x-entity-实体" aria-hidden="true">#</a> X. Entity 实体</h2><h3 id="admin-管理员" tabindex="-1"><a class="header-anchor" href="#admin-管理员" aria-hidden="true">#</a> Admin 管理员</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 管理员 实体类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;管理员&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Admin</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 管理员 id
     */</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;admin_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> adminId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 管理员名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> adminName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 管理员密码
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> adminPwd<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否删除
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> deleted<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="major-专业" tabindex="-1"><a class="header-anchor" href="#major-专业" aria-hidden="true">#</a> Major 专业</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 专业 实体类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;专业&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Major</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 专业 id
     */</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;major_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> majorId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 专业名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> majorName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 班级数量
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> classTotal<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程数量
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> courseTotal<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生数量
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> stuTotal<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 老师数量
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> teaTotal<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否删除
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> deleted<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="class-班级" tabindex="-1"><a class="header-anchor" href="#class-班级" aria-hidden="true">#</a> Class 班级</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 班级 实体类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;班级&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Class</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 班级 id
     */</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;class_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> classId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 年级
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> classYear<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 专业 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> majorId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 专业名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> majorName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 老师名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> teaName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 班级名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> className<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生数量
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> stuTotal<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否删除
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> deleted<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="teacher-老师" tabindex="-1"><a class="header-anchor" href="#teacher-老师" aria-hidden="true">#</a> Teacher 老师</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 老师 实体类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;老师&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 老师 id
     */</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;tea_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> teaId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 专业 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> majorId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 年级
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> classYear<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 专业名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> majorName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 老师名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> teaName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 班级名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> className<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 老师密码
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> teaPwd<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 班级 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> classId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 老师 IDCard
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> teaIdCard<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 班级编号
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> classNo<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否删除
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> deleted<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="student-学生" tabindex="-1"><a class="header-anchor" href="#student-学生" aria-hidden="true">#</a> Student 学生</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 学生 实体类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;学生&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生 id
     */</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;stu_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 老师 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> teaId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 专业 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> majorId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 班级 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> classId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 年级
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> admissionYear<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 班级名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> className<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生 IDCard
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuIdCard<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生密码
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuPwd<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 班级编号
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> classNo<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 专业名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> majorName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 老师名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> teaName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 信息数量
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> messageNum<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否删除
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> deleted<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="course-课程" tabindex="-1"><a class="header-anchor" href="#course-课程" aria-hidden="true">#</a> Course 课程</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 课程 实体类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;课程&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程 id
     */</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;course_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> courseId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 专业 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> majorId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 专业名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> majorName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> courseName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否选修
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> ifDegree<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> coursePeriod<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 选择该课程的学生数量
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> stuChooseNum<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否删除
     */</span>
	<span class="token keyword">private</span> <span class="token class-name">Integer</span> deleted<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="choosecourse-选课" tabindex="-1"><a class="header-anchor" href="#choosecourse-选课" aria-hidden="true">#</a> ChooseCourse 选课</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 选课 实体类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;选课&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ChooseCourse</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 选课 id
     */</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;choose_course_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token class-name">ChooseCourseId</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token class-name">CourseId</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> <span class="token class-name">CreateTime</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 状态
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> state<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> courseName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 专业名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> majorName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> coursePeriod<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否选修
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> ifDegree<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否删除
     */</span>
	<span class="token keyword">private</span> <span class="token class-name">Integer</span> deleted<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="score-成绩" tabindex="-1"><a class="header-anchor" href="#score-成绩" aria-hidden="true">#</a> Score 成绩</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 成绩 实体类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;成绩&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Score</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 成绩 id
     */</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;score_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> scoreId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token class-name">ChooseCourseId</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 成绩
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> score<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> courseName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否删除
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> deleted<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stumessage-学生消息" tabindex="-1"><a class="header-anchor" href="#stumessage-学生消息" aria-hidden="true">#</a> StuMessage 学生消息</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 学生信息 实体类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;学生信息&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StuMessage</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 信息 id
     */</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;msg_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msgId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 老师 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> teaId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 信息内容
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msgContent<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 消息时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> msgTime<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 消息状态(已读|未读)
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msgState<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否删除
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> deleted<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="teamessage-老师消息" tabindex="-1"><a class="header-anchor" href="#teamessage-老师消息" aria-hidden="true">#</a> TeaMessage 老师消息</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 老师信息 实体类
 *
 * <span class="token keyword">@author</span> caobaoqi
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;老师信息&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TeaMessage</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 消息 id
     */</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;msg_id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msgId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 老师 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> teaId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 消息内容
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msgContent<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 消息时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> msgTime<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否删除
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> deleted<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stuchoosecoursemap" tabindex="-1"><a class="header-anchor" href="#stuchoosecoursemap" aria-hidden="true">#</a> StuChooseCourseMap</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StuChooseCourseMap</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 选课 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> chooseCourseId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> courseId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 专业 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> majorId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> courseName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否必修
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> ifDegree<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 专业名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> majorName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> coursePeriod<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生数
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuChooseNum<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 状态
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> state<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stuscoremap" tabindex="-1"><a class="header-anchor" href="#stuscoremap" aria-hidden="true">#</a> StuScoreMap</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StuScoreMap</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 学生 id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 学生名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> stuName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 班级名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> className<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程成绩
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> courseScore<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 课程数量
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> scoreTotal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,71),c=[p];function l(o,i){return s(),a("div",null,c)}const k=n(e,[["render",l],["__file","projetc01-backend.html.vue"]]);export{k as default};
