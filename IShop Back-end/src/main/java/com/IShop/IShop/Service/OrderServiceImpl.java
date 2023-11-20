package com.IShop.IShop.Service;

import com.IShop.IShop.dto.OrderDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;


import java.util.List;


@Service
public class OrderServiceImpl implements OrderSerivice {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<OrderDTO> getAllOrders() {


            String sql = "SELECT \n" +
                    "    o.id AS  order_id,\n" +
                    "    o.order_tracking_number,\n" +
                    "    o.total_price,\n" +
                    "    o.total_quantity,\n" +
                    "    o.billing_address_id,\n" +
                    "    c.*,  \n" +
                    "    oi.product_id,  \n" +
                    "    p.* \n" +
                    "FROM\n" +
                    "    ishop.orders o \n" +
                    "    INNER JOIN ishop.customer c ON o.customer_id = c.id\n" +
                    "    INNER JOIN ishop.order_item oi ON o.id = oi.order_id\n" +
                    "    INNER JOIN ishop.product p ON oi.product_id = p.id\n" +
                    "GROUP BY order_id;";

        return jdbcTemplate.query(sql, (resultSet, rowNum) -> {
                OrderDTO orderDTO = new OrderDTO();
                orderDTO.setOrderId(resultSet.getLong("order_id"));

                orderDTO.setOrderTrackingNumber(resultSet.getString("order_tracking_number"));
                orderDTO.setTotalPrice(resultSet.getBigDecimal("total_price"));
                orderDTO.setTotalQuantity(resultSet.getInt("total_quantity"));
                orderDTO.setBillingAddressId(resultSet.getLong("billing_address_id"));


                orderDTO.setCustomerId(resultSet.getLong("id"));
                orderDTO.setCustomerFirstName(resultSet.getString("c.first_name"));
                orderDTO.setCustomerLastName(resultSet.getString("c.last_name"));
                orderDTO.setCustomerEmail(resultSet.getString("c.email"));



                orderDTO.setProductId(resultSet.getLong("product_id"));
                orderDTO.setProductName(resultSet.getString("p.name"));
                orderDTO.setProductImageUrl(resultSet.getString("p.image_url"));
                orderDTO.setProductDescription(resultSet.getString("p.description"));
                orderDTO.setProductUnitPrice(resultSet.getBigDecimal("p.unit_price"));





                return orderDTO;
            });







        }
    }

