-- ----------------------------
-- Table structure for t_major
-- ----------------------------
DROP TABLE IF EXISTS `mysql-homework`.t_major;
CREATE TABLE `mysql-homework`.t_major  (
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
INSERT INTO `mysql-homework`.t_major VALUES ('01', '计算机科学与技术', 1, 7, '2023-12-09 01:22:53', 4, 1);
INSERT INTO `mysql-homework`.t_major VALUES ('02', 'test', 1, 2, '2023-12-09 01:27:00', 1, 1);