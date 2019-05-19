import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Chart from './Chart';

class Weather extends Component {

  renderWeather(cityData) {
    debugger
    const name = cityData.city.name;
    const temperatures = _.map(cityData.list.map(weather => weather.main.temp), (temp) => parseInt(temp - 273, 10));
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temperatures} v color="orange" units="°C" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h4>City Weather</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(Weather);
