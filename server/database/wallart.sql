-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2021 at 05:47 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wallart`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'nature'),
(2, 'hacking'),
(3, 'coding'),
(4, 'animal'),
(5, 'car'),
(6, 'game'),
(7, 'scifi');

-- --------------------------------------------------------

--
-- Table structure for table `wallpaper_data`
--

CREATE TABLE `wallpaper_data` (
  `id` int(11) NOT NULL,
  `path` varchar(250) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wallpaper_data`
--

INSERT INTO `wallpaper_data` (`id`, `path`, `category_id`) VALUES
(1, 'images/12341234-12341234-12341234-12341234.jpg', 7),
(2, 'images/47785963-47785963-47785963-47785963.jpg', 7),
(3, 'images/111111111-111111111-111111111-111111111.jpg', 7),
(4, 'images/123123123-123123123-123123123-123123123.jpg', 1),
(5, 'images/321321321-321321321-321321321-321321321.jpg', 7),
(6, 'images/353245710-353245710-353245710-353245710.jpg', 7),
(7, 'image/395224455-395224455-395224455-395224455.jpg', 1),
(8, 'images/512549293-512549293-512549293-512549293.jpg', 1),
(9, 'images/543543543-543543543-543543543-543543543.jpg', 1),
(10, 'images/564518613-564518613-564518613-564518613.jpg', 1),
(11, 'images/589834263-589834263-589834263-589834263.jpg', 4),
(12, 'images/798116315-798116315-798116315-798116315.jpg', 1),
(13, 'images/909090909-909090909-909090909-909090909.jpg', 7),
(14, '987987987-987987987-987987987-987987987.jpg', 1),
(15, 'images/1018004576-1018004576-1018004576-1018004576.jpg', 6),
(16, 'images/1175776430-1175776430-1175776430-1175776430.jpg', 1),
(17, 'images/1652528925-1652528925-1652528925-1652528925.jpg', 1),
(18, 'images/1703115345-1703115345-1703115345-1703115345.jpg', 1),
(19, 'images/1822454887-1822454887-1822454887-1822454887.jpg', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallpaper_data`
--
ALTER TABLE `wallpaper_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `wallpaper_data`
--
ALTER TABLE `wallpaper_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
