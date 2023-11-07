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

-- Dump dei dati della tabella ishop.country: ~4 rows (circa)
INSERT INTO `country` (`id`, `code`, `name`) VALUES
	(1, 'IT', 'Italy'),
	(2, 'FR', 'France'),
	(3, 'DE', 'Germany'),
	(4, 'SV', 'Switzerland');

-- Dump della struttura di tabella ishop.state
CREATE TABLE IF NOT EXISTS `state` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `country_id` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_country` (`country_id`),
  CONSTRAINT `fk_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Dump dei dati della tabella ishop.state: ~19 rows (circa)
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
	(19, 'Veneto', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
