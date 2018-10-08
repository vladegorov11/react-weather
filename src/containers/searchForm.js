
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {city: ''};
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.city);
    this.setState({city: ''});
  }

  onHandleChange(event) {
    this.setState({city: event.target.value});
  }

  render() {
    return (
      <div className='container'>
        <form className='input-group ' onSubmit={this.onHandleSubmit}>
           <input
             placeholder='Enter cities'
             className='form-control'
             type="text"
             value={this.state.city}
             onChange={this.onHandleChange}
            />
          <span className='input-group-append'>
            <button type='submit' className='btn btn-secondary'>Search</button>
          </span>
       </form>
      </div>
    )}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWeather: bindActionCreators(fetchWeather, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchForm)
