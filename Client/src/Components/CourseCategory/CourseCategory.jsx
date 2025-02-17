import React from "react";
import { courseCategory } from "../../assets/escomData";
import { Link } from "react-router-dom";
import './CourseCategory.css';

const CourseCategory = () => {

    return (
        <>
            <div className="course-category">
                <h2 style={{ background: "skyblue", padding: '20px', color: '#fff' }}>"Explore Our Exclusive Collection of Courses Designed Just for You! Learn, Grow, and Master New Skills in Web Development, Programming, and More!"</h2>
                {courseCategory.map((item, i) => {
                    return (
                        <div className="single-course">
                            <img src={item.img} alt="" />
                            <Link to={`/courses/${item._id}`}><p>{item.name}</p></Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CourseCategory;