// eslint-disable-next-line no-unused-vars
import React from "react";
// ....................
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Blogs.css";

const Blogs = (props) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { img, name, id, title, profile, time, date } = props.blog;
  const bookMarkHandler = props.bookMarkHandler;
  const handleMarkAsRead = props.handleMarkAsRead;



  //   console.log(name);
  return (
    <div className="blog">
      <img className="title-img" src={img} alt="" />
      <div className="profile-area">
        <div className="profile-cont">
          <img src={profile} alt="" className="pro-pic" />
          <div className="name-date">
            <p className="name">{name}</p>
            <small className="date">{date} </small>
          </div>
        </div>

        <div className="bookmark">
          <p>{time} min read</p>
          <button
            className="bookmark-icon"
            onClick={() => bookMarkHandler(title)}
          >
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>
      <h1>{title}</h1>
      <small>#programming #dm </small>
      <button onClick={() => handleMarkAsRead(time)} className="btn-read">
        MARK AS READ
      </button>
    </div>
  );
};

export default Blogs;
