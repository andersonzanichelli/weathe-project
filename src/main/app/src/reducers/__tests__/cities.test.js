import cityReducer from 'reducers/cities';
import { SAVE_CITY, FETCH_CITIES } from 'actions/types';

it('handles actions of type SAVE_CITY', () => {
  const action = {
    type: SAVE_CITY,
    payload: { data: [[{ city: 'Maringá', country: 'br' }]] }
  }

  const newState = cityReducer([], action);

  expect(newState).toEqual([[[{"city": "Maringá", "country": "br"}]]]);
});

it('handles action with unknown type', () => {
  const newState = cityReducer([], {type: 'UNKNOWN_TYPE'} );
  expect(newState).toEqual([]);
});

it('get all cities registered', () => {
  const action = {
    type: FETCH_CITIES,
    payload: {data: { _embedded: { data: [ { name: "Maringá", country: "br"}, { name: "London", country: "uk"} ] } } }
  }

  const allCities = cityReducer([], action);

  expect(allCities).toEqual([ { name: "Maringá", country: "br"}, { name: "London", country: "uk"} ]);
});
