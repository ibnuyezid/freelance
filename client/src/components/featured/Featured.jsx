import React from "react";
import "./featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img
                style={{
                  color: "gray",
                  width: "20px",
                  height: "20px",
                  margin: "10px",
                }}
                src="./img/search.png"
                alt=""
              />
              <input type="text" placeholder='Try "building mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>wordpress</button>
            <button>Logo design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
