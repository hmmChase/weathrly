import React, { Component } from 'react';
import './styles/Search.css';
import Trie from '@hmmchase/complete-me/lib/Trie';
import cities from '../__mocks__/dictionaryMock';
import PropTypes from 'prop-types';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      suggestions: []
    };

    this.trie = new Trie();
    this.trie.populate(cities.data);
    this.inputUpdateStates = this.inputUpdateStates.bind(this);
    this.buttonSetLocAndClearInput = this.buttonSetLocAndClearInput.bind(this);
  }

  inputUpdateStates(event) {
    this.setState({
      userInput: (event.target.value)
        .charAt(0)
        .toUpperCase() + (event.target.value)
        .slice(1),
      suggestions: this.trie.suggest(event.target.value)
    });
  }

  buttonSetLocAndClearInput() {
    this.props.setLocation(this.state.userInput);
    this.setState({ userInput: '' });
  }

  render() {
    return (
      <div className="search">
        <input
          className='search-bar'
          type='search'
          value={this.state.userInput}
          list='suggestions'
          placeholder='Search by Location'
          onChange={this.inputUpdateStates} />
        <datalist
          id='suggestions'>
          {
            this.state.suggestions.map((suggestion, i) => {
              if (i < 5) {
                return <option key={i} value={suggestion} />;
              }
            })
          }
        </datalist>
        <input
          className='search-button'
          type="submit"
          placeholder="Search"
          onClick={this.buttonSetLocAndClearInput} />
      </div>
    );
  }
}

Search.propTypes = {
  setLocation: PropTypes.func
};