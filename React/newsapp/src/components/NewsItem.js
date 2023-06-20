import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3 d-flex justify-content-center">
        <div className="card bg-dark">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: "1", left: "80%" }}
          >
            Source: {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/06_jun/13_tue/img_1686651417731_288.jpg?"
                : imageUrl
            }
            className="card-img-top"
            alt="ImageUrl"
            // style={{ height: "100%", width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
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
