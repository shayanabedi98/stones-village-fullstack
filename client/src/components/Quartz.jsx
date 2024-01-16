import React from "react";

const Quartz = ({ inventoryList, handleClick }) => {
  return (
    <div className="quartz inventory-container">
      {inventoryList[3].quartz.white.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item.src)}
          className="inventory-item"
          style={{
            background: `url(${item.src})`,
            backgroundSize: "860px",
            backgroundPosition: "-100px -90px",
          }}
        ></div>
      ))}

      {inventoryList[3].quartz.grey.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item.src)}
          className="inventory-item"
          style={{
            background: `url(${item.src})`,
            backgroundSize: "750px",
            backgroundPosition: "-100px -80px",
          }}
        ></div>
      ))}

      {inventoryList[3].quartz.black.map((item) => (
        <div
          key={item.id}
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

export default Quartz;
