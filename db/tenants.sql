-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2018 at 09:01 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `k24`
--

-- --------------------------------------------------------

--
-- Table structure for table `tenants`
--

CREATE TABLE `tenants` (
  `tenant_id` int(11) NOT NULL,
  `fname` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `lname` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tenants`
--

INSERT INTO `tenants` (`tenant_id`, `fname`, `lname`, `username`) VALUES
(1, 'sudhir', 'kumar', 'sk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tenants`
--
ALTER TABLE `tenants`
  ADD PRIMARY KEY (`tenant_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tenants`
--
ALTER TABLE `tenants`
  MODIFY `tenant_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
