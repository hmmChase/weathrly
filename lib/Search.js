import React, { Component } from 'react';
// import Card from './Card';
import './styles/Search.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleChange(event) {
    this.setState({ location: event.target.value });

    // console.log('this.state.location:', this.state.location);
  }

  handleClick() {
    this.props.setLocation(this.state.location);

    // console.log('this.props.setLocation:', this.props.setLocation);
  }

  render() {
    return (
      <div>
        <input className='search-bar'
          type='search'
          placeholder='Search by Location'
          onChange={this.handleChange} />
        <input className='search-button'
          type="submit"
          placeholder="Search"
          onClick={this.handleClick} />
      </div>
    );
  }
}