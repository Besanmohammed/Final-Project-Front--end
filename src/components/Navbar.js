import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../Images/Logo-Edusion.png';
function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className={`Navbar ${open ? "OpenMenu" : ""}`}>
      <div className="LogaMenu">
      <div className="Logo"><img src={Logo} alt="Logo"/></div>
      <div className="Menu" onClick={() => setOpen(!open)}>
          <i class='bx bx-menu'></i>
        </div>
      </div>

      <ul className={`NavLinks ${open ? "Open" : ""}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/about-us" onClick={handleLinkClick}>About Us</Link></li>
        <li><Link to="/courses" onClick={handleLinkClick}>Courses</Link></li>
        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
      </ul>

      <div className="IconBtn">
        <div className="ContainIcons">
          <button className="ButtonIcon"><i class='bx bx-search' undefined ></i></button>
        <button className="ButtonIcon CartBtn">
          <i class='bx bx-cart-alt'></i>
          <span className="CartValue">0</span>
        </button>
        </div>
        <div className="ContainRegidter">
          <button className="LoginBtn"><span>Login</span></button>
        <button className="SignupBtn">Sign Up</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
