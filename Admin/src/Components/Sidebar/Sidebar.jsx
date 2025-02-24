import React from "react";
import './Sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="buttons">
                    <button>
                        <Link className="no-style" to="/add-products">
                            Add Products
                        </Link>
                    </button>
                    <button>
                        Add Blogs
                    </button>
                    <button>
                        Orders
                    </button>
                </div>
                <div className="content"></div>
            </div>
        </>
    )
}

export default Sidebar;