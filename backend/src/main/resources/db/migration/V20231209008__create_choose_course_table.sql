-- ----------------------------
-- Table structure for t_choose_course
-- ----------------------------
DROP TABLE IF EXISTS `mysql-homework`.t_choose_course;
CREATE TABLE `mysql-homework`.t_choose_course
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
    PRIMARY KEY (`choose_course_id`) USING BTREE,
    INDEX `f12` (`stu_id` ASC) USING BTREE,
    INDEX `f13` (`course_id` ASC) USING BTREE,
    CONSTRAINT `f12` FOREIGN KEY (`stu_id`) REFERENCES `t_student` (`stu_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT `f13` FOREIGN KEY (`course_id`) REFERENCES `t_course` (`course_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci COMMENT = '选课表'
  ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of t_choose_course
-- ----------------------------
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301101choosecourse0101', '202301101', 'course0101', '2023-12-09 01:26:31', 1, '曹宝琪', '大学英语',
        '计算机科学与技术', '大一上', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301101choosecourse0103', '202301101', 'course0103', '2023-12-09 01:26:31', 1, '曹宝琪', '体育',
        '计算机科学与技术', '大一上', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301101choosecourse0105', '202301101', 'course0105', '2023-12-09 01:26:31', 1, '曹宝琪', '高等数学',
        '计算机科学与技术', '大一上', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301101choosecourse0106', '202301101', 'course0106', '2023-12-09 01:26:31', 1, '曹宝琪', '数据结构',
        '计算机科学与技术', '大一下', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301101choosecourse0107', '202301101', 'course0107', '2023-12-09 01:26:31', 1, '曹宝琪', 'Web 开发',
        '计算机科学与技术', '大一下', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301102choosecourse0101', '202301102', 'course0101', '2023-12-09 01:26:31', 1, '曹蓓', '大学英语',
        '计算机科学与技术', '大一上', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301102choosecourse0103', '202301102', 'course0103', '2023-12-09 01:26:31', 1, '曹蓓', '体育',
        '计算机科学与技术', '大一上', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301102choosecourse0105', '202301102', 'course0105', '2023-12-09 01:26:31', 1, '曹蓓', '高等数学',
        '计算机科学与技术', '大一上', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301102choosecourse0106', '202301102', 'course0106', '2023-12-09 01:26:31', 1, '曹蓓', '数据结构',
        '计算机科学与技术', '大一下', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301102choosecourse0107', '202301102', 'course0107', '2023-12-09 01:26:31', 1, '曹蓓', 'Web 开发',
        '计算机科学与技术', '大一下', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301103choosecourse0101', '202301103', 'course0101', '2023-12-09 01:26:31', 1, '程柄惠', '大学英语',
        '计算机科学与技术', '大一上', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301103choosecourse0103', '202301103', 'course0103', '2023-12-09 01:26:31', 1, '程柄惠', '体育',
        '计算机科学与技术', '大一上', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301103choosecourse0105', '202301103', 'course0105', '2023-12-09 01:26:32', 1, '程柄惠', '高等数学',
        '计算机科学与技术', '大一上', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301103choosecourse0106', '202301103', 'course0106', '2023-12-09 01:26:32', 1, '程柄惠', '数据结构',
        '计算机科学与技术', '大一下', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301103choosecourse0107', '202301103', 'course0107', '2023-12-09 01:26:32', 1, '程柄惠', 'Web 开发',
        '计算机科学与技术', '大一下', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301104choosecourse0101', '202301104', 'course0101', '2023-12-09 01:26:32', 1, '焦慧静', '大学英语',
        '计算机科学与技术', '大一上', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301104choosecourse0103', '202301104', 'course0103', '2023-12-09 01:26:32', 1, '焦慧静', '体育',
        '计算机科学与技术', '大一上', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301104choosecourse0105', '202301104', 'course0105', '2023-12-09 01:26:32', 1, '焦慧静', '高等数学',
        '计算机科学与技术', '大一上', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301104choosecourse0106', '202301104', 'course0106', '2023-12-09 01:26:32', 1, '焦慧静', '数据结构',
        '计算机科学与技术', '大一下', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202301104choosecourse0107', '202301104', 'course0107', '2023-12-09 01:26:32', 1, '焦慧静', 'Web 开发',
        '计算机科学与技术', '大一下', '1');
INSERT INTO `mysql-homework`.t_choose_course
VALUES ('202302101choosecourse0202', '202302101', 'course0202', '2023-12-09 01:28:00', 1, 'test', 'testMust', 'test',
        '大一上', '1');