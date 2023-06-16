import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = { articles: [], loading: false, page: 1 };
  }
  async componentDidMount() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5cb3f0dcd46f48d094c8e665b620a058&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        loading: false,
      });
    } catch (e) {
      console.log("something is not working");
    }
  }

  handlePrivClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5cb3f0dcd46f48d094c8e665b620a058&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const res = await fetch(url);
    const data = await res.json();
    this.setState({
      page: this.state.page - 1,
      articles: data.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    if (
      this.state.page + 1 >!
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5cb3f0dcd46f48d094c8e665b620a058&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        page: this.state.page + 1,
        articles: data.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3 App">
        <h2>NewsPlate - Top Headlines</h2>
        <div className="row">
        {this.state.loading && <Spinner />}
          {!this.state.loading &&
            this.state.articles.map((element) => {
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
        <div className="container d-flex justify-content-between">
          <button
            onClick={this.handlePrivClick}
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary m-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-primary m-4"
            onClick={this.handleNextClick}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default News;
