-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.9-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- scary 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `scary` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `scary`;

-- 테이블 scary.test_list 구조 내보내기
CREATE TABLE IF NOT EXISTS `test_list` (
  `id` int(2) DEFAULT NULL,
  `subject` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 scary.test_page 구조 내보내기
CREATE TABLE IF NOT EXISTS `test_page` (
  `id` int(2) DEFAULT NULL,
  `list_id` int(2) DEFAULT NULL,
  `test_uri` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 scary.test_page_text 구조 내보내기
CREATE TABLE IF NOT EXISTS `test_page_text` (
  `id` int(2) DEFAULT NULL,
  `page_id` int(2) DEFAULT NULL,
  `answer1` varchar(20) DEFAULT NULL,
  `answer2` varchar(20) DEFAULT NULL,
  `answer3` varchar(20) DEFAULT NULL,
  `answer4` varchar(20) DEFAULT NULL,
  `info` text DEFAULT NULL,
  `kakaotalk` text DEFAULT NULL,
  `point1` varchar(11) DEFAULT NULL,
  `point2` varchar(11) DEFAULT NULL,
  `point3` varchar(11) DEFAULT NULL,
  `point4` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 scary.test_result 구조 내보내기
CREATE TABLE IF NOT EXISTS `test_result` (
  `id` int(2) DEFAULT NULL,
  `list_id` int(2) DEFAULT NULL,
  `result_step` int(1) DEFAULT NULL,
  `result_subject` varchar(20) DEFAULT NULL,
  `result_sub` text DEFAULT NULL,
  `stat1` varchar(6) DEFAULT NULL,
  `stat2` varchar(6) DEFAULT NULL,
  `stat3` varchar(6) DEFAULT NULL,
  `stat4` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
