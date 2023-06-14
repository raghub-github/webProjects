import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }
  async componentDidMount() {
    try {
      let url =
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=5cb3f0dcd46f48d094c8e665b620a058";
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
      });
    } catch (e) {
      console.log("something is not working");
    }
  }

  render() {
    return (
      <div className="container my-3 App">
        <h2>NewsPlate - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-sm-4" key={element.url}>
                <NewsItem
                  //   style={{maxWidth: '100%',
                  //   display: '-webkit-box',
                  //   WebkitBoxOrient: 'vertical',
                  //   WebkitLineClamp: 2,
                  //   overflow: 'hidden',
                  //   textOverflow: 'ellipsis'}}
                  title={element.title}
                  description={element.description}
                  className="text-truncate"
                  //   title={element.title ? element.title.slice(0, 45) : ""}
                  //   description={
                  //     element.description ? element.description.slice(0, 88) : ""
                  //   }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
