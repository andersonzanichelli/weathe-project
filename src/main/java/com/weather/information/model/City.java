package com.weather.information.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "city")
public class City {

	@Id
    private String id;
	private String name;
	private String country;
}