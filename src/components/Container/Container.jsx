// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import Sidebar from "../Sidebar/Sidebar";
import "./Container.css";

const Container = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [time, setTime] = useState([]);

  // fetch data from json file
  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // hendle bookmark
  const bookMarkHandler = (blog) => {
    // console.log(blog);
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  };

  // handle Mark Ad read
  const handleMarkAsRead = (times) => {
    const newTime = [...time, times];
    let totalTime = 0;
    for (const time of newTime) {
      totalTime = totalTime + time;
    }
    setTime(newTime);
    return totalTime;
    // console.log("read", totalTime);
  };

  return (
    <div className="container">
      {/* blog component  */}
      <div className="blogs-cont">
        {blogs.map((blog) => (
          <Blogs
            blog={blog}
            key={blog.id}
            bookMarkHandler={bookMarkHandler}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        ))}
      </div>
      {/* sidebar component  */}
      <Sidebar bookmark={bookmark} totalTime={time}></Sidebar>
    </div>
  );
};

export default Container;
