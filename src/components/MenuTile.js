// MenuItemTile.js
import React from "react";

const MenuItemTile = ({ name, price, description, image }) => {
  return (
    <div className="menu-item-tile">
      <div className="menu-item-info">
        <h3>{name}</h3>
        <p className="menu-item-desc">{description}</p>
        <p className="menu-item-price">₹{price / 100}</p>
        <button className="add-btn">ADD</button>
      </div>

      {image && <img className="menu-item-img" src={image} alt={name} />}
    </div>
  );
};

export default MenuItemTile;
