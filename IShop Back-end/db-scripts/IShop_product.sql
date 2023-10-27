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

-- Dump della struttura di tabella ishop.product
CREATE TABLE IF NOT EXISTS `product` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `sku` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `unit_price` decimal(13,2) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `active` bit(1) DEFAULT b'1',
  `units_in_stock` int(11) DEFAULT NULL,
  `date_created` datetime(6) DEFAULT NULL,
  `last_updated` datetime(6) DEFAULT NULL,
  `category_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category` (`category_id`),
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dump dei dati della tabella ishop.product: ~15 rows (circa)
INSERT INTO `product` (`id`, `sku`, `name`, `description`, `unit_price`, `image_url`, `active`, `units_in_stock`, `date_created`, `last_updated`, `category_id`) VALUES
	(1, 'BOOK-TECH-1000', 'La favola di Amore e Psiche', 'Comincia come ogni favola il racconto di Amore e Psiche, con un re e una regina e le loro tre figlie, tutte bellissime. Ma la grazia e lo splendore della più piccola,', 8.08, 'assets/images/products/apuleio.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(2, 'BOOK-TECH-1001', 'Era meglio il libro', '"Adesso ti spiego che cos\'è questo libro. Facciamo una cosa breve, anche perché lo spazio è poco. Da anni Valerio Lundini dirige e interpreta corti,', 12.00, 'assets/images/products/era meglio il libro.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(3, 'BOOK-TECH-1002', 'il vampiro di venezia', 'Learn KubeVenezia, Natale 1576. La morte nera ha falcidiato un terzo della popolazione e, come se non bastasse, la vigilia di Natale non solo avviene il primo di una serie di efferarnetes', 14.50, 'assets/images/products/il vampiro di venezia.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(4, 'BOOK-TECH-1003', 'Storia di una ladra di libri', 'È il 1939 nella Germania nazista. Tutto il Paese è col fiato sospeso. La Morte non ha mai avuto tanto da fare, ed è solo l\'inizio. Il giorno del funerale del suo fratellino', 10.35, 'assets/images/products/ladra.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(5, 'BOOK-TECH-1004', 'Volevamo prendere il cielo ', 'Sullo sfondo di una Verona malinconica e severa, e di una Parigi inaspettata e ricca di possibilità, si snoda una storia dal sapore ', 9.99, 'assets/images/products/volevamo prendere il cielo.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(6, 'BOOK-TECH-1000', 'La favola di Amore e Psiche', 'Comincia come ogni favola il racconto di Amore e Psiche, con un re e una regina e le loro tre figlie, tutte bellissime. Ma la grazia e lo splendore della più piccola,', 8.08, 'assets/images/products/apuleio.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(7, 'BOOK-TECH-1001', 'La favola di Amore e Psiche', 'Comincia come ogni favola il racconto di Amore e Psiche, con un re e una regina e le loro tre figlie, tutte bellissime. Ma la grazia e lo splendore della più piccola,', 8.08, 'assets/images/products/apuleio.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(8, 'BOOK-TECH-1004', 'Era meglio il libro', '"Adesso ti spiego che cos\'è questo libro. Facciamo una cosa breve, anche perché lo spazio è poco. Da anni Valerio Lundini dirige e interpreta corti,', 12.00, 'assets/images/products/era meglio il libro.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(9, 'BOOK-TECH-1004', 'Era meglio il libro', '"Adesso ti spiego che cos\'è questo libro. Facciamo una cosa breve, anche perché lo spazio è poco. Da anni Valerio Lundini dirige e interpreta corti,', 12.00, 'assets/images/products/era meglio il libro.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(10, 'BOOK-TECH-1004', 'Era meglio il libro', '"Adesso ti spiego che cos\'è questo libro. Facciamo una cosa breve, anche perché lo spazio è poco. Da anni Valerio Lundini dirige e interpreta corti,', 12.00, 'assets/images/products/era meglio il libro.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(11, 'BOOK-TECH-1004', 'Era meglio il libro', '"Adesso ti spiego che cos\'è questo libro. Facciamo una cosa breve, anche perché lo spazio è poco. Da anni Valerio Lundini dirige e interpreta corti,', 12.00, 'assets/images/products/era meglio il libro.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(12, 'BOOK-TECH-1004', 'il vampiro di venezia', 'Learn KubeVenezia, Natale 1576. La morte nera ha falcidiato un terzo della popolazione e, come se non bastasse, la vigilia di Natale non solo avviene il primo di una serie di efferarnetes', 14.50, 'assets/images/products/il vampiro di venezia.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(13, 'COFFIE-1001', 'tazza overwatch', 'tazza overwatch 2', 15.50, 'assets/images/products/tazza overwatch.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 2),
	(14, 'BOOK-TECH-1003', 'il vampiro di venezia', 'Learn KubeVenezia, Natale 1576. La morte nera ha falcidiato un terzo della popolazione e, come se non bastasse, la vigilia di Natale non solo avviene il primo di una serie di efferarnetes', 14.50, 'assets/images/products/il vampiro di venezia.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(15, 'BOOK-TECH-1003', 'il vampiro di venezia', 'Learn KubeVenezia, Natale 1576. La morte nera ha falcidiato un terzo della popolazione e, come se non bastasse, la vigilia di Natale non solo avviene il primo di una serie di efferarnetes', 14.50, 'assets/images/products/il vampiro di venezia.jpg', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
