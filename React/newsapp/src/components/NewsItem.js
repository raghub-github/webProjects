import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card bg-dark" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/06_jun/13_tue/img_1686651417731_288.jpg?"
                : imageUrl
            }
            className="card-img-top"
            alt="ImageUrl"
            style={{ height: "220px", width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-success"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
