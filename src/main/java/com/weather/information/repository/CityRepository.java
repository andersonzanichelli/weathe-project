package com.weather.information.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.weather.information.model.City;

@CrossOrigin(allowedHeaders = "Access-Control-Allow-Origin : *")
@RepositoryRestResource( collectionResourceRel = "data", path = "city" )
public interface CityRepository extends MongoRepository<City, Long> {

}
