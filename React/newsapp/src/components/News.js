import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
      
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updatePage = async () => {
    console.log("hello");
    try {
      props.setProgress(10);
      const url1 = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
      const url2 = `https://newsapi.org/v2/top-headlines?q=${props.searchQuery}&?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      console.log("hello");
      const res = await fetch(!props.searchQuery ? url1 : url2);
      // const res = await fetch(url1);
      props.setProgress(30);
      const data = await res.json();
      props.setProgress(70);
      await setArticles(data.articles);
      await setTotalResults(data.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // document.title = `${capitalizeFirstLetter(props.category)} - NewsPlate`;
    updatePage();
  }, [props.searchQuery]);

  const fetchMoreData = async () => {
    try {
      const url1 = `https://newsapi.org/v2/top-headlines?country=${props.country
        }&category=${props.category}&apiKey=${props.apikey}&page=${page + 1
        }&pageSize=${props.pageSize}`;
      const url2 = `https://newsapi.org/v2/top-headlines?q=${props.searchQuery}&?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
      const res = await fetch(!props.searchQuery ? url1 : url2);
      setPage(page + 1);
      // const res = await fetch(url1);
      const data = await res.json();
      setArticles(articles.concat(data.articles));
      setTotalResults(data.totalResults);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container my-3 App">
      <h2>NewsPlate - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {loading && <Spinner />}
            {articles.map((element) => {
              return (
                <div className="col-sm-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    className="text-truncate"
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
  searchQuery: "",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  searchQuery: PropTypes.string,
};

export default News;
