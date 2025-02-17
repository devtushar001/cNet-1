import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/escomData";
import { EscomContext } from "../../Context/escomContext";
import { imageData } from "../../assets/dochakiData";

const Navbar = () => {
  const { navbar, setNavbar } = useContext(EscomContext);

  const reloadWebPage = () => {
    window.location.reload()
  };

  return (
    <>
      <div className="navbar">
        <div className="left">
          <div onClick={() => setNavbar(!navbar)} className="menu-icon">
            <img src={!navbar ? imageData.menu_icon : imageData.close_icon} alt="Menu Icon" />
            {!navbar ? <span>Menu</span> : <span>Close</span>}
          </div>
          {!navbar ?
            <>
             <Link to='/search-querry'><img src={imageData.search_icon} alt="Search Icon" /></Link> 
              <Link to='/contact-us'> <img src={imageData.location_icon} alt="Location Icon" /></Link>
            </>
            : ""}
        </div>
        <div className="right">
          <img onClick={reloadWebPage} src={assets.cNet} alt="Dochaki Logo" />
        </div>
      </div>
      <div style={{ height: '120px' }} className="conflict-setup">
      </div>
    </>
  );
};

export default Navbar;
