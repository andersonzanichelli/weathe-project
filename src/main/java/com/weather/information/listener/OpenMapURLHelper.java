package com.weather.information.listener;

import com.weather.information.model.City;

public class OpenMapURLHelper {
	
	private City city;
	private String url;
	private String key;

	public OpenMapURLHelper(City city, String url, String key) {
		this.city = city;
		this.url = url;
		this.key = key;
	}
	
	public String buildUrl() {
		String uri = String.format("%s?appid=%s&q=%s,%s", url, key, city.getName(), city.getCountry().toLowerCase());
		return uri;
	}
}
