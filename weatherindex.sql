-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2022 at 05:15 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weatherindex`
--

-- --------------------------------------------------------

--
-- Table structure for table `weather`
--

CREATE TABLE `weather` (
  `Weather_condition` varchar(100) NOT NULL,
  `Weather_description` varchar(100) NOT NULL,
  `Weather_temperature` float NOT NULL,
  `Weather_wind` float NOT NULL,
  `weather_time` datetime NOT NULL,
  `City` varchar(100) NOT NULL,
  `Humidity` float NOT NULL,
  `Direction_of_wind` float NOT NULL,
  `Pressure` float NOT NULL,
  `Icon` varchar(11) NOT NULL,
  `dt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `weather`
--

INSERT INTO `weather` (`Weather_condition`, `Weather_description`, `Weather_temperature`, `Weather_wind`, `weather_time`, `City`, `Humidity`, `Direction_of_wind`, `Pressure`, `Icon`, `dt`) VALUES
('Clear', 'clear sky', 31.52, 2.06, '2022-08-11 20:47:26', 'Gloucestershire', 26, 360, 1020, '01d', 1660229911);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
