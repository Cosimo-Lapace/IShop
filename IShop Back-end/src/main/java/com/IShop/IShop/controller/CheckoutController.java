package com.IShop.IShop.controller;


import com.IShop.IShop.Service.CheckoutService;
import com.IShop.IShop.dto.Purchase;
import com.IShop.IShop.dto.PurchaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    @Autowired
    public CheckoutController(CheckoutService checkoutService){
        this.checkoutService = checkoutService;
    }

    //http://localhost:8080/api/checkout/purchase
    @PostMapping("/purchase")
    public PurchaseResponse purchaseResponse(@RequestBody Purchase purchase){
        PurchaseResponse purchaseResponse = this.checkoutService.orderResponse(purchase);
        return  purchaseResponse;
    }

}
