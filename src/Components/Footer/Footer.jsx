import React from "react";
import "./Footer.css";
import { assets } from "../../utils";

const Footer = () => {
  return (
    <div>
    <div className="footer-main">
      <div className="footer-1">
        <h1>FoodHut</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="social-media">
          <img src={assets.Facebook} alt="" />
          <img src={assets.Instagram} alt="" />
          <img src={assets.Twitter} alt="" />
        </div>
      </div>
      <div className="footer-2">
        <h2>About Us</h2>
        <ul>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Company</li>
        </ul>
      </div>
      <div className="footer-3">
        <h2>Company</h2>
        <ul>
          <li>Partnership</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Sitemap</li>
        </ul>
      </div>
      <div className="footer-4">
        <h2>Get in touch</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="sreach">
          <input className="email-box" type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
    <div className="footer-date">
      <p>&copy; {new Date().getFullYear()} FoodHut. All rights reserved.</p>
    </div>
    </div>
  );
};

export default Footer;