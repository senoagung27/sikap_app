-- phpMyAdmin SQL Dump
-- version 4.7.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 15, 2018 at 05:47 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id2543125_tk_itats`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_wisata`
--

CREATE TABLE `tbl_wisata` (
  `id_tempat` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Nama` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Alamat` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Fasilitas` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Wahana` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Harga_masuk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_wisata`
--

INSERT INTO `tbl_wisata` (`id_tempat`, `Nama`, `Alamat`, `Fasilitas`, `Wahana`, `Harga_masuk`) VALUES
('1', 'Jatim Park 1', 'Jl. Kartika No. 2, Sisir, Batu, Sisir, Kec. Batu, Kota Batu, Jawa Timur 65315', 'Area Parkir, Mushollah, Toilet Umum, Klinik Kesehatan', 'Flying Fox, Games Room, Ethnic Gallery', 120000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_wisata`
--
ALTER TABLE `tbl_wisata`
  ADD PRIMARY KEY (`id_tempat`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
