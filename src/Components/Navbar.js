import { Link } from "react-router-dom";
import "./Navbar.css";
// import { FaBars } from "react-icons/fa";
// import {ImCross} from 'react-icons/im'
// import { useState } from "react";

const Navbar = () => {
  //   const [mobile, setMobile] = useState(false);

  return (
    // <nav className="navbar">
    //     <h3 className="logo">Logo</h3>

    //     <ul className= {mobile? "nav-link-mobile": "nav-link"} onClick={() =>setMobile(false)}>
    //       <Link to="/">
    //         <li>Home</li>
    //       </Link>
    //       <Link to="/about">
    //         <li>About</li>
    //       </Link>
    //       <Link to="/skills">
    //         <li>Skills</li>
    //       </Link>
    //       <Link to="/services">
    //         <li>Services</li>
    //       </Link>
    //       <Link to="/contact">
    //         <li>Contact</li>
    //       </Link>
    //     </ul>
    //     <button className="mobile-menu-icon" onClick={()=>setMobile(!mobile)}>
    //       {mobile ? <ImCross /> : <FaBars />}
    //     </button>
    // </nav>

    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-white-900 fixed w-full z-20 top-0 left-0 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/">
          <img src="PHILSTEPS LOGO.png" alt="PhilStep-Logo" className="logo1" />
        </Link>
        <div className="flex md:order-2"></div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="nav flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-gray-700">
            <Link to="/" className="Home">
              <p className="block text-black font-semibold rounded hover:bg-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Home
              </p>
            </Link>
            <li>
              <Link to="About" className="About">
                <p className="block text-black font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link to="Services" className="Services">
                <p className="block text-black font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Services
                </p>
              </Link>
            </li>
            <li>
              <Link to="Contact" className="Contact">
                <p className="block text-black font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Contact
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
