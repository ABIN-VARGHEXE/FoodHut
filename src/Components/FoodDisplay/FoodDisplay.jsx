import React, { useContext, useState, useEffect } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/Storecontext";
import Card from "../Cards/Cards";

const FoodDisplay = ({ category }) => {
  const { food_display_menu } = useContext(StoreContext);
  const [visibleItems, setVisibleItems] = useState(8);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setVisibleItems(8);
    setFilteredItems(category === "All" ? food_display_menu : food_display_menu.filter(item => item.category === category));
  }, [category, food_display_menu]);

  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 8);
  };

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-list">
      {filteredItems.slice(0, visibleItems).map((item, index) => (
        <Card key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
      ))}
      </div>
      <div className="explore-more-container">
      {visibleItems < filteredItems.length && (
        <button className="explore-more" onClick={loadMoreItems}>Explore More</button>
      )}
      </div>
    </div>
  );
};

export default FoodDisplay;