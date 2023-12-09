-- ----------------------------
-- Table structure for t_teacher
-- ----------------------------
DROP TABLE IF EXISTS `mysql-homework`.t_teacher;
CREATE TABLE `mysql-homework`.t_teacher  (
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
INSERT INTO `mysql-homework`.t_teacher VALUES ('tea2023011', '01', '耿老师', '2023级计算机科学与技术1班', '$2a$10$vRt3E4f2mFWtBJL9kHBG4OzuCle6g9KLVKwBC6DRHaV4srcKxlETe', '141182200205060091', '2023-12-09 01:23:42', '2023011', '计算机科学与技术', '1', '2023');
INSERT INTO `mysql-homework`.t_teacher VALUES ('tea2023021', '02', 'test', '2023级test1班', '$2a$10$auCA49mFzLJfaZswYklJyujnYKdD3R7cGZvhtqn1vp7nddUhShCGW', '141182200205060095', '2023-12-09 01:27:25', '2023021', 'test', '1', '2023');