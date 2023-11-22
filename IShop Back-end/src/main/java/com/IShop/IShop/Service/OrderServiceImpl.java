package com.IShop.IShop.Service;


import com.IShop.IShop.dao.OrderRepository;
import com.IShop.IShop.dao.ProductRepository;
import com.IShop.IShop.dto.OrderDTO;

import com.IShop.IShop.entity.Customer;
import com.IShop.IShop.entity.Order;
import com.IShop.IShop.entity.OrderItem;
import com.IShop.IShop.entity.Product;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Service

public class OrderServiceImpl implements OrderSerivice {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    private OrderRepository orderRepository;


    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    private OrderDTO mapOrderToOrderDTO(Order order) {
        return new OrderDTO(order.getId(), order.getOrderTrackingNumber(), order.getTotalPrice(),
                order.getTotalQuantity(), order.getStatus(), order.getDataCreated(), order.getLastUpdated(), order.getCustomer().getFirstName(), order.getCustomer().getLastName(), order.getCustomer().getEmail(),
                order.getShippingAddress().getCity(),
                order.getShippingAddress().getCountry(),
                order.getShippingAddress().getState(),
                order.getShippingAddress().getStreet(),
                order.getShippingAddress().getZipCode(),
                order.getBillingAddress().getCity(),
                order.getBillingAddress().getCountry(),
                order.getBillingAddress().getState(),
                order.getBillingAddress().getStreet(),
                order.getBillingAddress().getZipCode());
    }


    @Override

    public Page<OrderDTO> getAllOrders(Pageable pageable) {

        List<Order> orders = this.orderRepository.findAll(pageable).getContent();
        int ordersSize = this.orderRepository.findAll().size();

        List<OrderDTO> orderDTOList = orders.stream()
                .map(order -> mapOrderToOrderDTO(order))
                .collect(Collectors.toList());
        return new PageImpl<>(orderDTOList, pageable, ordersSize);


    }
}

