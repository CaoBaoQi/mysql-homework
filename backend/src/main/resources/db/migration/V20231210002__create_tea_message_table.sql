-- ----------------------------
-- Table structure for t_tea_message
-- ----------------------------
DROP TABLE IF EXISTS `mysql-homework`.t_tea_message;
CREATE TABLE `mysql-homework`.t_tea_message
(
    `msg_id`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '消息 id',
    `tea_id`      varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT NULL COMMENT '教师 id',
    `stu_id`      varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci  NULL DEFAULT NULL COMMENT '学生 id',
    `msg_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '消息内容',
    `msg_time`    datetime                                                      NULL DEFAULT NULL COMMENT '消息时间',
    INDEX `f15` (`stu_id` ASC) USING BTREE,
    INDEX `f16` (`tea_id` ASC) USING BTREE,
    CONSTRAINT `f15` FOREIGN KEY (`stu_id`) REFERENCES `t_student` (`stu_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT `f16` FOREIGN KEY (`tea_id`) REFERENCES `t_teacher` (`tea_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci COMMENT = '老师消息表'
  ROW_FORMAT = DYNAMIC;