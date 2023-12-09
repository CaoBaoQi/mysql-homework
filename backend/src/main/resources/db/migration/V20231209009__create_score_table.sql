-- ----------------------------
-- Table structure for t_score
-- ----------------------------
DROP TABLE IF EXISTS `mysql-homework`.t_score;
CREATE TABLE `mysql-homework`.t_score
(
    `score_id`         varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '成绩 id',
    `choose_course_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '选课 id',
    `stu_id`           varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '学生 id',
    `score`            int                                                          NOT NULL COMMENT '成绩',
    `course_name`      varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '课程名称',
    `stu_name`         varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '学生名称',
    `create_time`      datetime                                                     NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    PRIMARY KEY (`score_id`) USING BTREE,
    INDEX `FK_Reference_1` (`stu_id` ASC) USING BTREE,
    INDEX `f14` (`choose_course_id` ASC) USING BTREE,
    CONSTRAINT `f14` FOREIGN KEY (`choose_course_id`) REFERENCES `t_choose_course` (`choose_course_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT `FK_Reference_1` FOREIGN KEY (`stu_id`) REFERENCES `t_student` (`stu_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci COMMENT = '成绩表'
  ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of t_score
-- ----------------------------
INSERT INTO `mysql-homework`.t_score
VALUES ('202301101-202301101choosecourse0101', '202301101choosecourse0101', '202301101', 97, '大学英语', '曹宝琪',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301101-202301101choosecourse0103', '202301101choosecourse0103', '202301101', 27, '体育', '曹宝琪',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301101-202301101choosecourse0105', '202301101choosecourse0105', '202301101', 59, '高等数学', '曹宝琪',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301101-202301101choosecourse0106', '202301101choosecourse0106', '202301101', 46, '数据结构', '曹宝琪',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301101-202301101choosecourse0107', '202301101choosecourse0107', '202301101', 13, 'Web 开发', '曹宝琪',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301102-202301102choosecourse0101', '202301102choosecourse0101', '202301102', 16, '大学英语', '曹蓓',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301102-202301102choosecourse0103', '202301102choosecourse0103', '202301102', 27, '体育', '曹蓓',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301102-202301102choosecourse0105', '202301102choosecourse0105', '202301102', 68, '高等数学', '曹蓓',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301102-202301102choosecourse0106', '202301102choosecourse0106', '202301102', 19, '数据结构', '曹蓓',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301102-202301102choosecourse0107', '202301102choosecourse0107', '202301102', 28, 'Web 开发', '曹蓓',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301103-202301103choosecourse0101', '202301103choosecourse0101', '202301103', 57, '大学英语', '程柄惠',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301103-202301103choosecourse0103', '202301103choosecourse0103', '202301103', 45, '体育', '程柄惠',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301103-202301103choosecourse0105', '202301103choosecourse0105', '202301103', 32, '高等数学', '程柄惠',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301103-202301103choosecourse0106', '202301103choosecourse0106', '202301103', 72, '数据结构', '程柄惠',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301103-202301103choosecourse0107', '202301103choosecourse0107', '202301103', 6, 'Web 开发', '程柄惠',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301104-202301104choosecourse0101', '202301104choosecourse0101', '202301104', 11, '大学英语', '焦慧静',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301104-202301104choosecourse0103', '202301104choosecourse0103', '202301104', 16, '体育', '焦慧静',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301104-202301104choosecourse0105', '202301104choosecourse0105', '202301104', 70, '高等数学', '焦慧静',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301104-202301104choosecourse0106', '202301104choosecourse0106', '202301104', 60, '数据结构', '焦慧静',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202301104-202301104choosecourse0107', '202301104choosecourse0107', '202301104', 64, 'Web 开发', '焦慧静',
        '2023-12-09 01:28:02');
INSERT INTO `mysql-homework`.t_score
VALUES ('202302101-202302101choosecourse0202', '202302101choosecourse0202', '202302101', 49, 'testMust', 'test',
        '2023-12-09 01:28:02');
