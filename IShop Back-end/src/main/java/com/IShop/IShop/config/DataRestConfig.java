package com.IShop.IShop.config;

import com.IShop.IShop.entity.Product;
import com.IShop.IShop.entity.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);
        //credo un array di metodi http
        HttpMethod[] httpMethodsImport = {HttpMethod.PUT, HttpMethod.DELETE, HttpMethod.POST};
        //disabilito i seguenti metodi di Product class
        config.getExposureConfiguration().forDomainType(Product.class)
                .withItemExposure((data, httpMethods) -> httpMethods.disable(httpMethodsImport))
                .withCollectionExposure((data, httpMethods) -> httpMethods.disable(httpMethodsImport));

        //disabilito i seguenti metodi di ProductCategory class
        config.getExposureConfiguration().forDomainType(ProductCategory.class)
                .withItemExposure((data, httpMethods) -> httpMethods.disable(httpMethodsImport))
                .withCollectionExposure((data, httpMethods) -> httpMethods.disable(httpMethodsImport));

    }
}
