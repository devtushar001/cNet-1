import React from "react";
import { blogData } from "../../assets/escomData";
import { Link } from "react-router-dom";
import './Blogs.css';

const Blogs = () => {
   const latestBlog = blogData.length > 0 ? blogData[blogData.length - 1] : null;

   return (
      <>
         <div style={{ backgroundImage: latestBlog?.feturedImg ? `url('${latestBlog.feturedImg}')` : "none" }} className="blogs">
            <div className="over-lap"></div>
            {latestBlog ? <h1>{latestBlog.title}</h1> : <p>No blogs available</p>}
            <Link to={`/blogs/${latestBlog._id}`}> <button className="read-more"> Read More </button></Link>
         </div>
         <div className="filer-data">
         </div>
         <div className="blogs-container">
            {blogData.map((data) => {
               return (
                  <div key={data._id} className="single-blog">
                     <Link className="no-style" to={`/blogs/${data._id}`}>
                        <img src={data.feturedImg} alt="" />
                        <h2>{data.title}</h2>
                        <p>{data.category}</p>
                     </Link>

                  </div>
               )
            })}
         </div>
      </>
   );
};

export default Blogs;
