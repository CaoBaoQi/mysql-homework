---
title: 学生管理系统-展示
order: 5
icon: /note.svg
category:
    - PROJECT
    - MD
---

## 第一章 系统概述

### 1.1 问题的提出

随着信息技术的不断发展，传统的手工或半自动化的学生管理方式已经无法满足对效率和准确性的要求。手工管理方式不仅效率低下，而且容易出错，且难以应对大量数据的存储与查询。此外，学生信息的管理、课程安排、成绩评定等教学活动均需要大量的数据交换与处理，这些活动如果仍采用传统方式进行，将极大地影响工作的质量和管理水平。

在完成 《MySQL 数据库原理与应用》 课程的学习后，我们面临着将理论知识应用于实践的需求。为了巩固课程内容并提高实际操作技能，我们提出了设计并实现一个简化的学生选课系统作为课程作业。该项目旨在通过创建一个实际的数据库应用，能够更深入地理解数据库设计、数据管理和 SQL 语言的使用。该选课系统需要解决如何在数据库中有效地存储和管理学生、课程和选课信息的问题。它应该允许学生查看可用课程、进行选课操作，并查询自己的选课记录。同时，系统应支持教师管理课程信息和学生成绩。管理员则需要能够维护整个系统的正常运行，包括用户权限管理、数据备份和恢复等功能。

通过这个项目，我们希望能够：

1. 实践数据库设计的基本原则和方法。
2. 提高使用 SQL 语言进行数据定义、操作和查询的能力。
3. 理解并实现一个简单的数据库应用程序的前后端交互。
4. 学会如何处理实际应用中的数据一致性和完整性问题。

在这样的背景下，我们组提出了设计并实现一个学生管理系统，旨在通过自动化工具来提高管理效率，确保数据的准确性和安全性，同时为学生、教师和管理员提供一个友好且高效的工作平台。该系统的设计与实现，不仅能够帮助学校更好地管理学生信息，优化教学资源的分配，还能够提供一个便捷的沟通渠道，加强教师与学生之间的互动。

在设计过程中我们参照了以往成绩管理的方式(例如,手工管理和文件管理)，我们小组识别出以下几点主要问题：

1. 缺乏一个集中化的平台来统一管理学生数据，造成数据分散和重复劳动；
2. 学生选课、成绩管理等流程繁琐，缺乏自动化支持，导致效率低下；
3. 教师与学生之间的信息交流不畅，信息传递效率不高；
4. 管理员在进行学籍管理、课程安排、成绩录入等工作时，操作复杂且易出错；
5. 缺乏有效的数据分析工具，难以对学生信息和成绩数据进行有效分析，制定合理的教学改进措施。

为了解决上述问题，我们提出了开发一个全面的学生管理系统，该系统将通过现代化的数据库技术和 Web 开发技术，实现一个易于使用、功能全面、响应迅速的管理平台。我们希望通过设计一个全新的学生管理系统来解决这些问题，提供更好的用户体验，简化操作流程，同时巩固自己的知识。

在这个项目中，我们以小组的形式进行开发，每位成员承担着不同的工作任务。

| 姓名           | 学号       | 主要工作                                                     |
| -------------- | ---------- | ------------------------------------------------------------ |
| 曹宝琪 (组长 ) | 2309312102 | 主要负责后端开发以及数据库设计，确保系统的数据存储和处理能够高效、稳定地运行 |
| 曹蓓           | 2309312103 | 数据库具体实现逻辑 (E-R 图绘制)以及数据流图的绘制，确保数据库的结构和数据流畅的运转 |
| 程柄惠         | 2309312105 | 前端页面的编写以及数据库例题的整理开发，以提供用户友好的界面和良好的交互体验 |
| 焦慧静         | 2309312112 | 主页负责文档整理以及数据字典表结构的绘制，以确保项目文档的完整性和系统结构的清晰性 |

通过团队的合作和协调，我们将共同努力，确保项目的顺利进行，达到我们设计的学生管理系统的目标。我们将不断沟通和协作，及时解决问题，保持团队的高效运转。

### 1.2 系统设计的背景

