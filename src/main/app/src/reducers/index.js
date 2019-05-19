import { combineReducers } from 'redux';

import cityReducer from './cities';
import weatherReducer from './weather';

export default combineReducers({
  cities: cityReducer,
  weather: weatherReducer
});
