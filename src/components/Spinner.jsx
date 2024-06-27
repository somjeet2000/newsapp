import React, { Component } from 'react';
import spinnerLoader from './spinnerLoader.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={spinnerLoader} alt={spinnerLoader} />
      </div>
    );
  }
}
