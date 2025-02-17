import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavbarOption.css';
import { EscomContext } from '../../Context/escomContext';
const NavbarOption = () => {
   const { setNavbar } = useContext(EscomContext);
   return (
      <>
         <div className="navbar-option">
            <ul className='menu-item'>
               <Link onClick={() => setNavbar(false)} to={"/"} className='no-style'><li>Home</li></Link>
               <Link onClick={() => setNavbar(false)} to={"/"} className='no-style'>
                  <Link onClick={() => setNavbar(false)} to={"/courses"} className='no-style'> <ul>Courses
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>JavaScript</li>
                     <li>Bootstrap</li>
                     <li>Tailwin</li>
                     <li>Node</li>
                     <li>Express</li>
                     <li>MongoDB</li>
                     <li>MongoDB</li>
                  </ul>
                  </Link>
               </Link>
               <Link onClick={() => setNavbar(false)} to={"/"} className='no-style'>
                  <ul>Blogs
                     <li>Technology</li>
                     <li>Courses</li>
                     <li>Courses</li>
                  </ul>
               </Link>
               <Link onClick={() => setNavbar(false)} to={"/"} className='no-style'>
                  <ul>Shop
                     <li>Course One</li>
                     <li>Course two</li>
                  </ul>
               </Link>
               <Link onClick={() => setNavbar(false)} to={"/"} className='no-style'>
                  <ul>Videos
                  </ul>
               </Link>
               <Link onClick={() => setNavbar(false)} to={"/"} className='no-style'>
                  <ul>Hire me
                  </ul>
               </Link>
               <Link onClick={() => setNavbar(false)} to={"/"} className='no-style'>
                  <ul>About me
                  </ul>
               </Link>
            </ul>
         </div>

      </>
   )
}

export default NavbarOption;