import weatherReducer from 'reducers/weather';
import { FETCH_WEATHER } from 'actions/types';

it('handles actions of type FETCH_WEATHER', () => {
  const action = {
    type: FETCH_WEATHER,
    payload: {data: { weather: [], name: "London"}}
  }

  const newState = weatherReducer([], action);

  expect(newState).toEqual([{ weather: [], name: "London"}]);
});
