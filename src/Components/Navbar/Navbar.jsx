import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../utils";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <header>
      <nav>
        <img className="logo" src={assets.Logo} alt="Logo" />

        <ul className="items">
          <li
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("Mobile App")}
            className={menu === "Mobile App" ? "active" : ""}
          >
            Mobile App
          </li>
          <li
            onClick={() => setMenu("Support")}
            className={menu === "Support" ? "active" : ""}
          >
            Support
          </li>
        </ul>

        <div className="right-nav">
          <img src={assets.Sreach} alt="Sreach" />
            <div className="basket">
              <img src={assets.Basket} alt="Basket" />
                <div className="notf"></div>
            </div>
            <div className="hh">
              <img src={assets.Account} alt="Account" />  
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
