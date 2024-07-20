import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/Storecontext";
import Card from "../Cards/Cards";

const FoodDisplay = ({ category }) => {
  const { food_display_menu } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <div className="food-display-list">
      {food_display_menu.map((item, index) => {
        if (category === "All" || category === item.category) {
          return <Card key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />;
        }
        return null;
      })}
      </div>
      
    </div>
  );
};

export default FoodDisplay;
