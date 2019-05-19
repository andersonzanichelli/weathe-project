import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import { BrowserRouter, Route } from 'react-router-dom';

import Root from 'Root';
import App from 'components/App';

describe('list cities', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://localhost:8080/weather-api/city', {
      status: 200,
      response: { _embedded: { data: [ { name: "Maringá", country: "br"}, { name: "London", country: "uk"} ] } }
    })
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('can fetch a list of cities and display them', (done) => {
    const wrapped = mount(
      <Root>
        <BrowserRouter>
          <Route path="/" component={ App } />
        </BrowserRouter>
      </Root>
    );

    moxios.wait(() => {
      wrapped.update();

      expect(wrapped.find('li').length).toEqual(2);

      done();
      wrapped.unmount();
    });
  });
});

describe('save city', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubOnce(
          'post',
          'http://localhost:8080/weather-api/city',
          { name: "London", country: "uk"}
        )
    moxios.stubs.mostRecent()
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('can save a city', (done) => {

    const initialState = { cities: [{ name: 'Maringá', country: 'br' }] };

    const wrapped = mount(
      <Root initialState={ initialState }>
        <BrowserRouter>
          <Route path="/" component={ App } />
        </BrowserRouter>
      </Root>
    );

    expect(wrapped.find('li').length).toEqual(1);

    wrapped.find('.name').simulate('change', { target: { value: 'London' } });
    wrapped.find('.country').simulate('change', { target: { value: 'uk' } });
    wrapped.find('.saveCity').simulate('click');

    moxios.wait(() => {
      wrapped.update();

      expect(wrapped.find('li').length).toEqual(1);

      done();
      wrapped.unmount();
    });
  });
});