在完成《MySQL数据库原理与应用》这门课程后，我们已经掌握了数据库的基础理论知识，包括数据库的设计、SQL语言的使用、数据模型的构建以及数据库的管理和优化等。为了将这些理论知识转化为实际操作技能，需要一个实践平台来模拟真实的数据库应用场景。传统的学习方法往往侧重于理论讲解和简单的示例操作，而缺乏系统性的实践机会。这导致在理解抽象概念和应对实际问题时可能会遇到困难。因此，设计并实现一个学生选课系统作为课程作业，不仅可以作为检验学习成果的手段，还可以提升自身能力。

当前，随着信息技术的快速发展，数据库在各行各业的应用越来越广泛。我们需要准备好应对未来职场的挑战，而这需要我们不仅要掌握数据库的理论基础，还要能够在实践中灵活应用这些知识。通过这个课程项目，我们将有机会亲自设计数据库模式、编写 SQL 语句进行数据操作，并通过构建一个简单的 Web应 用来实现前后端之间的数据交互。

此外，该项目还可以培养团队合作能力、项目管理技能以及解决实际问题的能力。通过与同伴协作，将学会如何共同规划项目、分配任务和沟通协调，这些技能在未来的工作中同样重要。

总的来说，此次学生选课系统的设计背景不仅是对《MySQL数据库原理与应用》课程知识的巩固和应用，也是对综合能力的一次重要锻炼。通过这个项目，我们将更好地准备自己迈向更高层次的学习和职业发展。

### 1.3 系统开发的目标

在完成《MySQL数据库原理与应用》课程的学习后，我们的团队致力于设计和开发一个学生选课系统，以实践和巩固课程中所学的知识。本项目的系统开发目标如下：

1. **数据库设计和后端开发：**
   - **负责人：曹宝琪 (组长)**
   - 目标：构建一个高效、稳定、可扩展的数据库来支撑学生选课系统。确保后端逻辑的正确实现，包括数据的增删改查操作、事务处理和并发控制等功能。同时，要保证系统的安全性，防止 SQL 注入等安全威胁。
2. **数据库模型和数据流图设计：**
   - **负责人：曹蓓**
   - 目标：设计一个清晰、合理的 E-R 图，确保数据库模型的准确性和完整性。通过数据流图展示数据在系统中的流动和处理，确保设计的合理性，为数据库的具体实现提供准确的蓝图。
3. **前端开发和用户界面设计：**
   - **负责人：程柄惠**
   - 目标：创建一个直观、用户友好的前端界面，使学生能够轻松进行选课操作。前端页面需要与后端数据库有效对接，实现数据的准确显示和及时更新。
4. **文档整理和数据字典的维护：**
   - **负责人：焦慧静**
   - 目标：整理和维护所有开发文档，包括需求分析、设计文档、用户手册和项目报告等。同时负责绘制和更新数据字典表结构，为项目的可维护性和可扩展性奠定基础。

通过这些目标的实现，我们希望能够：

- 提升团队协作和项目管理能力。
- 加深对数据库设计原理和应用的理解。
- 提高解决实际问题的能力。
- 开发出一个可用于实际教学环境的学生选课系统。

我们将严格按照项目管理的最佳实践来分配任务、追踪进度，并确保每个成员的工作得到有效的协调和支持。通过这个项目，我们期望能够将课堂上的理论知识与实际开发经验相结合，为未来的职业生涯打下坚实的基础。

### 1.4 实验设备条件

- 数据库

|           工具           |   版本    |
|:----------------------:|:-------:|
| **Navicat Premium 16** | 16.0.11 |
|       **MySQL**        |   8.0   |

- 后端

|           工具           |   版本    |
|:----------------------:|:-------:|
|        **JDK**         |   1.8   |
|     **SpringBoot**     | 2.7.10  |
|       **Maven**        |  3.8.1  |

- 前端

|           工具           |   版本    |
|:----------------------:|:-------:|
|        **Vue**         |   2.X   |

## 第二章 需求分析

### 2.1 系统分析

在系统分析阶段，我们的目标是深入理解学生选课系统的运作流程、用户需求以及系统应满足的功能和性能要求。此阶段的分析将为后续的系统设计和实现提供坚实的基础。以下是对系统分析的详细描述：

