package com.IShop.IShop.Service;
import com.IShop.IShop.dao.OrderItemRepository;
import com.IShop.IShop.dao.OrderRepository;
import com.IShop.IShop.dao.ProductRepository;
import com.IShop.IShop.dto.OrderDTO;
import com.IShop.IShop.entity.Order;
import com.IShop.IShop.entity.OrderItem;
import com.IShop.IShop.entity.Product;
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
    private OrderItemRepository orderItemRepository;
    private ProductRepository productRepository;


    public OrderServiceImpl(OrderRepository orderRepository,OrderItemRepository orderItemRepository,ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
        this.productRepository = productRepository;
    }



    private List<OrderItem> getOrderItem(Long orderId){
        List<OrderItem> orderItem = this.orderItemRepository.findByOrderId(orderId);
        return orderItem;

    }

    private Product getProductDetails(Long productId) {
        Product product = this.productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Prodotto not found: " + productId));

        return new Product(
                product.getId(),
                product.getSku(),
                product.getName(),
                product.getDescription(),
                product.getUnitPrice(),
                product.getImageUrl(),
                product.getUnitsInStock(),
                product.getDataCreated(),
                product.getLastUpdated()
        );
    }


    private OrderDTO mapOrderToOrderDTO(Order order) {
        List<OrderItem> orderItems = getOrderItem(order.getId());

        List<Product> products = new ArrayList<>();
        List<Integer> orderQuantity = new ArrayList<>();


        for (OrderItem orderitem:orderItems) {
            products.add(getProductDetails(orderitem.getProductId()));
            orderQuantity.add(orderitem.getQuantity());
        }







        return new OrderDTO(
                order.getId(), order.getOrderTrackingNumber(), order.getTotalPrice(),
                order.getTotalQuantity(), order.getStatus(),
                order.getDataCreated(),
                order.getLastUpdated(),
                order.getCustomer().getFirstName(),
                order.getCustomer().getLastName(),
                order.getCustomer().getEmail(),
                order.getShippingAddress().getCity(),
                order.getShippingAddress().getCountry(),
                order.getShippingAddress().getState(),
                order.getShippingAddress().getStreet(),
                order.getShippingAddress().getZipCode(),
                order.getBillingAddress().getCity(),
                order.getBillingAddress().getCountry(),
                order.getBillingAddress().getState(),
                order.getBillingAddress().getStreet(),
                order.getBillingAddress().getZipCode(),
                products,orderQuantity


        );

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

