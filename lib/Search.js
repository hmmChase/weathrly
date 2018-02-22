import React, { Component } from 'react';
import Card from './Card';
import './styles/Search.css';

export default class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      userCity: ''
    };
  }

  render(props) {
    return (
      <div>
        <input className='search-bar' type='search' placeholder='Search by Location' />
        <input onClick={this.props.setCity} className='search-button' type="submit" placeholder="Search" />
      </div>
    );
  }
}
