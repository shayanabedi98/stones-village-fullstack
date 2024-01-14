import React from "react";

const Marble = ({ inventoryList, handleClick }) => {
  return (
    <div className="marble inventory-container">
      {inventoryList[2].marble.white.map((item) => (
        <div
          onClick={() => handleClick(item.src)}
          className="inventory-item"
          style={{
            background: `url(${item.src})`,
            backgroundSize: "750px",
            backgroundPosition: "-100px -130px",
          }}
        ></div>
      ))}

      {inventoryList[2].marble.grey.map((item) => (
        <div
          onClick={() => handleClick(item.src)}
          className="inventory-item"
          style={{
            background: `url(${item.src})`,
            backgroundSize: "750px",
            backgroundPosition: "-100px -80px",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Marble;