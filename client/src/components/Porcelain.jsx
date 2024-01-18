import React from "react";

const Porcelain = ({ inventoryList, handleClick }) => {
  return (
    <div className="porcelain inventory-container">
      {inventoryList[1].porcelain.white.map((item) => (
        <div
          key={item.id}
          onClick={() =>
            handleClick({ src: item.src, name: item.name, type: item.type })
          }          className="inventory-item"
          style={{
            background: `url(${item.src})`,
            backgroundSize: "750px",
            backgroundPosition: "-60px -50px",
          }}
        ></div>
      ))}
      {inventoryList[1].porcelain.dark.map((item) => (
        <div
          key={item.id}
          onClick={() =>
            handleClick({ src: item.src, name: item.name, type: item.type })
          }          className="inventory-item"
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
