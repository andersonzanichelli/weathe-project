import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CityList from 'components/CityList';

let wrapped;

beforeEach(() => {

  const initialState = {
    cities: [{ name: 'Maringá', country: 'br' }, { name: 'London', country: 'uk' }]
  };

  wrapped = mount(
    <Root initialState={ initialState }>
      <CityList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
})

it('creates one li per city', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the name and country per city', () => {
  expect(wrapped.render().text()).toContain('Maringá,br');
  expect(wrapped.render().text()).toContain('London,uk');
})
