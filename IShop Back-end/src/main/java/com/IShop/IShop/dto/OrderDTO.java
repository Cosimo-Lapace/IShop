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
    private Long billingAddressId;

    private Long customerId;

    @Override
    public String toString() {
        return "OrderDTO{" +
                "orderId=" + orderId +
                ", orderTrackingNumber='" + orderTrackingNumber + '\'' +
                ", totalPrice=" + totalPrice +
                ", totalQuantity=" + totalQuantity +
                ", billingAddressId=" + billingAddressId +
                ", customerId=" + customerId +
                ", customerFirstName='" + customerFirstName + '\'' +
                ", customerLastName='" + customerLastName + '\'' +
                ", customerEmail='" + customerEmail + '\'' +
                ", productId=" + productId +
                ", productName='" + productName + '\'' +
                ", productImageUrl='" + productImageUrl + '\'' +
                ", productDescription='" + productDescription + '\'' +
                ", productUnitPrice=" + productUnitPrice +
                '}';
    }

    private String customerFirstName;
    private String customerLastName;
    private  String customerEmail;

    private Long productId;

    private String productName;
    private String productImageUrl;
    private String productDescription;
    private BigDecimal productUnitPrice;

}
