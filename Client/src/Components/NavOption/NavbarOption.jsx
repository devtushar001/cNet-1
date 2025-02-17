import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavbarOption.css';
import { EscomContext } from '../../Context/escomContext';
import { courseCategory, escomData } from '../../assets/escomData';

const NavbarOption = () => {
   const { setNavbar } = useContext(EscomContext);

   return (
      <div className="navbar-option">
         <ul className="menu-item">
            <li><Link onClick={() => setNavbar(false)} to="/" className="no-style">Home</Link></li>

            <li className="dropdown">
               <Link onClick={() => setNavbar(false)} to="/courses" className="no-style">Courses</Link>
               <ul className="dropdown-menu">
                  {courseCategory.map((item) => (
                     <li key={item._id}>
                        <Link onClick={() => setNavbar(false)} to={`/courses/${item._id}`} className="no-style">
                           {item.name}
                        </Link>
                     </li>
                  ))}
               </ul>
            </li>

            <li className="dropdown">
               <span>Blogs</span>
               <ul className="dropdown-menu">
                  <li>Technology</li>
                  <li>Courses</li>
                  <li>Programming</li>
               </ul>
            </li>

            <li className="dropdown">
               <span>Shop</span>
               <ul className="dropdown-menu">
                  <li>Course One</li>
                  <li>Course Two</li>
               </ul>
            </li>

            <li className="dropdown">
               <span>Projects</span>
               <ul className="dropdown-menu">
                  {escomData.map((item, i) => {
                     return (
                        <li key={item._id}>
                        <Link onClick={() => setNavbar(false)} to={`/projects/${item._id}`} className="no-style">
                           {item.name}
                        </Link>
                     </li>
                     )
                  })}
               </ul>
            </li>

            <li><Link onClick={() => setNavbar(false)} to="/videos" className="no-style">Videos</Link></li>
            <li><Link onClick={() => setNavbar(false)} to="/hire-me" className="no-style">Hire me</Link></li>
            <li><Link onClick={() => setNavbar(false)} to="/about-me" className="no-style">About me</Link></li>
         </ul>
      </div>
   );
};

export default NavbarOption;
