package com.IShop.IShop.dao;

import com.IShop.IShop.entity.OrderItem;
import org.aspectj.weaver.ast.Or;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:4200")
public interface OrderItemRepository extends JpaRepository<OrderItem,Long> {
    @Override
    List<OrderItem> findAll();

    List<OrderItem> findByOrderId(@Param("id")Long id);
}
