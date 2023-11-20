package com.IShop.IShop.Service;

import com.IShop.IShop.dto.OrderDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class OrderServiceImpl implements OrderSerivice {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<OrderDTO> getAllOrders() {


            String sql = "SELECT o.id AS order_id, o.order_tracking_number, o.total_price, o.total_quantity, " +
                    "o.billing_address_id, c.*, oi.product_id, p.* " +
                    "FROM ishop.orders o " +
                    "INNER JOIN ishop.customer c ON o.customer_id = c.id " +
                    "INNER JOIN ishop.order_item oi ON o.id = oi.order_id " +
                    "INNER JOIN ishop.product p ON oi.product_id = p.id";

        return jdbcTemplate.query(sql, (resultSet, rowNum) -> {
                OrderDTO orderDTO = new OrderDTO();
                orderDTO.setOrderId(resultSet.getLong("order_id"));

                orderDTO.setOrderTrackingNumber(resultSet.getString("order_tracking_number"));
                orderDTO.setTotalPrice(resultSet.getBigDecimal("total_price"));
                orderDTO.setTotalQuantity(resultSet.getInt("total_quantity"));
                orderDTO.setBillingAddressId(resultSet.getLong("billing_address_id"));

                // Set dei campi del customer
                orderDTO.setCustomerId(resultSet.getLong("id"));
                orderDTO.setCustomerFirstName(resultSet.getString("c.first_name"));
                orderDTO.setCustomerLastName(resultSet.getString("c.last_name"));
                orderDTO.setCustomerEmail(resultSet.getString("c.email"));
                // ... (aggiungi altri campi customer secondo necessità)

                // Set del campo del order_item
                orderDTO.setProductId(resultSet.getLong("product_id"));
                orderDTO.setProductName(resultSet.getString("p.name"));
                orderDTO.setProductImageUrl(resultSet.getString("p.image_url"));
                orderDTO.setProductDescription(resultSet.getString("p.description"));
                orderDTO.setProductUnitPrice(resultSet.getBigDecimal("p.unit_price"));




                return orderDTO;
            });







        }
    }

