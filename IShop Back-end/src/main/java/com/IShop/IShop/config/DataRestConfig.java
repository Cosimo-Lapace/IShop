package com.IShop.IShop.config;

import com.IShop.IShop.entity.Country;
import com.IShop.IShop.entity.Product;
import com.IShop.IShop.entity.ProductCategory;
import com.IShop.IShop.entity.State;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.EntityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {

    private EntityManager entityManager;

    @Autowired
    public DataRestConfig(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);
        //credo un array di metodi http
        HttpMethod[] httpMethodsImport = {HttpMethod.PUT, HttpMethod.DELETE, HttpMethod.POST};
        //disabilito i seguenti metodi di Product class
        disabledClassHttpMethod(Product.class,config, httpMethodsImport);
        //disabilito i seguenti metodi di ProductCategory class
        disabledClassHttpMethod(ProductCategory.class,config, httpMethodsImport);
        //disable method in Country class
        disabledClassHttpMethod(Country.class,config, httpMethodsImport);
        //disable method in State class
        disabledClassHttpMethod(State.class,config, httpMethodsImport);

        exposeIds(config);
    }

    private static void disabledClassHttpMethod(Class theclass,RepositoryRestConfiguration config, HttpMethod[] httpMethodsImport) {
        config.getExposureConfiguration().forDomainType(theclass)
                .withItemExposure((data, httpMethods) -> httpMethods.disable(httpMethodsImport))
                .withCollectionExposure((data, httpMethods) -> httpMethods.disable(httpMethodsImport));
    }

    //metodo per rendere disponibile tutti gli id di tutte le varie entità
    //quindi mi restituisce i json con l'id del databa
    private void exposeIds(RepositoryRestConfiguration config) {
        //creo un istanza delle varie entità prendendo il modello che restituisce
        Set<EntityType<?>> entityTypes = this.entityManager.getMetamodel().getEntities();
        //creo una lista di classi
        List<Class> entityClass = new ArrayList<>();
        //inserisco i vari entity tipe nella mia lista
        for (EntityType entityType : entityTypes) {
            entityClass.add(entityType.getJavaType());
        }
        //creo un array di classi nella quale inserisco le classi sopra citate
        Class[] domainTypes = entityClass.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);
    }
}
