import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../utils";
import { Link } from "react-router-dom";

const Navbar = ({SetLogin}) => {
  const [menu, setMenu] = useState("Home");

  return (
    <header>
      <nav>
        <img className="logo" src={assets.Logo} alt="Logo" />

        <ul className="items">
          <Link to='/'
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
          <a href='#explore-menu'
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </a>
          <a href='#Mobile-App'
            onClick={() => setMenu("Mobile App")}
            className={menu === "Mobile App" ? "active" : ""}
          >
            Mobile App
          </a>
          <a href='#Contact'
            onClick={() => setMenu("Support")}
            className={menu === "Support" ? "active" : ""}
          >
            Support
          </a>
        </ul>

        <div className="right-nav">
          <div className="search">
          <img src={assets.Sreach} alt="Sreach" />
          </div>
            <div className="basket">
              <img src={assets.Basket} alt="Basket" />
                <div className="notf"></div>
            </div>
            <div className="hh">
              <img onClick={()=>SetLogin(true)} src={assets.Account} alt="Account" />  
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
