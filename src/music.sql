-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 16, 2024 at 02:30 PM
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
-- Database: `music`
--

-- --------------------------------------------------------

--
-- Table structure for table `album`
--

CREATE TABLE `album` (
  `albumid` int(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `numberofsong` int(10) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `artistid` int(10) NOT NULL,
  `description` text DEFAULT NULL,
  `releaseyear` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `album`
--

INSERT INTO `album` (`albumid`, `title`, `thumbnail`, `numberofsong`, `genre`, `artistid`, `description`, `releaseyear`) VALUES
(1, 'Âm thầm bên em', 'https://i.scdn.co/image/ab67616d00001e02e22dc5110a402420596ad412', 1, 'Nhạc trẻ', 1, NULL, 2015),
(2, 'Hãy trao cho anh', 'https://i.scdn.co/image/ab67616d00001e023403b37254ffacb7732e92da', 1, 'Nhạc trẻ', 1, NULL, 2019),
(3, 'Chạy ngay đi', 'https://i.scdn.co/image/ab67616d00001e02e22dc5110a402420596ad412', 1, 'Nhạc trẻ', 1, NULL, 2019),
(4, 'Lạc trôi', 'https://i.scdn.co/image/ab67616d00001e02e22dc5110a402420596ad412', 1, 'Nhạc trẻ', 1, NULL, 2019),
(5, 'Nơi này có anh', 'https://i.scdn.co/image/ab67616d00001e02e22dc5110a402420596ad412', 1, 'Nhạc trẻ', 1, NULL, 2019),
(6, 'Em của ngày hôm qua', 'https://i.scdn.co/image/ab67616d00001e02e22dc5110a402420596ad412', 1, 'Nhạc trẻ', 1, NULL, 2019),
(7, 'Cơn mưa ngang qua', 'https://i.scdn.co/image/ab67616d00001e02e22dc5110a402420596ad412', 1, 'Nhạc trẻ', 1, NULL, 2019),
(8, 'Chúng ta của hiện tại', 'https://i.scdn.co/image/ab67616d00001e02e22dc5110a402420596ad412', 1, 'Nhạc trẻ', 1, NULL, 2019);

-- --------------------------------------------------------

--
-- Table structure for table `artist`
--

CREATE TABLE `artist` (
  `artistid` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `avatarurl` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `artist`
--

INSERT INTO `artist` (`artistid`, `name`, `description`, `avatarurl`) VALUES
(1, 'Sơn Tùng M-TP', 'Nguyễn Thanh Tùng, born in 1994, known professionally as Sơn Tùng M-TP, is a Vietnamese singer, songwriter, producer, and actor. He is not only known as one of the most successful Vietnamese artists and as the \"Prince of V-pop\", but also as the Chairman of three self-created companies: M-TP Entertainment, M-TP Talent and M-TP & Friends. He has received many achievements: a MTV Europe Music Award, an Mnet Asian Music Award, appeared on Forbes Vietnam\'s 2018 30 Under 30 list, and is also the first Vietnamese musician to enter the Billboard Social 50. Up until now, he has already released a total of 25 songs, such as \"Cơn mưa ngang qua\", \"Em của ngày hôm qua\", \" Âm thầm bên em\", and many more. His single \"Chạy ngay đi\" was released with a music video featuring Thai actress Davika Hoorne, and with a collaboration with rapper Snoop Dogg, he went on and created the big hit \"Hãy trao cho anh\". After releasing \"Có chắc yêu là đây\" in 2020, the song became the 3rd-most-streamed Youtube premiere at the time with 902,000 live viewers. As we all know, music is, without a doubt, the easiest way to connect people. For Sơn Tùng M-TP, music is everything he ever wanted to offer to the world around him with all his heart and soul.', 'https://i.scdn.co/image/ab676161000051745a79a6ca8c60e4ec1440be53');

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `sid` int(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `artistid` int(10) NOT NULL,
  `albumid` int(10) NOT NULL,
  `duration` int(10) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `songurl` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `songnumber` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`sid`, `title`, `artistid`, `albumid`, `duration`, `genre`, `songurl`, `thumbnail`, `songnumber`) VALUES
(1, 'Âm thầm bên em', 1, 1, 291, 'Nhạc trẻ', 'https://drive.google.com/uc?export=download&id=13KCVInUFCWK_4LcRvxk4YO_dRx37WyKv\r\n', 'https://i.scdn.co/image/ab67616d00001e02e22dc5110a402420596ad412', 1),
(2, 'Hãy trao cho anh', 1, 2, 246, 'Nhạc trẻ', 'https://drive.google.com/uc?export=download&id=1DGmtMeBW18a-WCjMYhoniW1svFWHUg6x\r\n', 'https://i.scdn.co/image/ab67616d00001e023403b37254ffacb7732e92da', 1),
(5, 'Chạy ngay đi', 1, 2, 291, 'Nhạc trẻ', 'https://drive.google.com/uc?export=download&id=1ViXgWJxBcTD7-8jv4u0T7upvDPomzzup', 'https://i.scdn.co/image/ab67616d00001e02e22dc5110a402420596ad412', 1),
(6, 'Lạc trôi', 1, 4, 222, 'Nhạc trẻ', 'https://drive.google.com/uc?export=download&id=13FEace0Bi13TBt7q6E9L8nN_m1RAGF4a\r\n', 'https://i.scdn.co/image/ab67616d00001e02e22dc5110a402420596ad412', 1),
(7, 'Nơi này có anh', 1, 5, 222, 'Nhạc trẻ', 'https://drive.google.com/uc?export=download&id=1eDiC9jDLY70jVJ8kFEtYywfRywLBlmsa\r\n', 'https://i.scdn.co/image/ab67616d00001e023403b37254ffacb7732e92da', 1),
(8, 'Em của ngày hôm qua', 1, 5, 222, 'Nhạc trẻ', 'https://drive.google.com/file/d/1nqF46AUE1htivxWCwRcULhaEyNMZFtPJ/view?usp=drive_link', 'https://i.scdn.co/image/ab67616d00001e023403b37254ffacb7732e92da', 1),
(9, 'Cơn mưa ngang qua', 1, 7, 222, 'Nhạc trẻ', 'https://drive.google.com/uc?export=download&id=1lS7zkf2uzTtovQaPdhuh64UIrwtjmRYg\r\n', 'https://i.scdn.co/image/ab67616d00001e023403b37254ffacb7732e92da', 1),
(10, 'Chúng ta của hiện tại', 1, 8, 222, 'Nhạc trẻ', 'https://drive.google.com/uc?export=download&id=11FMeb5E7cB5zvLNRoD_154dwmhdq1lVT\r\n', 'https://i.scdn.co/image/ab67616d00001e023403b37254ffacb7732e92da', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`albumid`),
  ADD KEY `artistid1_fk` (`artistid`);

--
-- Indexes for table `artist`
--
ALTER TABLE `artist`
  ADD PRIMARY KEY (`artistid`);

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`sid`),
  ADD UNIQUE KEY `songurl` (`songurl`),
  ADD KEY `artistid_fk` (`artistid`),
  ADD KEY `album_id` (`albumid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `album`
--
ALTER TABLE `album`
  MODIFY `albumid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `artist`
--
ALTER TABLE `artist`
  MODIFY `artistid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `sid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `album`
--
ALTER TABLE `album`
  ADD CONSTRAINT `artistid1_fk` FOREIGN KEY (`artistid`) REFERENCES `artist` (`artistid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `album_id` FOREIGN KEY (`albumid`) REFERENCES `album` (`albumid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `artistid_fk` FOREIGN KEY (`artistid`) REFERENCES `artist` (`artistid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