1. **用户需求收集：**
   - 通过问卷调查、访谈和观察等方法，收集学生、教师和教务管理人员的需求和期望。
   - 分析用户的基本操作流程，明确用户在选课系统中需要完成的任务。
2. **功能需求分析：**
   - 确定系统必须实现的核心功能，如课程浏览、选课操作、选课结果查询、课程管理等。
   - 分析各种用户角色（学生、教师、管理员）的特定需求，确保系统能够满足不同用户的操作习惯和权限需求。
3. **性能需求分析：**
   - 确定系统的性能标准，如响应时间、并发用户数量、数据处理能力等。
   - 分析高峰时段的用户行为模式，确保系统能够在用户量激增时保持稳定运行。
4. **安全性需求分析：**
   - 识别潜在的安全风险，如数据泄露、非法访问和系统攻击等。
   - 确定必要的安全措施，如用户认证、权限控制、数据加密和备份等。
5. **数据需求分析：**
   - 分析所需数据的类型、格式、来源和使用方式。
   - 确定数据存储、检索、维护和更新的需求。

### 2.2 可行性分析

1. **技术可行性：**
   - 评估团队是否具备开发系统所需的技术能力。
   - 确认现有技术资源能否支持项目需求，包括软件开发工具和服务器。
   - 考虑系统的可维护性和未来升级的需求。
2. **时间可行性：**
   - 制定详细的项目时间表，确保按时交付每个开发阶段。
   - 考虑学期日程和关键教育活动的时间限制，调整项目里程碑。
   - 预留适当的缓冲时间以应对可能的延期。
3. **团队分配：**
   - 根据项目需求和团队成员的专长进行角色分配。
   - 确保团队成员之间的协作和沟通流畅，以提高工作效率。
   - 定期评估团队进度，确保任务按时完成。
4. **操作可行性：**
   - 评估用户对新系统的接受程度和培训需求。
   - 确保系统设计考虑用户体验，简化操作流程。

### 2.3 数据流图

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231210143845374.png" alt="image-20231210143845374" style="zoom:67%;" />

## 第三章 概念结构设计

### 3.1 学生信息管理系统 CDM 图

<img src="https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231214133200299.png" alt="image-20231214133200299" style="zoom:67%;" />

### 3.2 数据字典

- 管理员模块

![image-20231209204621767](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209204621767.png)

- 老师模块

![image-20231209204829671](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209204829671.png)

- 学生模块

![image-20231209204754619](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209204754619.png)

- 选课模块

![image-20231209205035760](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209205035760.png)

- 成绩模块

![image-20231209204857271](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209204857271.png)

- 消息模块

![image-20231209204933041](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209204933041.png)

![image-20231209204955601](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209204955601.png)

## 第四章 逻辑结构设计

### 4.1 学生信息管理系统关系图

![image-20231214123748057](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231214123748057.png)

### 4.2逻辑结构模型生成到数据库中

- 管理员表

```sql
-- ----------------------------
-- Table structure for t_admin
-- ----------------------------
DROP TABLE IF EXISTS `t_admin`;
CREATE TABLE `t_admin`
(
    `admin_id`    varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NOT NULL DEFAULT '' COMMENT '管理员 id',
    `admin_name`  varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL     DEFAULT NULL COMMENT '管理员名称',
    `admin_pwd`   varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL     DEFAULT NULL COMMENT '管理员密码',
    `create_time` datetime                                                      NULL     DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `deleted`     int                                                           NULL     DEFAULT 0 COMMENT '是否被删除',
    PRIMARY KEY (`admin_id`) USING BTREE
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci COMMENT = '管理员表'
  ROW_FORMAT = DYNAMIC;
```

![image-20231209210411374](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210411374.png)

- 专业

```sql
-- ----------------------------
-- Table structure for t_major
-- ----------------------------
DROP TABLE IF EXISTS `t_major`;
CREATE TABLE `t_major`
(
    `major_id`     varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '专业 id',
    `major_name`   varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '专业名称',
    `class_total`  int                                                          NULL DEFAULT 0 COMMENT '班级数量',
    `course_total` int                                                          NULL DEFAULT 0 COMMENT '课程数量',
    `create_time`  datetime                                                     NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `stu_total`    int                                                          NULL DEFAULT 0 COMMENT '学生数量',
    `tea_total`    int                                                          NULL DEFAULT 0 COMMENT '老师数量',
    `deleted`      int                                                          NULL DEFAULT 0 COMMENT '是否被删除',
    PRIMARY KEY (`major_id`) USING BTREE
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci COMMENT = '专业表'
  ROW_FORMAT = DYNAMIC;
```

