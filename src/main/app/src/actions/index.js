import axios from 'axios';

import { SAVE_CITY, FETCH_CITIES, FETCH_WEATHER } from './types';

const SERVER_URL = 'http://localhost:8080/weather-api/city';

export function saveCity(city) {
  const response = axios.post(SERVER_URL, city);

  return {
    type: SAVE_CITY,
    payload: response
  };
}

export function fetchCities() {
  const response = axios.get(SERVER_URL);
  return {
    type: FETCH_CITIES,
    payload: response
  }
}

export function fetchWeather(city) {
  const API_KEY = '4a354d9ffeaaddd5b41ad1d434477d81';
  const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

  const url = `${ROOT_URL}&q=${city.name},${city.country}`;
  const response = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: response
  }
}
