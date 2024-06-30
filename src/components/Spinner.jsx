import React, { Component } from 'react';
import spinnerLoader from './spinnerLoader.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={spinnerLoader}
          alt={spinnerLoader}
          className="my-3"
          style={{ height: '2rem', width: '2rem' }}
        />
      </div>
    );
  }
}
