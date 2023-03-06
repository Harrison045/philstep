import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false)

  const changeColor = () =>{
    if(window.scrollY >= 100) {
      setColor(true)
    } else{
      setColor(false)
    }
  }


  window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <img src="PHILSTEPS LOGO.png" alt="philsteps" className="logo1"/>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">
            <p className="">Home</p>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <p className="">About</p>
          </Link>
        </li>
        <li className="text-white">
          <Link to="/services">
            <p className="">Services</p>
          </Link>
        </li>
        <li className="text-white">
          <Link to="/contact">
            <p className="">Contact</p>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={20} style={{ color: "#fff" }} /> : <FaBars size={20} style={{ color: "#fff" }} />}
      </div>
    </div>

    // <div className={classNames(scrollPosition > 0 ? 'shadow' : 'shadow-none', 'transition-shadow bg-white')}>
    //   <nav className=" nav  px-2 sm:px-4 py-2.5 dark:bg-dark-900 fixed w-full  top-0 left-0 dark:border-gray-600">
    //     <div className="container flex flex-wrap items-center justify-between mx-10">
    //       <Link to="/">
    //         <img
    //           src="PHILSTEPS LOGO.png"
    //           alt="PhilStep-Logo"
    //           className="logo1"
    //         />
    //       </Link>
    //       <div className="flex md:order-2"></div>
    //       <div
    //         className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    //         id=""
    //       >
    //         <ul className="nav1 flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-white-800 md:dark: dark:border-gray-700">
    //           <Link to="/" className="Home">
    //             <p className="block text-black font-semibold rounded hover:bg-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
    //               Home
    //             </p>
    //           </Link>
    //           <li>
    //             <Link to="About" className="About">
    //               <p className="block text-black font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
    //                 About
    //               </p>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="Services" className="Services">
    //               <p className="block text-black font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
    //                 Services
    //               </p>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="Contact" className="Contact">
    //               <p className="block text-black font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
    //                 Contact
    //               </p>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Navbar;
