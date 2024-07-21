import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../utils";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
const ExploreMenu = ({ category, SetCategory }) => {
  return (
    <div>
      <div className="explore-menu" id="explore-menu">
        <h1>
          {" "}
          <span className="word-colour-1"> Menu </span> That{" "}
          <span className="word-colour-2"> Always </span> Makes You Fall In{" "}
          <span className="word-colour-1"> Love </span>{" "}
        </h1>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                key={index}
                className="explore-menu-list-item"
                onClick={() =>
                  SetCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
              >
                <p
                  className={`item ${
                    category === item.menu_name ? "active" : ""
                  }`}
                >
                  {item.menu_name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="displayblock">
        <FoodDisplay category={category} />
      </div>
    </div>
  );
};

export default ExploreMenu;
