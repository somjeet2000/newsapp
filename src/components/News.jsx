import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    let apiURL =
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=819835dff3bb4283be3f680e015c1c29';
    let fetchData = await fetch(apiURL);
    let parsedData = await fetchData.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-4">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={
                    element.description ? element.description.slice(0, 90) : ''
                  }
                  urlToImage={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
