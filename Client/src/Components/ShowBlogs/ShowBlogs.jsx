import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../assets/escomData";
import './ShowBlogs.css';

const ShowBlogs = () => {
  const { blogsId } = useParams();

  const showBlogData = blogData.find((data) => Number(data._id) === Number(blogsId));

  const readableDate = new Date(showBlogData.createdAt).toLocaleString("en-IN", {
    weekday: "long",  
    year: "numeric",  
    month: "long",    
    day: "numeric",   
    hour: "2-digit",  
    minute: "2-digit",
    second: "2-digit",
    hour12: true      
});


  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <div className="single-blog-data">
        <h1>{showBlogData.title}</h1><span> &#8592; {showBlogData.author}</span>
        <div className="content-image">
          <img src={showBlogData.feturedImg} alt="" />
          <span>{showBlogData.category}</span>
          <span>{readableDate}</span>
        </div>
        <p>{showBlogData.content}</p>
      </div>
    </>
  )
}

export default ShowBlogs;