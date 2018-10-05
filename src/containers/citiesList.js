import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {CityInfo} from '../components/cityInformation'

class CitiesList extends Component {
  
  renderWeather() {
    return this.props.weather.map((city) => {
      return (<CityInfo city={city} key={city.id} />)
    })
  }
  render() {
    return(
      <div>
        {this.renderWeather()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}
export default connect(mapStateToProps)(CitiesList)
