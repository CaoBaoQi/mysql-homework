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

 Date: 07/12/2023 21:53:36
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
INSERT INTO `t_admin` VALUES ('gly202301', '曹宝琪', '$2a$10$3Y.m.iK1uDYJNIKoCJLTj..hxFuereOsnnDAbtjaYbelbyykKSM2.', '2023-12-07 10:30:27', 0);

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
INSERT INTO `t_choose_course` VALUES ('202301101choosecourse0101', '202301101', 'course0101', '2023-12-07 10:33:49', 1, '曹宝琪', '数据结构', '计算机科学与技术', '大一上', '1');
INSERT INTO `t_choose_course` VALUES ('202301101choosecourse0102', '202301101', 'course0102', '2023-12-07 10:33:52', 1, '曹宝琪', '形势与政策', '计算机科学与技术', '大一上', '0');

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
  PRIMARY KEY (`class_id`) USING BTREE,
  INDEX `FK_Reference_7`(`major_id` ASC) USING BTREE,
  CONSTRAINT `FK_Reference_7` FOREIGN KEY (`major_id`) REFERENCES `t_major` (`major_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '班级表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of t_class
-- ----------------------------
INSERT INTO `t_class` VALUES ('2023011', '01', '2023级计算机科学与技术1班', '计算机科学与技术', 4, '2023-12-07 10:31:20', '2023', '郝老师');
INSERT INTO `t_class` VALUES ('2023021', '02', '2023级物联网1班', '物联网', 1, '2023-12-07 20:48:27', '2023', '宋老师');

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
INSERT INTO `t_course` VALUES ('course0101', '01', '数据结构', '1', '计算机科学与技术', '2023-12-07 10:31:57', '大一上', 1);
INSERT INTO `t_course` VALUES ('course0102', '01', '形势与政策', '0', '计算机科学与技术', '2023-12-07 10:32:12', '大一上', 1);
INSERT INTO `t_course` VALUES ('course0201', '02', '大学英语', '0', '物联网', '2023-12-07 20:48:07', '大一上', 0);

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
INSERT INTO `t_major` VALUES ('01', '计算机科学与技术', 1, 2, '2023-12-07 10:31:03', 4, 1);
INSERT INTO `t_major` VALUES ('02', '物联网', 1, 1, '2023-12-07 20:47:44', 1, 1);

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
INSERT INTO `t_score` VALUES ('202301101-202301101choosecourse0101', '202301101choosecourse0101', '202301101', 25, '数据结构', '曹宝琪', '2023-12-07 10:34:24');
INSERT INTO `t_score` VALUES ('202301101-202301101choosecourse0102', '202301101choosecourse0102', '202301101', 18, '形势与政策', '曹宝琪', '2023-12-07 10:34:24');

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
INSERT INTO `t_stu_message` VALUES ('tea2023011msg20230110185ca4b90-2b35-43f9-ba89-ccfd0e566192', '202301101', 'tea2023011', '你干嘛 哎呦', '2023-12-07 10:35:07', '已读');

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
INSERT INTO `t_student` VALUES ('202301101', 'tea2023011', '2023011', '01', '曹宝琪', '2023', '2023级计算机科学与技术1班', '14118220020506009X', '$2a$10$kCZHgh3VC6P8OLFjp.3cGODJi9Ep5CxHqFG2snvyKb3RSCcToS1HW', '1', '计算机科学与技术', '2023-12-07 10:32:33', '焦慧静', 1, 0);
INSERT INTO `t_student` VALUES ('202301102', 'tea2023011', '2023011', '01', '曹蓓', '2023', '2023级计算机科学与技术1班', '141182200205060091', '$2a$10$c0/Oek.Mj8Y9onhJYgJB8emmg8HK/6cs4srsEzLNBulay25HtP5wq', '1', '计算机科学与技术', '2023-12-07 20:43:21', '焦慧静', 0, 0);
INSERT INTO `t_student` VALUES ('202301103', 'tea2023011', '2023011', '01', '程柄惠', '2023', '2023级计算机科学与技术1班', '141182200205060092', '$2a$10$ucUcaUJE7KfMKCbZHYjsmuVEhgeL09dl7B8NbV1KPTxjvwAdC/bEW', '1', '计算机科学与技术', '2023-12-07 20:43:41', '焦慧静', 0, 0);
INSERT INTO `t_student` VALUES ('202301104', 'tea2023011', '2023011', '01', '焦慧静', '2023', '2023级计算机科学与技术1班', '141182200205060093', '$2a$10$3J5qPkxW.VNAe8vHhGVXhesz0jKMRk.c/UzShCxXYhLYkMuOYrBuK', '1', '计算机科学与技术', '2023-12-07 20:44:12', '焦慧静', 0, 0);
INSERT INTO `t_student` VALUES ('202302101', 'tea2023021', '2023021', '02', '郝同学', '2023', '2023级物联网1班', '141182200205060096', '$2a$10$pZv31vzlyoqactL6swLQvOWLtjkpWnBGpPE7zaM6tQw4KsIvI29CO', '1', '物联网', '2023-12-07 20:49:40', '宋老师', 0, 0);

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
INSERT INTO `t_tea_message` VALUES ('tea2023011msg2023011013ea0bbf1-2a17-4522-a2d5-9932a9d97b4e', 'tea2023011', '202301101', '你干嘛 哎呦', '2023-12-07 10:35:07');

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
INSERT INTO `t_teacher` VALUES ('tea2023011', '01', '耿老师', '2023级计算机科学与技术1班', '$2a$10$iUmncwkMxcZYTKAwAjIFTOFPD8GR8/0F6pgbtlZcO/YV4jtxxsAju', '14118220020506000X', '2023-12-07 10:31:41', '2023011', '计算机科学与技术', '1', '2023');
INSERT INTO `t_teacher` VALUES ('tea2023021', '02', '宋老师', '2023级物联网1班', '$2a$10$ac0XUPCcAz9J7CjKcEIz8.YTzjzhjeeZBNd5xyN9pGSrozHpi/7WC', '141182200205060095', '2023-12-07 20:49:19', '2023021', '物联网', '1', '2023');

SET FOREIGN_KEY_CHECKS = 1;
