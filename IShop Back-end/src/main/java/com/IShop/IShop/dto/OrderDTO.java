package com.IShop.IShop.dto;

import com.IShop.IShop.entity.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.*;

@Getter
@Setter
public class OrderDTO {



    private Long orderId;
    private String orderTrackingNumber;
    private BigDecimal totalPrice;
    private int totalQuantity;


    private String status;
    private Date dataCreated;
    private Date lastUpdated;

    private String CustomerfirstName;
    private String CustomerlastName;
    private String Customeremail;


    private String shippingAddressCity;
    private String shippingAddressCountry;
    private String shippingAddressState;
    private String shippingAddressStreet;
    private String shippingAddressZipCode;

    private String billingAddressCity;
    private String billingAddressCountry;
    private String billingAddressState;
    private String billingAddressStreet;
    private String billingAddressZipCode;
    public OrderDTO(Long id, String orderTrackingNumber, BigDecimal totalPrice, int totalQuantity, String status, Date dataCreated, Date lastUpdated, String firstName,String lastName,String email,
                    String shippingAddressCity,String shippingAddressCountry,String shippingAddressState,String shippingAddressStreet,String shippingAddressZipCode,
                    String billingAddressCity,String billingAddressCountry,String billingAddressState,String billingAddressStreet,String billingAddressZipCode
                    ) {
        this.orderId = id;
        this.orderTrackingNumber = orderTrackingNumber;
        this.totalPrice = totalPrice;
        this.totalQuantity = totalQuantity;
        this.status = status;
        this.dataCreated = dataCreated;
        this.lastUpdated = lastUpdated;
        this.CustomerfirstName = firstName;
        this.CustomerlastName = lastName;
        this.Customeremail = email;

        this.shippingAddressCity = shippingAddressCity;
        this.shippingAddressCountry = shippingAddressCountry;
        this.shippingAddressState = shippingAddressState;
        this.shippingAddressStreet = shippingAddressStreet;
        this.shippingAddressZipCode = shippingAddressZipCode;

        this.billingAddressCity = billingAddressCity;
        this.billingAddressCountry = billingAddressCountry;
        this.billingAddressState = billingAddressState;
        this.billingAddressStreet = billingAddressStreet;
        this.billingAddressZipCode = billingAddressZipCode;






    }

    public OrderDTO(){

    }
  /*  private Long customerId;

    private String customerFirstName;
    private String customerLastName;
    private  String customerEmail;

    private Long productId;

    private BigDecimal orderItemQuantity;


    private List<Product> products = new ArrayList<>();
    private String productName;
    private String productImageUrl;
    private String productDescription;
    private BigDecimal productUnitPrice;*/

}

