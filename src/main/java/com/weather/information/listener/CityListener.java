package com.weather.information.listener;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.data.rest.core.event.AbstractRepositoryEventListener;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.weather.information.exception.CityNotFoundException;
import com.weather.information.model.City;

@Component
public class CityListener extends AbstractRepositoryEventListener<City> {

	@Autowired
	private Environment env;
	
	@Override
	protected void onBeforeCreate(City city) {
		
		String url = env.getProperty("openweathermap.api.url");
		String key = env.getProperty("openweathermap.api.key");
		
		String uri = new OpenMapURLHelper(city, url, key).buildUrl();
		
		try {
			RestTemplate restTemplate = new RestTemplate();
			restTemplate.getForEntity(uri, JsonNode.class);
		} catch (HttpClientErrorException e) {
			throw new CityNotFoundException(city.getName());
		}
	    	
		super.onBeforeCreate(city);
	}
}
