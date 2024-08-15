-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2024 at 04:30 PM
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
(2, 'Hãy trao cho anh', 1, 2, 246, 'Nhạc trẻ', 'https://drive.google.com/uc?export=download&id=1DGmtMeBW18a-WCjMYhoniW1svFWHUg6x\r\n', 'https://i.scdn.co/image/ab67616d00001e023403b37254ffacb7732e92da', 1);

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `sid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

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
