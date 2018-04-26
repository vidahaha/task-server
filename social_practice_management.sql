/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : social_practice_management

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-04-26 14:12:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `studentId` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('2', '黄开', '2015317200501', '123456');
INSERT INTO `student` VALUES ('3', '测试员', '2015317200500', '123456');

-- ----------------------------
-- Table structure for task
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `team_name` varchar(255) NOT NULL,
  `task_full_name` varchar(255) NOT NULL,
  `task_time` varchar(255) NOT NULL,
  `task_place` varchar(255) NOT NULL,
  `task_state` int(11) NOT NULL,
  `reward` varchar(255) DEFAULT NULL,
  `reward_content` longtext,
  `reward_state` int(11) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `money_state` int(11) DEFAULT NULL,
  `task_num` int(11) DEFAULT NULL,
  `task_member_name` varchar(255) DEFAULT NULL,
  `task_lead_name` varchar(255) DEFAULT NULL,
  `task_lead_sex` varchar(255) DEFAULT NULL,
  `task_lead_party` varchar(255) DEFAULT NULL,
  `task_lead_college` varchar(255) DEFAULT NULL,
  `task_lead_major` varchar(255) DEFAULT NULL,
  `task_lead_grade` int(11) DEFAULT NULL,
  `task_lead_phone` varchar(255) DEFAULT NULL,
  `task_lead_email` varchar(255) DEFAULT NULL,
  `task_lead_qq` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of task
-- ----------------------------
INSERT INTO `task` VALUES ('2', '校级', '华中农业大学经济管理学院赴湖北省大悟县“喜迎十九大”暑期社会实践团', '迎十九大，聚焦革命老区“两学一做”和“产业扶贫”', '2017年7月下旬', '湖北省孝感市大悟县', '0', null, null, null, null, null, '5', null, null, null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for task_member
-- ----------------------------
DROP TABLE IF EXISTS `task_member`;
CREATE TABLE `task_member` (
  `id` int(11) DEFAULT NULL,
  `task_member_name` varchar(255) DEFAULT NULL,
  `task_member_college` varchar(255) DEFAULT NULL,
  `task_member_major` varchar(255) DEFAULT NULL,
  `task_member_grade` int(255) DEFAULT NULL,
  `task_member_phone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of task_member
-- ----------------------------
INSERT INTO `task_member` VALUES ('0', '黄开', '信息学院', '计算机', '3', '15272825761');
INSERT INTO `task_member` VALUES ('0', '测试', '理学院', '信息科学', '2', '15274567899');
INSERT INTO `task_member` VALUES ('0', '测试2', '理学院', '信息科学', '2', '15274567899');
INSERT INTO `task_member` VALUES ('0', '测试3', '理学院', '信息科学', '2', '15274567899');

-- ----------------------------
-- Table structure for task_teacher
-- ----------------------------
DROP TABLE IF EXISTS `task_teacher`;
CREATE TABLE `task_teacher` (
  `id` int(11) DEFAULT NULL,
  `task_teacher_name` varchar(255) DEFAULT NULL,
  `task_teacher_college` varchar(255) DEFAULT NULL,
  `task_teacher_title` varchar(255) DEFAULT NULL,
  `task_teacher_phone` varchar(255) DEFAULT NULL,
  `task_teacher_follow` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of task_teacher
-- ----------------------------
INSERT INTO `task_teacher` VALUES ('0', '谢娜', '信息学院', '教授', '15926857788', '0');
INSERT INTO `task_teacher` VALUES ('0', '谢固安', '信息学院', '讲师', '15926857788', '1');

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `teacherId` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('1', '辉煌', '2015317200100', '123456');
INSERT INTO `teacher` VALUES ('2', '测试员', '111111', '111111');
