import React, { Component } from 'react';
import './styles/Search.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  handleClick() {
    this.props.setLocation(this.state.userInput);
  }

  render() {
    return (
      <div className="search">
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