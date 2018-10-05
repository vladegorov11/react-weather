import React, { Component } from 'react';
import './App.css';
import SearchForm from '../containers/searchForm'
import CitiesList from '../containers/citiesList'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm/>
        <CitiesList/>
      </div>
    );
  }
}
