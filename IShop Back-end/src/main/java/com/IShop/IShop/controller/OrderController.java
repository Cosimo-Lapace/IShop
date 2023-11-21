package com.IShop.IShop.controller;

import com.IShop.IShop.Service.OrderServiceImpl;
import com.IShop.IShop.dto.OrderDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderServiceImpl orderService;

    @GetMapping("/getAllOrders")
    public Page<OrderDTO> getAllOrders(Pageable pageable) {


        return orderService.getAllOrders(pageable);
    }
}
