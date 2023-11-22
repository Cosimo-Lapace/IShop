package com.IShop.IShop.dao;

import com.IShop.IShop.entity.Customer;
import com.IShop.IShop.entity.Order;
import com.IShop.IShop.entity.OrderItem;
import com.IShop.IShop.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:4200")
public interface OrderRepository  extends JpaRepository<Order,Long> {

List<Order> findAll();

}
