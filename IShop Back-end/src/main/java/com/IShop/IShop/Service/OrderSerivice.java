package com.IShop.IShop.Service;

import com.IShop.IShop.dto.OrderDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;

public interface OrderSerivice {
    Page<OrderDTO> getAllOrders(Pageable pageable);
}
