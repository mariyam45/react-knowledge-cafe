// eslint-disable-next-line no-unused-vars
import React from "react";

import "./Sidebar.css";

const Sidebar = (props) => {
  // const { title, time, id } = props.bookmark;
  const title = props.bookmark;
  console.log(title)
  const time = props.minutes;
  
  // console.log(time);

  

  // for (const min of time) {
  //   timeTotal = timeTotal + min.time;

  //   // console.log(timeTotal);
  // }
  // let length = bookmark.length;

  let totalTime = 0;
  for (const min of time) {
    totalTime = totalTime + min;
    console.log(totalTime);
  }
  // console.log(props.bookmark);
  
  
  return (
    <div className="sidebar">
      <h3 className="spent-time"> Spent time on read : {totalTime}</h3>
      <div className="bm-blog-cont">
        <h3 className="">Bookmarked Blogs: {title.length}</h3>

        <div className="bm-blogs">
          {
            title.map(eachTitle=> <div className="bm-blog-name">
            <p>{eachTitle}</p>
          </div>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
