import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class CityList extends Component {

  componentDidMount() {
    this.props.fetchCities();
  }

  weatherCity = event => {
    event.preventDefault();
    const clicked = document.activeElement.getAttribute("id");
    const name = clicked.split('_')[0];
    const country = clicked.split('_')[1]
    this.props.fetchWeather({ name, country });
  }

  renderCities() {
    return this.props.cities.map( city => {
      return <li className="list-group-item" key={ city.name }>
              <button className="btn btn-secondary" id={ city.name + "_" + city.country } type="submit">{ city.name },{ city.country }</button>
             </li>;
    });
  }

  render() {
    return (
      <div className="CityList">
        <h4>City list</h4>
        <form onSubmit={ this.weatherCity }>
          <ul className="list-group">
            { this.renderCities() }
          </ul>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cities: state.cities };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (CityList);
