package com.IShop.IShop.dao;


import com.IShop.IShop.entity.Customer;
import com.IShop.IShop.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface CustomerRepository extends JpaRepository<Customer,Long> {

}
