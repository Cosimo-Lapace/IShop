package com.IShop.IShop.dao;

import com.IShop.IShop.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;



public interface ProductRepository extends JpaRepository<Product,Long> {

}
