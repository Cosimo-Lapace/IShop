package com.IShop.IShop.Service;

import com.IShop.IShop.dto.Purchase;
import com.IShop.IShop.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse orderResponse(Purchase purchase);
}
