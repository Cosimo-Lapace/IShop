package com.IShop.IShop.dto;

import com.IShop.IShop.entity.Address;
import com.IShop.IShop.entity.Customer;
import com.IShop.IShop.entity.Order;
import com.IShop.IShop.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
