import React from "react";
import './Courses.css';
import CourseCategory from "../../Components/CourseCategory/CourseCategory";

const Courses = () => {
    return (
        <>
            <div className="courses">
            </div>
            <div className="content">
                <CourseCategory/>
            </div>
        </>
    )
}

export default Courses;