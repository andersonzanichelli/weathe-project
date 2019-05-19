import React, { Component } from 'react';

import Weather from './Weather';
import CityBox from './CityBox';
import CityList from './CityList';

class App extends Component {

  render() {
    return (
      <div>
        <CityBox />
        <CityList />
        <Weather />
      </div>
    );
  }
};


export default App;
