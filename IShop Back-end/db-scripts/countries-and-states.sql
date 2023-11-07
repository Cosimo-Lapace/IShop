-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versione server:              10.4.28-MariaDB - mariadb.org binary distribution
-- S.O. server:                  Win64
-- HeidiSQL Versione:            12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dump della struttura di tabella ishop.country
CREATE TABLE IF NOT EXISTS `country` (
  `id` smallint(5) unsigned NOT NULL,
  `code` varchar(2) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Dump dei dati della tabella ishop.country: ~5 rows (circa)
INSERT INTO `country` (`id`, `code`, `name`) VALUES
	(1, 'IT', 'Italy'),
	(2, 'FR', 'France'),
	(3, 'DE', 'Germany'),
	(4, 'SV', 'Switzerland'),
	(5, 'ES', 'Spain');

-- Dump della struttura di tabella ishop.state
CREATE TABLE IF NOT EXISTS `state` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `country_id` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_country` (`country_id`),
  CONSTRAINT `fk_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Dump dei dati della tabella ishop.state: ~85 rows (circa)
INSERT INTO `state` (`id`, `name`, `country_id`) VALUES
	(1, 'Abruzzo', 1),
	(2, 'Basilicata', 1),
	(3, 'Calabria', 1),
	(4, 'Emilia-Romagna', 1),
	(5, 'Friuli Venezia Giulia', 1),
	(6, 'Lazio', 1),
	(7, 'Liguria', 1),
	(8, 'Lombardia', 1),
	(9, 'Marche', 1),
	(10, 'Molise', 1),
	(11, 'Piemonte', 1),
	(12, 'Puglia', 1),
	(13, 'Sardegna', 1),
	(14, 'Sicilia', 1),
	(15, 'Toscana', 1),
	(16, 'Trentino-Alto Adige', 1),
	(17, 'Umbria', 1),
	(18, 'Valle d Aosta', 1),
	(19, 'Veneto', 1),
	(20, 'Alvernia-Rodano-Alpi', 2),
	(21, 'Alsazia', 2),
	(22, 'Aquitania', 2),
	(23, 'Borgogna', 2),
	(24, 'Bretagna', 2),
	(25, 'Centro-Valle della Loira', 2),
	(26, 'Corsica', 2),
	(27, 'Grand Est', 2),
	(28, 'Hauts-de-France', 2),
	(29, '?le-de-France', 2),
	(30, 'Normandia', 2),
	(31, 'Nuova Aquitania', 2),
	(32, 'Occitania', 2),
	(33, 'Paesi della Loira', 2),
	(34, 'Provenza-Alpi-Costa Azzurra', 2),
	(35, 'Baden-W?rttemberg', 3),
	(36, 'Baviera', 3),
	(37, 'Berlino', 3),
	(38, 'Brandeburgo', 3),
	(39, 'Brema', 3),
	(40, 'Assia', 3),
	(41, 'Amburgo', 3),
	(42, 'Meclemburgo-Pomerania Anteriore', 3),
	(43, 'Bassa Sassonia', 3),
	(44, 'Renania Settentrionale-Vestfalia', 3),
	(45, 'Renania-Palatinato', 3),
	(46, 'Saarland', 3),
	(47, 'Sassonia', 3),
	(48, 'Sassonia-Anhalt', 3),
	(49, 'Schleswig-Holstein', 3),
	(50, 'Turingia', 3),
	(51, 'Zurigo', 4),
	(52, 'Berna', 4),
	(53, 'Losanna', 4),
	(54, 'Ginevra', 4),
	(55, 'Ticino', 4),
	(56, 'Vaud', 4),
	(57, 'Vallese', 4),
	(58, 'Friburgo', 4),
	(59, 'Neuch?tel', 4),
	(60, 'Glaris', 4),
	(61, 'Svizzera centrale', 4),
	(62, 'Svizzera orientale', 4),
	(63, 'Appenzell Esterno', 4),
	(64, 'Appenzell Interno', 4),
	(65, 'Grisons', 4),
	(66, 'Turgovia', 4),
	(67, 'Andalusia', 5),
	(68, 'Aragon', 5),
	(69, 'Asturias', 5),
	(70, 'Balearic Islands', 5),
	(71, 'Canary Islands', 5),
	(72, 'Cantabria', 5),
	(73, 'Castile and Le?n', 5),
	(74, 'Castilla-La Mancha', 5),
	(75, 'Catalonia', 5),
	(76, 'Extremadura', 5),
	(77, 'Galicia', 5),
	(78, 'Madrid', 5),
	(79, 'Murcia', 5),
	(80, 'Navarre', 5),
	(81, 'La Rioja', 5),
	(82, 'Valencia', 5),
	(83, 'Ibiza', 5),
	(84, 'Mallorca', 5),
	(85, 'Minorca', 5);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
