package com.weather.information.exception;

public class CityNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 5100493060077352587L;

	public CityNotFoundException(String city) {
		super(String.format("Sorry, %s not found on openweathermap.", city));
	}
}
