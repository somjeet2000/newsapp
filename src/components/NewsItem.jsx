import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      urlToImage,
      url,
      sourceName,
      author,
      publishedAt,
    } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: '18rem', height: '27rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0',
              transform: 'translate(-0%, -50%)',
            }}
          >
            <span className="badge rounded-pill bg-danger">{sourceName}</span>
          </div>
          <img
            src={
              urlToImage
                ? urlToImage
                : 'https://plus.unsplash.com/premium_photo-1691223714882-57a432c4edaf?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            className="card-img-top"
            alt="..."
            style={{ height: '9.5rem' }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : 'Undefined'} On{' '}
                {new Date(publishedAt).toUTCString()}
              </small>
            </p>
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
