// eslint-disable-next-line no-unused-vars
import React from "react";

import "./Sidebar.css";

const Sidebar = (props) => {
  // const { title, time, id } = props.bookmark;
  const bookmark = props.bookmark;
  const time = props.times;
  console.log(time);

  // let times = [];
  // for(const )

  // for (const min of time) {
  //   timeTotal = timeTotal + min.time;

  //   // console.log(timeTotal);
  // }
  // let length = bookmark.length;

  // let totalTime = 0;
  // for (const blog of bookmark) {
  //   totalTime = totalTime + blog.time;
  //   console.log(totalTime);
  // }
  // console.log(props.bookmark);
  return (
    <div className="sidebar">
      <h3 className="spent-time"> Spent time on read : {1}</h3>
      <div className="bm-blog-cont">
        <h3>Bookmarked Blogs: {bookmark.length}</h3>

        <div className="bm-blogs">
          <div className="bm-blog-name">
            <p>{1}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
