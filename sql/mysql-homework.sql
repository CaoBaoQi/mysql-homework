/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 80035
 Source Host           : localhost:3306
 Source Schema         : mysql-homework

 Target Server Type    : MySQL
 Target Server Version : 80035
 File Encoding         : 65001

 Date: 09/12/2023 01:49:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_admin
-- ----------------------------
DROP TABLE IF EXISTS `t_admin`;
CREATE TABLE `t_admin`  (
  `admin_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '管理员 id',
  `admin_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '管理员名称',
  `admin_pwd` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '管理员密码',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `deleted` int NULL DEFAULT 0 COMMENT '是否被删除',
  PRIMARY KEY (`admin_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '管理员表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of t_admin
-- ----------------------------
INSERT INTO `t_admin` VALUES ('202301', '曹宝琪', '$2a$10$qkFo8ORu5F3x5MHavEuFd./KJ1CXvTpSRAKx8KD2YKULlvU/h8yci', '2023-12-08 14:39:20', 0);

-- ----------------------------
-- Table structure for t_choose_course
-- ----------------------------
DROP TABLE IF EXISTS `t_choose_course`;
CREATE TABLE `t_choose_course`  (
  `choose_course_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '选课 id',
  `stu_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '学生 id',
  `course_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '课程 id',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `state` int NULL DEFAULT 0 COMMENT '是否选择',
  `stu_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '学生名称',
  `course_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '课程名称',
  `major_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '专业名称',
  `course_period` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '课程时间',
  `if_degree` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0' COMMENT '是否选修',
  PRIMARY KEY (`choose_course_id`) USING BTREE,
  INDEX `f12`(`stu_id` ASC) USING BTREE,
  INDEX `f13`(`course_id` ASC) USING BTREE,
  CONSTRAINT `f12` FOREIGN KEY (`stu_id`) REFERENCES `t_student` (`stu_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `f13` FOREIGN KEY (`course_id`) REFERENCES `t_course` (`course_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '选课表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of t_choose_course
-- ----------------------------
INSERT INTO `t_choose_course` VALUES ('202301101choosecourse0101', '202301101', 'course0101', '2023-12-09 01:26:31', 1, '曹宝琪', '大学英语', '计算机科学与技术', '大一上', '1');
INSERT INTO `t_choose_course` VALUES ('202301101choosecourse0103', '202301101', 'course0103', '2023-12-09 01:26:31', 1, '曹宝琪', '体育', '计算机科学与技术', '大一上', '1');
INSERT INTO `t_choose_course` VALUES ('202301101choosecourse0105', '202301101', 'course0105', '2023-12-09 01:26:31', 1, '曹宝琪', '高等数学', '计算机科学与技术', '大一上', '1');
INSERT INTO `t_choose_course` VALUES ('202301101choosecourse0106', '202301101', 'course0106', '2023-12-09 01:26:31', 1, '曹宝琪', '数据结构', '计算机科学与技术', '大一下', '1');
INSERT INTO `t_choose_course` VALUES ('202301101choosecourse0107', '202301101', 'course0107', '2023-12-09 01:26:31', 1, '曹宝琪', 'Web 开发', '计算机科学与技术', '大一下', '1');
INSERT INTO `t_choose_course` VALUES ('202301102choosecourse0101', '202301102', 'course0101', '2023-12-09 01:26:31', 1, '曹蓓', '大学英语', '计算机科学与技术', '大一上', '1');
INSERT INTO `t_choose_course` VALUES ('202301102choosecourse0103', '202301102', 'course0103', '2023-12-09 01:26:31', 1, '曹蓓', '体育', '计算机科学与技术', '大一上', '1');
INSERT INTO `t_choose_course` VALUES ('202301102choosecourse0105', '202301102', 'course0105', '2023-12-09 01:26:31', 1, '曹蓓', '高等数学', '计算机科学与技术', '大一上', '1');
INSERT INTO `t_choose_course` VALUES ('202301102choosecourse0106', '202301102', 'course0106', '2023-12-09 01:26:31', 1, '曹蓓', '数据结构', '计算机科学与技术', '大一下', '1');
INSERT INTO `t_choose_course` VALUES ('202301102choosecourse0107', '202301102', 'course0107', '2023-12-09 01:26:31', 1, '曹蓓', 'Web 开发', '计算机科学与技术', '大一下', '1');
INSERT INTO `t_choose_course` VALUES ('202301103choosecourse0101', '202301103', 'course0101', '2023-12-09 01:26:31', 1, '程柄惠', '大学英语', '计算机科学与技术', '大一上', '1');
INSERT INTO `t_choose_course` VALUES ('202301103choosecourse0103', '202301103', 'course0103', '2023-12-09 01:26:31', 1, '程柄惠', '体育', '计算机科学与技术', '大一上', '1');
INSERT INTO `t_choose_course` VALUES ('202301103choosecourse0105', '202301103', 'course0105', '2023-12-09 01:26:32', 1, '程柄惠', '高等数学', '计算机科学与技术', '大一上', '1');
INSERT INTO `t_choose_course` VALUES ('202301103choosecourse0106', '202301103', 'course0106', '2023-12-09 01:26:32', 1, '程柄惠', '数据结构', '计算机科学与技术', '大一下', '1');
INSERT INTO `t_choose_course` VALUES ('202301103choosecourse0107', '202301103', 'course0107', '2023-12-09 01:26:32', 1, '程柄惠', 'Web 开发', '计算机科学与技术', '大一下', '1');
INSERT INTO `t_choose_course` VALUES ('202301104choosecourse0101', '202301104', 'course0101', '2023-12-09 01:26:32', 1, '焦慧静', '大学英语', '计算机科学与技术', '大一上', '1');
INSERT INTO `t_choose_course` VALUES ('202301104choosecourse0103', '202301104', 'course0103', '2023-12-09 01:26:32', 1, '焦慧静', '体育', '计算机科学与技术', '大一上', '1');
INSERT INTO `t_choose_course` VALUES ('202301104choosecourse0105', '202301104', 'course0105', '2023-12-09 01:26:32', 1, '焦慧静', '高等数学', '计算机科学与技术', '大一上', '1');
INSERT INTO `t_choose_course` VALUES ('202301104choosecourse0106', '202301104', 'course0106', '2023-12-09 01:26:32', 1, '焦慧静', '数据结构', '计算机科学与技术', '大一下', '1');
INSERT INTO `t_choose_course` VALUES ('202301104choosecourse0107', '202301104', 'course0107', '2023-12-09 01:26:32', 1, '焦慧静', 'Web 开发', '计算机科学与技术', '大一下', '1');
INSERT INTO `t_choose_course` VALUES ('202302101choosecourse0202', '202302101', 'course0202', '2023-12-09 01:28:00', 1, 'test', 'testMust', 'test', '大一上', '1');

-- ----------------------------
-- Table structure for t_class
-- ----------------------------
DROP TABLE IF EXISTS `t_class`;
CREATE TABLE `t_class`  (
  `class_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '班级 id',
  `major_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '专业 id',
  `class_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '班级名称',
  `major_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '专业名称',
  `stu_total` int NULL DEFAULT 0 COMMENT '学生数量',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `class_year` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '年级',
  `tea_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '老师名称',
  `deleted` int NULL DEFAULT 0 COMMENT '是否被删除',
  PRIMARY KEY (`class_id`) USING BTREE,
  INDEX `FK_Reference_7`(`major_id` ASC) USING BTREE,
  CONSTRAINT `FK_Reference_7` FOREIGN KEY (`major_id`) REFERENCES `t_major` (`major_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '班级表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of t_class
-- ----------------------------
INSERT INTO `t_class` VALUES ('2023011', '01', '2023级计算机科学与技术1班', '计算机科学与技术', 4, '2023-12-09 01:23:15', '2023', '耿老师', 0);
INSERT INTO `t_class` VALUES ('2023021', '02', '2023级test1班', 'test', 1, '2023-12-09 01:27:08', '2023', 'test', 0);

-- ----------------------------
-- Table structure for t_course
-- ----------------------------
DROP TABLE IF EXISTS `t_course`;
CREATE TABLE `t_course`  (
  `course_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '课程 id',
  `major_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '专业 id',
  `course_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '课程名称',
  `if_degree` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0' COMMENT '是否选修',
  `major_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '专业名称',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `course_period` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '课程时间',
  `stu_choose_num` int NULL DEFAULT 0 COMMENT '选择该课程的学生数量',
  PRIMARY KEY (`course_id`) USING BTREE,
  INDEX `FK_Reference_11`(`major_id` ASC) USING BTREE,
  CONSTRAINT `FK_Reference_11` FOREIGN KEY (`major_id`) REFERENCES `t_major` (`major_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '课程表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of t_course
-- ----------------------------
INSERT INTO `t_course` VALUES ('course0101', '01', '大学英语', '1', '计算机科学与技术', '2023-12-09 01:24:06', '大一上', 4);
INSERT INTO `t_course` VALUES ('course0102', '01', '音乐鉴赏', '0', '计算机科学与技术', '2023-12-09 01:24:19', '大一上', 0);
INSERT INTO `t_course` VALUES ('course0103', '01', '体育', '1', '计算机科学与技术', '2023-12-09 01:24:28', '大一上', 4);
INSERT INTO `t_course` VALUES ('course0104', '01', 'C 语言程序设计', '0', '计算机科学与技术', '2023-12-09 01:24:42', '大一上', 0);
INSERT INTO `t_course` VALUES ('course0105', '01', '高等数学', '1', '计算机科学与技术', '2023-12-09 01:24:50', '大一上', 4);
INSERT INTO `t_course` VALUES ('course0106', '01', '数据结构', '1', '计算机科学与技术', '2023-12-09 01:24:59', '大一下', 4);
INSERT INTO `t_course` VALUES ('course0107', '01', 'Web 开发', '1', '计算机科学与技术', '2023-12-09 01:25:12', '大一下', 4);
INSERT INTO `t_course` VALUES ('course0201', '02', 'test', '0', 'test', '2023-12-09 01:27:46', '大一上', 0);
INSERT INTO `t_course` VALUES ('course0202', '02', 'testMust', '1', 'test', '2023-12-09 01:27:56', '大一上', 1);

-- ----------------------------
-- Table structure for t_major
-- ----------------------------
DROP TABLE IF EXISTS `t_major`;
CREATE TABLE `t_major`  (
  `major_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '专业 id',
  `major_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '专业名称',
  `class_total` int NULL DEFAULT 0 COMMENT '班级数量',
  `course_total` int NULL DEFAULT 0 COMMENT '课程数量',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `stu_total` int NULL DEFAULT 0 COMMENT '学生数量',
  `tea_total` int NULL DEFAULT 0 COMMENT '老师数量',
  PRIMARY KEY (`major_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '专业表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of t_major
-- ----------------------------
INSERT INTO `t_major` VALUES ('01', '计算机科学与技术', 1, 7, '2023-12-09 01:22:53', 4, 1);
INSERT INTO `t_major` VALUES ('02', 'test', 1, 2, '2023-12-09 01:27:00', 1, 1);

-- ----------------------------
-- Table structure for t_score
-- ----------------------------
DROP TABLE IF EXISTS `t_score`;
CREATE TABLE `t_score`  (
  `score_id` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '成绩 id',
  `choose_course_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '选课 id',
  `stu_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '学生 id',
  `score` int NOT NULL COMMENT '成绩',
  `course_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '课程名称',
  `stu_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '学生名称',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`score_id`) USING BTREE,
  INDEX `FK_Reference_1`(`stu_id` ASC) USING BTREE,
  INDEX `f14`(`choose_course_id` ASC) USING BTREE,
  CONSTRAINT `f14` FOREIGN KEY (`choose_course_id`) REFERENCES `t_choose_course` (`choose_course_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_1` FOREIGN KEY (`stu_id`) REFERENCES `t_student` (`stu_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '成绩表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of t_score
-- ----------------------------
INSERT INTO `t_score` VALUES ('202301101-202301101choosecourse0101', '202301101choosecourse0101', '202301101', 97, '大学英语', '曹宝琪', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301101-202301101choosecourse0103', '202301101choosecourse0103', '202301101', 27, '体育', '曹宝琪', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301101-202301101choosecourse0105', '202301101choosecourse0105', '202301101', 59, '高等数学', '曹宝琪', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301101-202301101choosecourse0106', '202301101choosecourse0106', '202301101', 46, '数据结构', '曹宝琪', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301101-202301101choosecourse0107', '202301101choosecourse0107', '202301101', 13, 'Web 开发', '曹宝琪', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301102-202301102choosecourse0101', '202301102choosecourse0101', '202301102', 16, '大学英语', '曹蓓', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301102-202301102choosecourse0103', '202301102choosecourse0103', '202301102', 27, '体育', '曹蓓', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301102-202301102choosecourse0105', '202301102choosecourse0105', '202301102', 68, '高等数学', '曹蓓', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301102-202301102choosecourse0106', '202301102choosecourse0106', '202301102', 19, '数据结构', '曹蓓', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301102-202301102choosecourse0107', '202301102choosecourse0107', '202301102', 28, 'Web 开发', '曹蓓', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301103-202301103choosecourse0101', '202301103choosecourse0101', '202301103', 57, '大学英语', '程柄惠', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301103-202301103choosecourse0103', '202301103choosecourse0103', '202301103', 45, '体育', '程柄惠', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301103-202301103choosecourse0105', '202301103choosecourse0105', '202301103', 32, '高等数学', '程柄惠', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301103-202301103choosecourse0106', '202301103choosecourse0106', '202301103', 72, '数据结构', '程柄惠', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301103-202301103choosecourse0107', '202301103choosecourse0107', '202301103', 6, 'Web 开发', '程柄惠', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301104-202301104choosecourse0101', '202301104choosecourse0101', '202301104', 11, '大学英语', '焦慧静', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301104-202301104choosecourse0103', '202301104choosecourse0103', '202301104', 16, '体育', '焦慧静', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301104-202301104choosecourse0105', '202301104choosecourse0105', '202301104', 70, '高等数学', '焦慧静', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301104-202301104choosecourse0106', '202301104choosecourse0106', '202301104', 60, '数据结构', '焦慧静', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202301104-202301104choosecourse0107', '202301104choosecourse0107', '202301104', 64, 'Web 开发', '焦慧静', '2023-12-09 01:28:02');
INSERT INTO `t_score` VALUES ('202302101-202302101choosecourse0202', '202302101choosecourse0202', '202302101', 49, 'testMust', 'test', '2023-12-09 01:28:02');

-- ----------------------------
-- Table structure for t_stu_message
-- ----------------------------
DROP TABLE IF EXISTS `t_stu_message`;
CREATE TABLE `t_stu_message`  (
  `msg_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '消息 id',
  `stu_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '学生 id',
  `tea_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '教师 id',
  `msg_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '消息内容',
  `msg_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '消息时间',
  `msg_state` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '未读' COMMENT '消息状态(已读|未读)',
  PRIMARY KEY (`msg_id`) USING BTREE,
  INDEX `FK_Reference_5`(`tea_id` ASC) USING BTREE,
  INDEX `FK_Reference_6`(`stu_id` ASC) USING BTREE,
  CONSTRAINT `FK_Reference_5` FOREIGN KEY (`tea_id`) REFERENCES `t_teacher` (`tea_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_6` FOREIGN KEY (`stu_id`) REFERENCES `t_student` (`stu_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '学生消息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of t_stu_message
-- ----------------------------

-- ----------------------------
-- Table structure for t_student
-- ----------------------------
DROP TABLE IF EXISTS `t_student`;
CREATE TABLE `t_student`  (
  `stu_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '学生 id',
  `tea_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '教师 id',
  `class_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '班级 id',
  `major_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '专业 id',
  `stu_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '学生姓名',
  `admission_year` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '年级',
  `class_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '班级名称',
  `stu_ID_card` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '学生 IDCard',
  `stu_pwd` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '学生密码',
  `class_no` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '班级编号',
  `major_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '专业名称',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `tea_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '老师名称(班主任)',
  `message_num` int NULL DEFAULT 0 COMMENT '信息数量',
  `deleted` int NULL DEFAULT 0 COMMENT '是否被删除',
  PRIMARY KEY (`stu_id`) USING BTREE,
  INDEX `FK_Reference_10`(`major_id` ASC) USING BTREE,
  INDEX `FK_Reference_8`(`class_id` ASC) USING BTREE,
  CONSTRAINT `FK_Reference_10` FOREIGN KEY (`major_id`) REFERENCES `t_major` (`major_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_8` FOREIGN KEY (`class_id`) REFERENCES `t_class` (`class_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '学生表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of t_student
-- ----------------------------
INSERT INTO `t_student` VALUES ('202301101', 'tea2023011', '2023011', '01', '曹宝琪', '2023', '2023 级计算机科学与技术1 班', '14118220020506009X', '$2a$10$f13b3IcfzqhBhez6ms9PQO0yMYgjNtM1ZZ3ohGj69PVP94wFUnWLG', '1', '计算机科学与技术', '2023-12-09 01:25:32', '耿老师', 0, 0);
INSERT INTO `t_student` VALUES ('202301102', 'tea2023011', '2023011', '01', '曹蓓', '2023', '2023 级计算机科学与技术1 班', '141182200205060092', '$2a$10$UT/NpkMjJCrjCXTCmZ0HV.KzXJmiB.8k7fnYWdXofPNuMPLu2FDT6', '1', '计算机科学与技术', '2023-12-09 01:25:48', '耿老师', 0, 0);
INSERT INTO `t_student` VALUES ('202301103', 'tea2023011', '2023011', '01', '程柄惠', '2023', '2023 级计算机科学与技术1 班', '141182200205060093', '$2a$10$oTt9CxiQ42IRhkIZxCuyMuZKn.Zp9Xc5qTwY9HihrKyL16cUMCnVm', '1', '计算机科学与技术', '2023-12-09 01:26:02', '耿老师', 0, 0);
INSERT INTO `t_student` VALUES ('202301104', 'tea2023011', '2023011', '01', '焦慧静', '2023', '2023 级计算机科学与技术1 班', '141182200205060094', '$2a$10$Ke2G4UxAkn3VvDGtpIlJ3eKvk.KF/.OEDFYXKc5jV6VIJOh9O1Bgy', '1', '计算机科学与技术', '2023-12-09 01:26:16', '耿老师', 0, 0);
INSERT INTO `t_student` VALUES ('202302101', 'tea2023021', '2023021', '02', 'test', '2023', '2023 级test1 班', '141182200205060096', '$2a$10$omvTXfEjqvzr8gN.4oEW7eyxiImpIsjQg4/KF86LWFhX.nr2S1vNe', '1', 'test', '2023-12-09 01:27:36', 'test', 0, 0);

-- ----------------------------
-- Table structure for t_tea_message
-- ----------------------------
DROP TABLE IF EXISTS `t_tea_message`;
CREATE TABLE `t_tea_message`  (
  `msg_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '消息 id',
  `tea_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '教师 id',
  `stu_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '学生 id',
  `msg_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '消息内容',
  `msg_time` datetime NULL DEFAULT NULL COMMENT '消息时间',
  INDEX `f15`(`stu_id` ASC) USING BTREE,
  INDEX `f16`(`tea_id` ASC) USING BTREE,
  CONSTRAINT `f15` FOREIGN KEY (`stu_id`) REFERENCES `t_student` (`stu_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `f16` FOREIGN KEY (`tea_id`) REFERENCES `t_teacher` (`tea_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '老师消息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of t_tea_message
-- ----------------------------

-- ----------------------------
-- Table structure for t_teacher
-- ----------------------------
DROP TABLE IF EXISTS `t_teacher`;
CREATE TABLE `t_teacher`  (
  `tea_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '教师 id',
  `major_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '专业 id',
  `tea_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '教师名称',
  `class_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '班级名称',
  `tea_pwd` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '教师密码',
  `tea_ID_card` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '教师 IDCard',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `class_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '班级 id',
  `major_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '专业名称',
  `class_no` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '班级编号',
  `class_year` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '年级',
  PRIMARY KEY (`tea_id`) USING BTREE,
  INDEX `FK_Reference_3`(`class_id` ASC) USING BTREE,
  INDEX `FK_Reference_4`(`major_id` ASC) USING BTREE,
  CONSTRAINT `FK_Reference_3` FOREIGN KEY (`class_id`) REFERENCES `t_class` (`class_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_4` FOREIGN KEY (`major_id`) REFERENCES `t_major` (`major_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of t_teacher
-- ----------------------------
INSERT INTO `t_teacher` VALUES ('tea2023011', '01', '耿老师', '2023级计算机科学与技术1班', '$2a$10$vRt3E4f2mFWtBJL9kHBG4OzuCle6g9KLVKwBC6DRHaV4srcKxlETe', '141182200205060091', '2023-12-09 01:23:42', '2023011', '计算机科学与技术', '1', '2023');
INSERT INTO `t_teacher` VALUES ('tea2023021', '02', 'test', '2023级test1班', '$2a$10$auCA49mFzLJfaZswYklJyujnYKdD3R7cGZvhtqn1vp7nddUhShCGW', '141182200205060095', '2023-12-09 01:27:25', '2023021', 'test', '1', '2023');

SET FOREIGN_KEY_CHECKS = 1;
