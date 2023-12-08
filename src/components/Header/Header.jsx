import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { navLinks } from "../../constants";
import Bars from "../../assets/bars.png";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          className="bar-div"
        >
          <img src={Bars} alt="bar" className="bar" />
        </div>
      ) : (
        <ul className="header-menu">
          {navLinks.map((link) => (
            <li className="menu-item" key={link.id}>
              {link.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
