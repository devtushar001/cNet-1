import React, { useContext, useEffect } from "react";
import { imageData } from '../../assets/dochakiData'
import './Navbar.css';
import { TShakyaContext } from "../../Context/TShakyContext";
const Navbar = () => {
    const { sidebar, setSidebar } = useContext(TShakyaContext);
    useEffect(() => {
        console.log(sidebar);
    }, [])
    return (
        <>
            <div className="navbar">
               {!sidebar? <img src={imageData.menu_icon} onClick={() => setSidebar(true)} alt="" />:  <img onClick={() => setSidebar(false)} src={imageData.close_icon} alt="" />} 
            </div>
            <div className="confict" style={{ height: '70px' }}></div>
        </>
    )
}

export default Navbar;