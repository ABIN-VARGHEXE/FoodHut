import React from "react";
import "./Banner.css";
import { assets } from "../../utils";

const Banner = () => {
  return (
    <div>
      <div className="maincontiner-banner" id="Mobile-App">
        <div className="textcontiner-banner">
          <h1>
            It’s Now <span className="word-colour-1">More Easy</span> to{" "}
            <span className="word-colour-2">Order</span> by Our Mobile{" "}
            <span className="word-colour-1">App</span>
          </h1>
          <p className="desc-banner">
            All you need to do is downlode one of the best delivery apps, make a
            and most companies are opting for mobile app devlopment for food
            delivery
          </p>
          <div className="stores">
            <img src={assets.play_store} alt="" />
            <img src={assets.App_store} alt="" />
          </div>
        </div>
        <div className="imagecontainer-banner">
            <img src={assets.Banner_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
