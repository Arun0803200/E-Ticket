-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2023 at 05:56 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arundhika`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking_tbl`
--

CREATE TABLE `booking_tbl` (
  `booking_id` int(11) NOT NULL,
  `cusromer_id` int(11) DEFAULT NULL,
  `theatre_id` int(11) DEFAULT NULL,
  `screen_id` int(11) DEFAULT NULL,
  `seat_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_date` date DEFAULT current_timestamp(),
  `modified_by` int(11) DEFAULT NULL,
  `modified_date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `founder`
--

CREATE TABLE `founder` (
  `founder_id` int(11) NOT NULL,
  `founder_name` varchar(225) DEFAULT NULL,
  `email` varchar(225) DEFAULT NULL,
  `mobile_no` varchar(225) DEFAULT NULL,
  `theatre_name` varchar(225) DEFAULT NULL,
  `theatre_url` varchar(225) DEFAULT NULL,
  `comission` int(11) DEFAULT NULL,
  `address_1` varchar(225) DEFAULT NULL,
  `address_2` varchar(225) DEFAULT NULL,
  `country` varchar(225) DEFAULT NULL,
  `state` varchar(225) DEFAULT NULL,
  `district` varchar(225) DEFAULT NULL,
  `pin_code` int(11) DEFAULT NULL,
  `approval_flag` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `delete_flag` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_date` date DEFAULT current_timestamp(),
  `modified_by` int(11) DEFAULT NULL,
  `modified_date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(3, 1678626333454, 'CreateUser1678626333454'),
(4, 1679013029268, 'Token1679013029268'),
(5, 1679301663198, 'CreateFounder1679301663198'),
(6, 1679367969010, 'CreateTheatreTable1679367969010'),
(7, 1679419958301, 'CreateScreenTable1679419958301'),
(8, 1679448906331, 'createSeatTable1679448906331'),
(9, 1679451149576, 'CreateBookingTable1679451149576');

-- --------------------------------------------------------

--
-- Table structure for table `screen_tbl`
--

CREATE TABLE `screen_tbl` (
  `screen_id` int(11) NOT NULL,
  `theatre_id` int(11) DEFAULT NULL,
  `no_of_columns` int(11) DEFAULT NULL,
  `no_of_rows` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `movie_name` varchar(225) DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_date` date DEFAULT current_timestamp(),
  `modified_by` int(11) DEFAULT NULL,
  `modified_date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `seat_tbl`
--

CREATE TABLE `seat_tbl` (
  `seat_id` int(11) NOT NULL,
  `screen_id` int(11) DEFAULT NULL,
  `is_booking` int(11) DEFAULT NULL,
  `movie_name` varchar(225) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_date` date DEFAULT current_timestamp(),
  `modified_by` int(11) DEFAULT NULL,
  `modified_date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `theatre_tbl`
--

CREATE TABLE `theatre_tbl` (
  `theatre_id` int(11) NOT NULL,
  `founder_id` int(11) DEFAULT NULL,
  `approval_flag` int(11) DEFAULT NULL,
  `licence_no` varchar(225) DEFAULT NULL,
  `address_1` varchar(225) DEFAULT NULL,
  `address_2` varchar(225) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `is_delete` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_date` date DEFAULT current_timestamp(),
  `modified_by` int(11) DEFAULT NULL,
  `modified_date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

CREATE TABLE `token` (
  `id` int(11) NOT NULL,
  `token` text DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_date` date DEFAULT current_timestamp(),
  `modified_by` int(11) DEFAULT NULL,
  `modified_date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `mobile_no` varchar(225) NOT NULL,
  `is_active` int(11) NOT NULL,
  `delete_flag` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `modified_by` int(11) NOT NULL,
  `created_date` varchar(255) NOT NULL,
  `modified_date` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `mobile_no`, `is_active`, `delete_flag`, `created_by`, `modified_by`, `created_date`, `modified_date`, `user_name`, `password`, `email`) VALUES
(9, '8667384086', 1, 0, 0, 0, '2023-03-15 07:33:54', '', 'muthulakshmi', '$2b$10$EgrNFwTQwKCv.vxwUTmL6eTI3ZBplQeFDknIpGGLpK/ndIH38kQVK', 'muthulakshmi@gmail.com'),
(15, '9025760409', 1, 0, 0, 0, '2023-03-17 06:58:29', '', 'muthulakshmi arun', '$2b$10$AVnfDuzjFIhQ8k37W7RGoeNLE8bzemfN1sKkbuaCHjKGZpbM1aQd6', 'muthulakshmiarun@gmail.com'),
(16, '9944808609', 1, 0, 0, 0, '2023-03-18 06:42:26', '', 'muthulakshmi arundhika', '$2b$10$63VHl/hTkArT.t1avCogBuWaCWmSvN0uvtxRciIRIcTRwgL8KemMe', 'muthulakshmiarundhika@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking_tbl`
--
ALTER TABLE `booking_tbl`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `founder`
--
ALTER TABLE `founder`
  ADD PRIMARY KEY (`founder_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `screen_tbl`
--
ALTER TABLE `screen_tbl`
  ADD PRIMARY KEY (`screen_id`,`no_of_rows`),
  ADD KEY `fk_screen_table` (`theatre_id`);

--
-- Indexes for table `seat_tbl`
--
ALTER TABLE `seat_tbl`
  ADD PRIMARY KEY (`seat_id`),
  ADD KEY `fk_seat_table` (`screen_id`);

--
-- Indexes for table `theatre_tbl`
--
ALTER TABLE `theatre_tbl`
  ADD PRIMARY KEY (`theatre_id`);

--
-- Indexes for table `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking_tbl`
--
ALTER TABLE `booking_tbl`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `founder`
--
ALTER TABLE `founder`
  MODIFY `founder_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `screen_tbl`
--
ALTER TABLE `screen_tbl`
  MODIFY `screen_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seat_tbl`
--
ALTER TABLE `seat_tbl`
  MODIFY `seat_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `theatre_tbl`
--
ALTER TABLE `theatre_tbl`
  MODIFY `theatre_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `token`
--
ALTER TABLE `token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `screen_tbl`
--
ALTER TABLE `screen_tbl`
  ADD CONSTRAINT `fk_screen_table` FOREIGN KEY (`theatre_id`) REFERENCES `theatre_tbl` (`theatre_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `seat_tbl`
--
ALTER TABLE `seat_tbl`
  ADD CONSTRAINT `fk_seat_table` FOREIGN KEY (`screen_id`) REFERENCES `screen_tbl` (`screen_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
