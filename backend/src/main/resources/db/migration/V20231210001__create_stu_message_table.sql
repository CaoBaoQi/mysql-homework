-- ----------------------------
-- Table structure for t_stu_message
-- ----------------------------
DROP TABLE IF EXISTS `mysql-homework`.t_stu_message;
CREATE TABLE `mysql-homework`.t_stu_message  (
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