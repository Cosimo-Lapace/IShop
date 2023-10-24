package com.IShop.IShop.dao;

import com.IShop.IShop.entity.Product;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product,Long> {

    //base api
    //http://localhost:8080/api/products
    //paginable
    //http://localhost:8080/api/products?page=0&size=2
    //send api for productCategoryID
    //database:
    //relation by product and categoryProduct
    //http://localhost:8080/api/products/search/findByCategoryId?id=yzf
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);

    //send api for search by product Name
    //database:
    //search table product column name
    //http://localhost:8080/api/products/search/findByNameContaining?name=yzf
    Page<Product> findByNameContaining(@Param("name") String name,Pageable pageable);
}
