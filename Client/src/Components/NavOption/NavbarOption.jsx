import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavbarOption.css';
import { EscomContext } from '../../Context/escomContext';
import { assets, blogsCategory, courseCategory, escomData, shopCategory } from '../../assets/escomData';

const NavbarOption = () => {
   const { setNavbar,
      blogCat,
      setBlogCat,
      courseCat,
      setCourseCat,
      shopCat,
      setShopCat } = useContext(EscomContext);

   useEffect(() => {
      console.log(blogCat);
   }, [blogCat]);

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
               <span><Link to='/blogs' onClick={() => { setNavbar(false); setBlogCat('All') }} className="no-style">Blogs</Link> </span>
               <ul className="dropdown-menu">
                  {blogsCategory.map((blogCat) => {
                     return (
                        <li key={blogCat._id}>
                           <Link
                              onClick={(e) => {
                                 setNavbar(false);
                                 setBlogCat(blogCat.name); // Use blogCat.name instead of e.target.value
                              }}
                              to={`/blogs`}
                              className="no-style"
                           >
                              {blogCat.name}
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </li>
            <li className="dropdown">
               <span><Link to='/shops' onClick={() => setNavbar(false)} className="no-style">Shop</Link> </span>
               <ul className="dropdown-menu">
                  {shopCategory.map((shopCatg) => {
                     return (
                        <li key={shopCatg._id}>
                           <Link onClick={() => setNavbar(false)} to={`/shops/${shopCatg._id}`} className="no-style">
                              {shopCatg.name}
                           </Link>
                        </li>
                     )
                  })}
               </ul>
            </li>

            <li className="dropdown">
               <Link onClick={() => setNavbar(false)} to='/projects' className='no-style'><span>Projects</span></Link>
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
