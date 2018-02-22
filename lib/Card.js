import React, { Component } from 'react';
import './styles/Card.css';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.cleanData}</h3>
      </div>
    );  
  }
}