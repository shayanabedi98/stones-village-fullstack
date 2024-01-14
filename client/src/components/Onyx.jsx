import React from "react";

const Onyx = ({ inventoryList, handleClick }) => {
  return (
    <div className="onyx inventory-container">
      {inventoryList[0].onyx.brown.map((item) => (
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

      {inventoryList[0].onyx.green.map((item) => (
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

      {inventoryList[0].onyx.white.map((item) => (
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

      {inventoryList[0].onyx.red.map((item) => (
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

      {inventoryList[0].onyx.other.map((item) => (
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

export default Onyx;