import React from "react";
import { Link } from "react-router-dom";
import './AllTools.css';

const AllTools = ({ data }) => {
  return (
    <>
      <div className="all-tools">
        <div className="tools-info">
          <div className="icon">
            <img src={data.image} alt="" />
          </div>
          <div className="p-info">
            <h2 title={data.name}>{data.name}</h2>
          </div>
        </div>
        <Link to={`/projects/${data._id}`}>
          <button>Open</button>
        </Link>
      </div>
    </>
  )
}

export default AllTools;