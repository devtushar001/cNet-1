import React from "react";
import { imageData } from '../../assets/dochakiData'
import './Navbar.css';
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <img src={imageData.menu_icon} alt="" />
            </div>
            <div className="confict" style={{ height: '70px' }}></div>
        </>
    )
}

export default Navbar;