import React from "react";
import './ToolsIcon.css';
import { assets } from "../../assets/escomData";
import { Link } from "react-router-dom";

const ToolsIcon = (props) => {
  const { renderOne, renderTwo } = props;

  return (
    <>
      {/* List 1 */}
      <div className="spl-tools-list">
        {renderOne.map((item) => (
          <div key={item._id} className="tools">
            <Link to={`projects/${item._id}`}>
              <div className="info">
                <img src={item.image} alt={item.nickname} />
              </div>
            </Link>
            <p className="item-name">{item.nickname}</p>
          </div>
        ))}
      </div>

      {/* List 2 */}
      <div className="spl-tools-list-2">
        {renderTwo.map((item) => (
          <div key={item._id} className="tools">
            <Link to={`projects/${item._id}`}>
              <div className="info">
                <img src={item.image} alt={item.nickname} />
              </div>
            </Link>
            <p className="item-name">{item.nickname}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToolsIcon;
