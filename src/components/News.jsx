import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  render() {
    return (
      <div className="container my-4">
        <NewsItem />
      </div>
    );
  }
}