![image-20231209210203544](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210203544.png)

- 老师

```sql
-- ----------------------------
-- Table structure for t_teacher
-- ----------------------------
DROP TABLE IF EXISTS `t_teacher`;
CREATE TABLE `t_teacher`
(
    `tea_id`      varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NOT NULL COMMENT '教师 id',
    `major_id`    varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT NULL COMMENT '专业 id',
    `tea_name`    varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT NULL COMMENT '教师名称',
    `class_name`  varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT NULL COMMENT '班级名称',
    `tea_pwd`     varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '教师密码',
    `tea_ID_card` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT NULL COMMENT '教师 IDCard',
    `create_time` datetime                                                      NULL DEFAULT NULL COMMENT '创建时间',
    `class_id`    varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT NULL COMMENT '班级 id',
    `major_name`  varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT NULL COMMENT '专业名称',
    `class_no`    varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci   NULL DEFAULT NULL COMMENT '班级编号',
    `class_year`  varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci   NULL DEFAULT NULL COMMENT '年级',
    `deleted`     int                                                           NULL DEFAULT 0 COMMENT '是否被删除',
    PRIMARY KEY (`tea_id`) USING BTREE,
    INDEX `FK_Reference_3` (`class_id` ASC) USING BTREE,
    INDEX `FK_Reference_4` (`major_id` ASC) USING BTREE,
    CONSTRAINT `FK_Reference_3` FOREIGN KEY (`class_id`) REFERENCES `t_class` (`class_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT `FK_Reference_4` FOREIGN KEY (`major_id`) REFERENCES `t_major` (`major_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci
  ROW_FORMAT = DYNAMIC;
```

![image-20231209205854521](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209205854521.png)

![image-20231209205905657](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209205905657.png)

![image-20231209205917990](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209205917990.png)

- 学生

```sql
-- ----------------------------
-- Table structure for t_student
-- ----------------------------
DROP TABLE IF EXISTS `t_student`;
CREATE TABLE `t_student`
(
    `stu_id`         varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NOT NULL DEFAULT '' COMMENT '学生 id',
    `tea_id`         varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL     DEFAULT NULL COMMENT '教师 id',
    `class_id`       varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL     DEFAULT NULL COMMENT '班级 id',
    `major_id`       varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL     DEFAULT NULL COMMENT '专业 id',
    `stu_name`       varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL     DEFAULT '' COMMENT '学生姓名',
    `admission_year` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci   NULL     DEFAULT '' COMMENT '年级',
    `class_name`     varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL     DEFAULT '' COMMENT '班级名称',
    `stu_ID_card`    varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL     DEFAULT '' COMMENT '学生 IDCard',
    `stu_pwd`        varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL     DEFAULT '' COMMENT '学生密码',
    `class_no`       varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci   NULL     DEFAULT '' COMMENT '班级编号',
    `major_name`     varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL     DEFAULT '' COMMENT '专业名称',
    `create_time`    datetime                                                      NULL     DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `tea_name`       varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL     DEFAULT NULL COMMENT '老师名称(班主任)',
    `message_num`    int                                                           NULL     DEFAULT 0 COMMENT '信息数量',
    `deleted`        int                                                           NULL     DEFAULT 0 COMMENT '是否被删除',
    PRIMARY KEY (`stu_id`) USING BTREE,
    INDEX `FK_Reference_10` (`major_id` ASC) USING BTREE,
    INDEX `FK_Reference_8` (`class_id` ASC) USING BTREE,
    CONSTRAINT `FK_Reference_10` FOREIGN KEY (`major_id`) REFERENCES `t_major` (`major_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT `FK_Reference_8` FOREIGN KEY (`class_id`) REFERENCES `t_class` (`class_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci COMMENT = '学生表'
  ROW_FORMAT = DYNAMIC;
```

![image-20231209210012560](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210012560.png)

![image-20231209210007765](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210007765.png)

![image-20231209210004073](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210004073.png)

- 选课

```sql
-- ----------------------------
-- Table structure for t_choose_course
-- ----------------------------
DROP TABLE IF EXISTS `t_choose_course`;
CREATE TABLE `t_choose_course`
(
    `choose_course_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '选课 id',
    `stu_id`           varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '学生 id',
    `course_id`        varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '课程 id',
    `create_time`      datetime                                                     NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `state`            int                                                          NULL DEFAULT 0 COMMENT '是否选择',
    `stu_name`         varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '学生名称',
    `course_name`      varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '课程名称',
    `major_name`       varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '专业名称',
    `course_period`    varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT NULL COMMENT '课程时间',
    `if_degree`        varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT '0' COMMENT '是否选修',
    `deleted`          int                                                          NULL DEFAULT 0 COMMENT '是否被删除',
    PRIMARY KEY (`choose_course_id`) USING BTREE,
    INDEX `f12` (`stu_id` ASC) USING BTREE,
    INDEX `f13` (`course_id` ASC) USING BTREE,
    CONSTRAINT `f12` FOREIGN KEY (`stu_id`) REFERENCES `t_student` (`stu_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT `f13` FOREIGN KEY (`course_id`) REFERENCES `t_course` (`course_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci COMMENT = '选课表'
  ROW_FORMAT = DYNAMIC;
```

![image-20231209210356198](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210356198.png)

![image-20231209210353910](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210353910.png)

![image-20231209210350468](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210350468.png)

- 成绩

```sql
-- ----------------------------
-- Table structure for t_score
-- ----------------------------
DROP TABLE IF EXISTS `t_score`;
CREATE TABLE `t_score`
(
    `score_id`         varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '成绩 id',
    `choose_course_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '选课 id',
    `stu_id`           varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '学生 id',
    `score`            int                                                          NOT NULL COMMENT '成绩',
    `course_name`      varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '课程名称',
    `stu_name`         varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '学生名称',
    `create_time`      datetime                                                     NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `deleted`          int                                                          NULL DEFAULT 0 COMMENT '是否被删除',
    PRIMARY KEY (`score_id`) USING BTREE,
    INDEX `FK_Reference_1` (`stu_id` ASC) USING BTREE,
    INDEX `f14` (`choose_course_id` ASC) USING BTREE,
    CONSTRAINT `f14` FOREIGN KEY (`choose_course_id`) REFERENCES `t_choose_course` (`choose_course_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT `FK_Reference_1` FOREIGN KEY (`stu_id`) REFERENCES `t_student` (`stu_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci COMMENT = '成绩表'
  ROW_FORMAT = DYNAMIC;
```

![image-20231209210140673](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210140673.png)

![v](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210137957.png)

![image-20231209210135119](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210135119.png)

- 消息

```sql
-- ----------------------------
-- Table structure for t_stu_message
-- ----------------------------
DROP TABLE IF EXISTS `t_stu_message`;
CREATE TABLE `t_stu_message`
(
    `msg_id`      varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '消息 id',
    `stu_id`      varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT NULL COMMENT '学生 id',
    `tea_id`      varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT NULL COMMENT '教师 id',
    `msg_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '消息内容',
    `msg_time`    datetime                                                      NULL DEFAULT CURRENT_TIMESTAMP COMMENT '消息时间',
    `msg_state`   varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci   NULL DEFAULT '未读' COMMENT '消息状态(已读|未读)',
    `deleted`     int                                                           NULL DEFAULT 0 COMMENT '是否被删除',
    PRIMARY KEY (`msg_id`) USING BTREE,
    INDEX `FK_Reference_5` (`tea_id` ASC) USING BTREE,
    INDEX `FK_Reference_6` (`stu_id` ASC) USING BTREE,
    CONSTRAINT `FK_Reference_5` FOREIGN KEY (`tea_id`) REFERENCES `t_teacher` (`tea_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT `FK_Reference_6` FOREIGN KEY (`stu_id`) REFERENCES `t_student` (`stu_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci COMMENT = '学生消息表'
  ROW_FORMAT = DYNAMIC;
```

```sql
-- ----------------------------
-- Table structure for t_tea_message
-- ----------------------------
DROP TABLE IF EXISTS `t_tea_message`;
CREATE TABLE `t_tea_message`
(
    `msg_id`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '消息 id',
    `tea_id`      varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT NULL COMMENT '教师 id',
    `stu_id`      varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT NULL COMMENT '学生 id',
    `msg_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '消息内容',
    `msg_time`    datetime                                                      NULL DEFAULT NULL COMMENT '消息时间',
    `deleted`     int                                                           NULL DEFAULT 0 COMMENT '是否被删除',
    PRIMARY KEY (`msg_id`) USING BTREE,
    INDEX `f15` (`stu_id` ASC) USING BTREE,
    INDEX `f16` (`tea_id` ASC) USING BTREE,
    CONSTRAINT `f15` FOREIGN KEY (`stu_id`) REFERENCES `t_student` (`stu_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT `f16` FOREIGN KEY (`tea_id`) REFERENCES `t_teacher` (`tea_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci COMMENT = '老师消息表'
  ROW_FORMAT = DYNAMIC;
```

![image-20231209210101011](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210101011.png)

![image-20231209210058194](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210058194.png)

![image-20231209210055991](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209210055991.png)

![image-20231209205758802](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209205758802.png)

![image-20231209205816432](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209205816432.png)

![image-20231209205735845](https://jz-cbq-1311841992.cos.ap-beijing.myqcloud.com/images/image-20231209205735845.png)

## 第五章 物理结构设计

### 5.1 物理数据模型生成到数据库中

- 管理员表

```sql
-- ----------------------------
-- Records of t_admin
-- ----------------------------
INSERT INTO `t_admin` VALUES ('202301', '曹宝琪', '$2a$10$jaJzd0NOeS2h1XXSAsy6UufvcmTx/Execx4jdML9zwYUEYB7OkSWm', '2023-12-09 14:02:58', 0);
```



- 老师

```sql
-- ----------------------------
-- Records of t_teacher
-- ----------------------------
INSERT INTO `t_teacher` VALUES ('tea2023011', '01', '耿老师', '2023级计算机科学与技术1班', '$2a$10$aO/votnmx4IxiWtU6U4Iee8up4W4WTO43PCKW6SfYl33zJyrEztZ.', '141192200205060091', '2023-12-09 14:03:53', '2023011', '计算机科学与技术', '1', '2023', 0);
INSERT INTO `t_teacher` VALUES ('tea2023021', '02', 'testTeacher', '2023级test1班', '$2a$10$eApdFGDieNjNuwcemSPoQufFaA61mRg7GfDpq0EevP2XC7LxHWeZK', '141192200202020041', '2023-12-09 14:09:58', '2023021', 'test', '1', '2023', 0);
```



- 学生

```sql
-- ----------------------------
-- Records of t_student
-- ----------------------------
INSERT INTO `t_student` VALUES ('202301101', 'tea2023011', '2023011', '01', '曹宝琪', '2023', '2023 级计算机科学与技术1 班', '141182200205060092', '$2a$10$cpd2S70cHyLaSFU0jW.JS.mouD02RUKT0XNr6BO1LD35yBPxUMhnC', '1', '计算机科学与技术', '2023-12-09 14:05:22', '耿老师', 1, 0);
INSERT INTO `t_student` VALUES ('202301102', 'tea2023011', '2023011', '01', '曹蓓', '2023', '2023 级计算机科学与技术1 班', '141182200205060093', '$2a$10$LjT/AbINVIROH/nGPXcXtO/xNfUurjCYZQOj.o8Z/ubgZYVswG4sK', '1', '计算机科学与技术', '2023-12-09 14:05:31', '耿老师', 1, 0);
INSERT INTO `t_student` VALUES ('202301103', 'tea2023011', '2023011', '01', '程柄惠', '2023', '2023 级计算机科学与技术1 班', '141182200205060094', '$2a$10$ufiewYJjy0zMBMeQ/cfmKeoW5KNZRh5RpDjGvPd/1Sqx6K7LO5bRO', '1', '计算机科学与技术', '2023-12-09 14:05:43', '耿老师', 1, 0);
INSERT INTO `t_student` VALUES ('202301104', 'tea2023011', '2023011', '01', '焦慧静', '2023', '2023 级计算机科学与技术1 班', '141182200205060096', '$2a$10$I1hjc/o/qgm7ugeXHm/mt.9CwN8vcI1jTciJ8fhpxezWfNHxNTC4W', '1', '计算机科学与技术', '2023-12-09 14:05:55', '耿老师', 1, 0);
INSERT INTO `t_student` VALUES ('202302101', 'tea2023021', '2023021', '02', 'testStudent', '2023', '2023 级test1 班', '141182200205060041', '$2a$10$.gzyaNtTC59Peq3bVC7bFe1EzZnsvgE6OH91PqUiL5htCBpWVzJR2', '1', 'test', '2023-12-09 14:10:27', 'testTeacher', 0, 0);
```



- 选课

```sql
-- ----------------------------
-- Records of t_choose_course
-- ----------------------------
INSERT INTO `t_choose_course` VALUES ('202301101choosecourse0101', '202301101', 'course0101', '2023-12-09 14:05:58', 1, '曹宝琪', '大学英语', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301101choosecourse0102', '202301101', 'course0102', '2023-12-09 14:05:58', 1, '曹宝琪', '高等数学', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301101choosecourse0103', '202301101', 'course0103', '2023-12-09 14:05:58', 1, '曹宝琪', 'C 程序设计', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301101choosecourse0104', '202301101', 'course0104', '2023-12-09 14:05:58', 1, '曹宝琪', '体育', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301101choosecourse0105', '202301101', 'course0105', '2023-12-09 14:05:58', 1, '曹宝琪', 'MySQL 数据库设计', '计算机科学与技术', '大一下', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301101choosecourse0106', '202301101', 'course0106', '2023-12-09 14:05:58', 1, '曹宝琪', 'Java 程序开发', '计算机科学与技术', '大一下', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301102choosecourse0101', '202301102', 'course0101', '2023-12-09 14:05:58', 1, '曹蓓', '大学英语', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301102choosecourse0102', '202301102', 'course0102', '2023-12-09 14:05:58', 1, '曹蓓', '高等数学', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301102choosecourse0103', '202301102', 'course0103', '2023-12-09 14:05:58', 1, '曹蓓', 'C 程序设计', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301102choosecourse0104', '202301102', 'course0104', '2023-12-09 14:05:58', 1, '曹蓓', '体育', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301102choosecourse0105', '202301102', 'course0105', '2023-12-09 14:05:58', 1, '曹蓓', 'MySQL 数据库设计', '计算机科学与技术', '大一下', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301102choosecourse0106', '202301102', 'course0106', '2023-12-09 14:05:58', 1, '曹蓓', 'Java 程序开发', '计算机科学与技术', '大一下', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301103choosecourse0101', '202301103', 'course0101', '2023-12-09 14:05:58', 1, '程柄惠', '大学英语', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301103choosecourse0102', '202301103', 'course0102', '2023-12-09 14:05:58', 1, '程柄惠', '高等数学', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301103choosecourse0103', '202301103', 'course0103', '2023-12-09 14:05:58', 1, '程柄惠', 'C 程序设计', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301103choosecourse0104', '202301103', 'course0104', '2023-12-09 14:05:58', 1, '程柄惠', '体育', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301103choosecourse0105', '202301103', 'course0105', '2023-12-09 14:05:58', 1, '程柄惠', 'MySQL 数据库设计', '计算机科学与技术', '大一下', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301103choosecourse0106', '202301103', 'course0106', '2023-12-09 14:05:58', 1, '程柄惠', 'Java 程序开发', '计算机科学与技术', '大一下', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301104choosecourse0101', '202301104', 'course0101', '2023-12-09 14:05:58', 1, '焦慧静', '大学英语', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301104choosecourse0102', '202301104', 'course0102', '2023-12-09 14:05:58', 1, '焦慧静', '高等数学', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301104choosecourse0103', '202301104', 'course0103', '2023-12-09 14:05:58', 1, '焦慧静', 'C 程序设计', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301104choosecourse0104', '202301104', 'course0104', '2023-12-09 14:05:58', 1, '焦慧静', '体育', '计算机科学与技术', '大一上', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301104choosecourse0105', '202301104', 'course0105', '2023-12-09 14:05:58', 1, '焦慧静', 'MySQL 数据库设计', '计算机科学与技术', '大一下', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202301104choosecourse0106', '202301104', 'course0106', '2023-12-09 14:05:58', 1, '焦慧静', 'Java 程序开发', '计算机科学与技术', '大一下', '1', 0);
INSERT INTO `t_choose_course` VALUES ('202302101choosecourse0202', '202302101', 'course0202', '2023-12-09 14:11:16', 1, 'testStudent', 'testMust', 'test', '大一上', '1', 0);
```



- 成绩

```sql
-- ----------------------------
-- Records of t_score
-- ----------------------------
INSERT INTO `t_score` VALUES ('202301101-202301101choosecourse0101', '202301101choosecourse0101', '202301101', 22, '大学英语', '曹宝琪', '2023-12-09 14:06:01', 0);
INSERT INTO `t_score` VALUES ('202301101-202301101choosecourse0102', '202301101choosecourse0102', '202301101', 3, '高等数学', '曹宝琪', '2023-12-09 14:06:01', 0);
INSERT INTO `t_score` VALUES ('202301101-202301101choosecourse0103', '202301101choosecourse0103', '202301101', 40, 'C 程序设计', '曹宝琪', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301101-202301101choosecourse0104', '202301101choosecourse0104', '202301101', 18, '体育', '曹宝琪', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301101-202301101choosecourse0105', '202301101choosecourse0105', '202301101', 74, 'MySQL 数据库设计', '曹宝琪', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301101-202301101choosecourse0106', '202301101choosecourse0106', '202301101', 95, 'Java 程序开发', '曹宝琪', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301102-202301102choosecourse0101', '202301102choosecourse0101', '202301102', 76, '大学英语', '曹蓓', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301102-202301102choosecourse0102', '202301102choosecourse0102', '202301102', 49, '高等数学', '曹蓓', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301102-202301102choosecourse0103', '202301102choosecourse0103', '202301102', 46, 'C 程序设计', '曹蓓', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301102-202301102choosecourse0104', '202301102choosecourse0104', '202301102', 66, '体育', '曹蓓', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301102-202301102choosecourse0105', '202301102choosecourse0105', '202301102', 43, 'MySQL 数据库设计', '曹蓓', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301102-202301102choosecourse0106', '202301102choosecourse0106', '202301102', 3, 'Java 程序开发', '曹蓓', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301103-202301103choosecourse0101', '202301103choosecourse0101', '202301103', 33, '大学英语', '程柄惠', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301103-202301103choosecourse0102', '202301103choosecourse0102', '202301103', 19, '高等数学', '程柄惠', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301103-202301103choosecourse0103', '202301103choosecourse0103', '202301103', 81, 'C 程序设计', '程柄惠', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301103-202301103choosecourse0104', '202301103choosecourse0104', '202301103', 80, '体育', '程柄惠', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301103-202301103choosecourse0105', '202301103choosecourse0105', '202301103', 79, 'MySQL 数据库设计', '程柄惠', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301103-202301103choosecourse0106', '202301103choosecourse0106', '202301103', 27, 'Java 程序开发', '程柄惠', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301104-202301104choosecourse0101', '202301104choosecourse0101', '202301104', 76, '大学英语', '焦慧静', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301104-202301104choosecourse0102', '202301104choosecourse0102', '202301104', 46, '高等数学', '焦慧静', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301104-202301104choosecourse0103', '202301104choosecourse0103', '202301104', 11, 'C 程序设计', '焦慧静', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301104-202301104choosecourse0104', '202301104choosecourse0104', '202301104', 32, '体育', '焦慧静', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301104-202301104choosecourse0105', '202301104choosecourse0105', '202301104', 15, 'MySQL 数据库设计', '焦慧静', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202301104-202301104choosecourse0106', '202301104choosecourse0106', '202301104', 11, 'Java 程序开发', '焦慧静', '2023-12-09 14:06:02', 0);
INSERT INTO `t_score` VALUES ('202302101-202302101choosecourse0202', '202302101choosecourse0202', '202302101', 67, 'testMust', 'testStudent', '2023-12-09 14:11:19', 0);
```

