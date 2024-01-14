import React from "react";

const Porcelain = ({ inventoryList, handleClick }) => {
  return (
    <div className="porcelain inventory-container">
      {inventoryList[1].porcelain.white.map((item) => (
        <div
          onClick={() => handleClick(item.src)}
          className="inventory-item"
          style={{
            background: `url(${item.src})`,
            backgroundSize: "750px",
            backgroundPosition: "-60px -50px",
          }}
        ></div>
      ))}
      {inventoryList[1].porcelain.dark.map((item) => (
        <div
          onClick={() => handleClick(item.src)}
          className="inventory-item"
          style={{
            background: `url(${item.src})`,
            backgroundSize: "750px",
            backgroundPosition: "-60px -50px",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Porcelain;