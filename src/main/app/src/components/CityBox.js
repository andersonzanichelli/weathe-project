import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class CityBox extends Component {

  state = { name: '', country: '' };

  handleChangeCity = event => {
    this.setState({ name: event.target.value });
  }

  handleChangeCountry = event => {
    this.setState({ country: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.saveCity({ name: this.state.name, country: this.state.country });

    this.setState({ name: '', country: ''});
  }

  render() {
    return (
      <form className="form-inline" onSubmit={ this.handleSubmit }>
        <h4>Add a city</h4>
        <div className="form-group mb-2">
          <label>Name</label>
          <input className="name form-control" id="cityName" placeholder="Enter the city name" onChange={ this.handleChangeCity } value={ this.state.name } />
        </div>
        <div className="form-group mb-2">
          <label>Country</label>
          <input className="country form-control" id="cityCountry" placeholder="Enter the country (ex: br)" onChange={ this.handleChangeCountry } value={ this.state.country } />
        </div>
        <button className="saveCity btn btn-primary mb-2">Add</button>
      </form>
    )
  }
}

export default connect( null, actions ) (CityBox);
