package com.IShop.IShop.Service;

import com.IShop.IShop.dao.CustomerRepository;
import com.IShop.IShop.dto.Purchase;
import com.IShop.IShop.dto.PurchaseResponse;
import com.IShop.IShop.entity.Address;
import com.IShop.IShop.entity.Customer;
import com.IShop.IShop.entity.Order;
import com.IShop.IShop.entity.OrderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private CustomerRepository customerRepository;

    @Autowired
    public CheckoutServiceImpl(CustomerRepository customerRepository){
        this.customerRepository = customerRepository;
    }

    @Override
    @Transactional
    public PurchaseResponse orderResponse(Purchase purchase) {

        //retrieve the order
        Order order = purchase.getOrder();
        //generate tracking number
        String orderTracking = generateTrackingNumber();
        order.setOrderTrackingNumber(orderTracking);
        //populate order with orderItem
        Set<OrderItem> orderItemSet = purchase.getOrderItems();
        orderItemSet.forEach(orderItem -> order.add(orderItem));
        //populate order with billing and shipping address
        Address billingAddress = purchase.getBillingAddress();
        Address shippingAddress = purchase.getShippingAddress();
        order.setBillingAddress(billingAddress);
        order.setShippingAddress(shippingAddress);

        //populate customer with order
        Customer customer = purchase.getCustomer();
        customer.add(order);
        //save database
        customerRepository.save(customer);


        return new PurchaseResponse(orderTracking);
    }

    private String generateTrackingNumber() {
        //generate random trackID with UUID
        return UUID.randomUUID().toString();
    }

}
