import React from "react";
import "./procard.scss";
import { Link } from "react-router-dom";
const ProCard = ({ item }) => {
  return (
    <Link to="/" className="link">
      <div className="proCard">
        <img src={item.img} alt="" />
        <div className="info">
          <img src={item.pp} alt="" />
          <div className="texts">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProCard;
