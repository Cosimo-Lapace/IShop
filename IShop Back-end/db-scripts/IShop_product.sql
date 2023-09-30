-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versione server:              8.0.34 - MySQL Community Server - GPL
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
  `id` bigint NOT NULL AUTO_INCREMENT,
  `sku` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `unit_price` decimal(13,2) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `active` bit(1) DEFAULT b'1',
  `units_in_stock` int DEFAULT NULL,
  `date_created` datetime(6) DEFAULT NULL,
  `last_updated` datetime(6) DEFAULT NULL,
  `category_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category` (`category_id`),
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dump dei dati della tabella ishop.product: ~5 rows (circa)
INSERT INTO `product` (`id`, `sku`, `name`, `description`, `unit_price`, `image_url`, `active`, `units_in_stock`, `date_created`, `last_updated`, `category_id`) VALUES
	(1, 'BOOK-TECH-1000', 'JavaScript - The Fun Parts', 'Learn JavaScript', 19.99, 'assets/images/products/placeholder.png', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(2, 'BOOK-TECH-1001', 'Spring Framework Tutorial', 'Learn Spring', 29.99, 'assets/images/products/placeholder.png', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(3, 'BOOK-TECH-1002', 'Kubernetes - Deploying Containers', 'Learn Kubernetes', 24.99, 'assets/images/products/placeholder.png', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(4, 'BOOK-TECH-1003', 'Internet of Things (IoT) - Getting Started', 'Learn IoT', 29.99, 'assets/images/products/placeholder.png', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1),
	(5, 'BOOK-TECH-1004', 'The Go Programming Language: A to Z', 'Learn Go', 24.99, 'assets/images/products/placeholder.png', b'1', 100, '2023-09-30 10:49:56.000000', NULL, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
