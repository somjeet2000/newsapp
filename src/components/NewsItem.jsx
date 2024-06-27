import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, url } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: '18rem', height: '23rem' }}>
          <img
            src={
              urlToImage
                ? urlToImage
                : 'https://plus.unsplash.com/premium_photo-1691223714882-57a432c4edaf?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            className="card-img-top"
            alt="..."
            style={{ height: '10rem' }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
