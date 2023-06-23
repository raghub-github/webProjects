import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3 d-flex justify-content-center">
      <div className="card bg-dark">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">Source: {source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://cdn.sci.news/images/2016/07/image_4059f-AR-Scorpii.jpg"
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
};

export default NewsItem;
