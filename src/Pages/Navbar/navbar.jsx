import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.jpg";
import "./navbar.css";
import { IoIosArrowDropdown } from "react-icons/io";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <Link to="/" className="navbar-logo">
            <img src={Logo} alt="This is the Logo" />
          </Link>
        </div>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="About">About</Link>
          <div className="dropdown">
          {/* <Link to="Projects">Projects</Link>
           <span className="amahan dropdown-toggle" onClick={toggleDropdown}><IoIosArrowDropdown /></span> */}
            <a href="#projects" className="dropdown-toggle" onClick={toggleDropdown}>
              Projects
            </a>
            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <Link to="DPaintings">3D Paintings</Link>
              <Link to="Exoticfurnitures">Exotic Furniture</Link>
              <Link to="Furnitures">Furnitures</Link>
              <Link to="Residential">Residential</Link>
              <Link to="Turkishpaintings"> Turkish Paintings</Link>
            </div>
          </div>
          <Link to="Contact">Contact</Link>
        </nav>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
      {isDropdownOpen && <div className="overlay" onClick={toggleDropdown}></div>}
    </header>
  );
};

export default Navbar;


























// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "./logo.jpg";
// import "./navbar.css";

// import { IoIosArrowDropdown } from "react-icons/io";



// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <header className="navbar">
//       <div className="navbar-container">
//         <div className="brand">
//           <Link to="/" className="navbar-logo">
//             <img src={Logo} alt="This is the Logo" />
//           </Link>
//         </div>
//         <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
//           <Link to="/">Home</Link>
//           <Link to="About">About</Link>
//           <div className="dropdown">
//           <Link to="Projects">Projects</Link>
//            <span className="amahan dropdown-toggle" onClick={toggleDropdown}><IoIosArrowDropdown /></span>
//             {/* <a href="#projects" className="dropdown-toggle" onClick={toggleDropdown}>
//               Projects
//             </a> */}
//             <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
//               <Link to="DPaintings">3D Paintings</Link>
//               <Link to="Exoticfurnitures">Exotic Furniture</Link>
//               <Link to="Furnitures">Furnitures</Link>
//               <Link to="Residential">Residential</Link>
//               <Link to="Turkishpaintings"> Turkish Paintings</Link>
//             </div>
//           </div>
//           <Link to="Contact">Contact</Link>
//         </nav>
//         <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//           &#9776;
//         </div>
//       </div>
//       {isDropdownOpen && <div className="overlay" onClick={toggleDropdown}></div>}
//     </header>
//   );
// };

// export default Navbar;





