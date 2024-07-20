import React from "react";
import "./Services.css";
import { assets } from "../../utils";

const Services = () => {
  return (
    <div>
      <div className="maincontiner">
        <div className="imagecontainer">
          <img src={assets.Services} alt="" />
        </div>
        <div className="textcontiner">
          <h1>
            We are <span className="word-colour-1">more</span> than{" "}
            <span className="word-colour-2">multiple</span> service
          </h1>
          <p className="desc">
            This is a type of resturent which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes frome the rench word meaning food
          </p>
          <div className="list-items">
            <div className="list-1">
              <img src={assets.fullday} alt="" />
              <p>24/7 Service</p>
            </div>
            <div className="list-2">
              <img src={assets.booking} alt="" />
              <p>Booking</p>
            </div>
            <div className="list-3">
              <img src={assets.online_support} alt="" />
              <p>Support</p>
            </div>
            <div className="list-4">
              <img src={assets.online_support} alt="" />
              <p>Pre-Reservation</p>
            </div>
            <div className="list-5">
              <img src={assets.booking} alt="" />
              <p>Super Chef</p>
            </div>
            <div className="list-6">
              <img src={assets.fullday} alt="" />
              <p>Online support</p>
            </div>
          </div>
          <button className="service-btn">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
