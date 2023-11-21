package com.IShop.IShop.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class OrderDTO {
    private Long orderId;
    private String orderTrackingNumber;
    private BigDecimal totalPrice;
    private int totalQuantity;

    private String billingAddressCity;
    private String billingAddressCountry;
    private String billingAddressState;
    private String billingAddressSreet;
    private String billingAddressZipCode;

    private String shippingAddressCity;
    private String shippinhAddressCountry;
    private String shippingAddressState;
    private String shippingAddressSreet;
    private String shippingAddressZipCode;

    private Long customerId;

    private String customerFirstName;
    private String customerLastName;
    private  String customerEmail;

    private Long productId;

    private String productName;
    private String productImageUrl;
    private String productDescription;
    private BigDecimal productUnitPrice;

}
