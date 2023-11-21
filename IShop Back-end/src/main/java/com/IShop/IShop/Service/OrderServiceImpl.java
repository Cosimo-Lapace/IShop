package com.IShop.IShop.Service;

import com.IShop.IShop.dto.OrderDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;


import java.util.List;


@Service

public class OrderServiceImpl implements OrderSerivice {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override

    public Page<OrderDTO> getAllOrders(Pageable pageable) {


        String sql = "SELECT\n" +
                "  o.id AS order_id,\n" +
                "  o.order_tracking_number,\n" +
                "  o.total_price,\n" +
                "  o.total_quantity,\n" +
                "  o.billing_address_id,\n" +
                "  b.*,\n" +
                "  s.*,\n" +
                "  c.*,\n" +
                "  oi.product_id,\n" +
                "  p.*\n" +
                "FROM\n" +
                "  ishop.orders o\n" +
                "  INNER JOIN ishop.customer c ON o.customer_id = c.id\n" +
                "  INNER JOIN ishop.order_item oi ON o.id = oi.order_id\n" +
                "  INNER JOIN ishop.product p ON oi.product_id = p.id\n" +
                "  INNER JOIN ishop.address b ON o.billing_address_id = b.id\n" +
                "  INNER JOIN ishop.address s ON o.shipping_address_id = s.id\n" +
                "GROUP BY order_id\n"
                ;

     List<OrderDTO> dtos = jdbcTemplate.query(sql,(resultSet, rowNum) -> {
            OrderDTO orderDTO = new OrderDTO();
            orderDTO.setOrderId(resultSet.getLong("order_id"));

            orderDTO.setOrderTrackingNumber(resultSet.getString("order_tracking_number"));
            orderDTO.setTotalPrice(resultSet.getBigDecimal("total_price"));
            orderDTO.setTotalQuantity(resultSet.getInt("total_quantity"));


            orderDTO.setCustomerId(resultSet.getLong("id"));
            orderDTO.setCustomerFirstName(resultSet.getString("c.first_name"));
            orderDTO.setCustomerLastName(resultSet.getString("c.last_name"));
            orderDTO.setCustomerEmail(resultSet.getString("c.email"));

            orderDTO.setBillingAddressCity(resultSet.getString("b.city"));
            orderDTO.setBillingAddressCountry(resultSet.getString("b.country"));
            orderDTO.setBillingAddressState(resultSet.getString("b.state"));
            orderDTO.setBillingAddressSreet(resultSet.getString("b.street"));
            orderDTO.setBillingAddressZipCode(resultSet.getString("b.zip_code"));

            orderDTO.setShippingAddressCity(resultSet.getString("s.city"));
            orderDTO.setShippinhAddressCountry(resultSet.getString("s.country"));
            orderDTO.setShippingAddressState(resultSet.getString("s.state"));
            orderDTO.setShippingAddressSreet(resultSet.getString("s.street"));
            orderDTO.setShippingAddressZipCode(resultSet.getString("s.zip_code"));


            orderDTO.setProductId(resultSet.getLong("product_id"));
            orderDTO.setProductName(resultSet.getString("p.name"));
            orderDTO.setProductImageUrl(resultSet.getString("p.image_url"));
            orderDTO.setProductDescription(resultSet.getString("p.description"));
            orderDTO.setProductUnitPrice(resultSet.getBigDecimal("p.unit_price"));



            return orderDTO;
        });

            return  new PageImpl<>(dtos);


    }
}

