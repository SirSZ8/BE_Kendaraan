-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2023 at 02:57 AM
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
-- Database: `db_kendaraan`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `idOrder` int(8) NOT NULL,
  `user_id` int(30) NOT NULL,
  `vehicle_id` int(30) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUser` int(8) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `fullname` varchar(200) NOT NULL,
  `photoUser` varchar(11) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUser`, `email`, `password`, `fullname`, `photoUser`, `created_at`, `updated_at`) VALUES
(1, 'raflidn@gmail.com', '$2a$10$mUZWp0Ig1lbiG33Epqni3eO', 'Rafli Dinu Sirojan', '', '2023-07-24 15:26:42.101635', '2023-07-24 15:26:42.101635'),
(2, 'astaadji@gmail.com', '$2a$10$tSLAPaXGK.HucYYPBdE3O.Y', 'Asta Adji Nugraha', '', '2023-07-24 15:28:08.804821', '2023-07-24 15:28:08.804821'),
(3, 'luigi@gmail.com', '$2a$10$le4/GsXQK09QMQgUn0KxuOB', 'Mamang Luigi', '', '2023-07-24 22:36:35.500392', '2023-07-24 22:36:35.500392'),
(4, 'mariob@gmail.com', '$2a$10$weo1U6j4iPhKEyMFc1YDa.L', 'Mario Bros', '', '2023-07-25 12:30:08.229781', '2023-07-25 12:30:08.229781'),
(5, 'hayawae@gmail.com', '$2a$10$7S7yh5tvTHmKCRznnFMekeB', 'Haya Haya Wae', '', '2023-07-25 12:30:57.466113', '2023-07-25 12:30:57.466113'),
(6, 'mariod@gmail.com', '$2a$10$W/PoKHJMWitYYnd1cb5ZY.6', 'Mario Dandi', '', '2023-07-25 12:32:08.744442', '2023-07-25 12:32:08.744442'),
(7, 'lololili@gmail.com', '$2a$10$5bePFZALRICfBm/bX33uNug', 'Lololili', '', '2023-07-26 01:58:35.718778', '2023-07-26 01:58:35.718778');

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `idVehicle` int(8) NOT NULL,
  `nameVehicle` varchar(200) NOT NULL,
  `vehicle_brand_id` int(30) NOT NULL,
  `photoVehicle` varchar(200) NOT NULL,
  `price` decimal(65,0) NOT NULL,
  `year` int(11) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `created_by` int(30) NOT NULL,
  `updated_by` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_brands`
--

CREATE TABLE `vehicle_brands` (
  `idBrand` int(8) NOT NULL,
  `nameBrand` varchar(200) NOT NULL,
  `photoBrand` varchar(30) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `created_by` int(200) NOT NULL,
  `updated_by` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`idOrder`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`idVehicle`);

--
-- Indexes for table `vehicle_brands`
--
ALTER TABLE `vehicle_brands`
  ADD PRIMARY KEY (`idBrand`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
