import React, { useState } from 'react';
import './Navbar.css';
import Logo from './Logo.png';
import { useAuth0 } from '@auth0/auth0-react';


const Navbar = () => {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar flex items-center justify-between bg-gray-700 bg-opacity-70 p-2">
      <div className="logo flex items-center">
        <img src={Logo} alt="DataSense Logo" className="h-6 mr-2" />
        <a href="logo" className="relative right-12 sm:right-2 text-4xl sm:text-3xl">DataSense</a>
      </div>
      <div className=" absolute block sm:hidden text-white text-5xl cursor-pointer right-[8rem]" onClick={toggleSidebar}>
        &#9776;
      </div>
      <div className={`nav-links flex-col sm:flex-row sm:flex ${sidebarOpen ? 'flex' : 'hidden'} absolute sm:relative top-8 sm:top-auto bg-gray-700 bg-opacity-90 sm:bg-opacity-0 w-full sm:w-auto`}>
        <a className=' absolute text-1xl p-2 sm:p-2.9 sm:top-0.5 sm:left-[-110rem] ' href="dash_b">My Dashboard</a>
        <div className="dropdown relative group">
          <a href="#" className=" absolute text-1xl p-2 sm:p-2.9 top-10 sm:top-0.5 sm:left-[-90rem]  ">Learning Path &#9662;</a>
          <div className="dropdown-content absolute sm:left-[-90rem] hidden group-hover:block bg-gray-700 bg-opacity-80 w-64 mt-1 sm:mt-12 rounded-lg">
            <a href="#" className="block p-2 hover:bg-gray-600">AI LEARNING PATH</a>
            <a href="#" className="block p-2 hover:bg-gray-600">CUSTOMIZED LEARNING PATH</a>
          </div>
        </div>
        <div className="dropdown relative group">
          <a href="#" className=" absolute text-1xl p-2 sm:p-2.9  top-20 sm:top-0.5 sm:left-[-69.4rem]">Explore &#9662;</a>
          <div className="dropdown-content absolute sm:left-[-69.4rem] hidden group-hover:block bg-gray-700 bg-opacity-80 w-64 mt-1 sm:mt-12 rounded-lg">
            <a href="#" className="block p-2 hover:bg-gray-600">RESOURCES</a>
            <a href="#" className="block p-2 hover:bg-gray-600">SUPPORT</a>
            <a href="#" className="block p-2 hover:bg-gray-600">COMPANY</a>
          </div>
        </div>
        <div className="dropdown relative group">
          <a href="#" className=" absolute text-1xl p-2 sm:p-2.9  top-20 sm:top-0.5 sm:left-[-22rem]">Socials &#9662;</a>
          <div className="dropdown-content absolute sm:left-[-22rem] hidden group-hover:block bg-gray-700 bg-opacity-70 w-64 mt-1 sm:mt-12 rounded-lg">
            <a href="https://www.facebook.com/profile.php?id=61550202884240&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="block p-2 hover:bg-gray-600">FACEBOOK</a>
            <a href="https://www.linkedin.com/company/data-sense-lms/?viewAsMember=true&utm_source=share&utm_medium=ios_app&utm_name=iossmf&utm_content=profile" target="_blank" rel="noopener noreferrer"  className="block p-2 hover:bg-gray-600">LINKEDIN</a>
            <a href="https://www.youtube.com/@Senseofdata" target="_blank" rel="noopener noreferrer" className="block p-2 hover:bg-gray-600">YOUTUBE</a>
            <a href="https://www.instagram.com/senseofdata/?utm_source=share&utm_medium=ios_app&utm_name=iossmf&utm_content=profile" target="_blank" rel="noopener noreferrer" className="block p-2 hover:bg-gray-600">INSTAGRAM</a>
          </div>
        </div>

        <a href="price" className=" absolute text-1xl p-2 sm:p-2.9  top-20 sm:top-0.5 sm:left-[-53rem]">Pricing</a>
        <a href="cont" className=" absolute text-1xl p-2 sm:p-2.9 sm:top-0.5 sm:left-[-39rem]">Contact Us</a>
        <div className="right-buttons flex flex-col sm:flex-row items-center">
          {isAuthenticated ? (
            <>
              <span className="user-name text-xl p-2 sm:p-0">{user.name}</span>
              <a className="logout bg-gray-600 text-white p-2 rounded-lg mt-2 sm:mt-0 sm:ml-4 cursor-pointer" onClick={() => logout({ returnTo: window.location.origin })}>Log out</a>
            </>
          ) : (
            <>
              <a className="login bg-transparent border border-gray-500 text-white p-2 rounded-lg mt-2 sm:mt-0 sm:ml-4 cursor-pointer" onClick={loginWithPopup}>Log in</a>
              <a className="signup bg-gray-600 text-white p-2 rounded-lg mt-2 sm:mt-0 sm:ml-4 cursor-pointer" onClick={loginWithPopup}>Sign up</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
