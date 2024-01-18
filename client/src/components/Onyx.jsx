import React from "react";

const Onyx = ({ inventoryList, handleClick }) => {
  return (
    <div className="onyx inventory-container">
      {inventoryList[0].onyx.brown.map((item) => (
        <div
          key={item.id}
          onClick={() =>
            handleClick({ src: item.src, name: item.name, type: item.type })
          }          className="inventory-item"
          style={{
            background: `url(${item.src})`,
            backgroundSize: "750px",
            backgroundPosition: "-100px -80px",
          }}
        ></div>
      ))}

      {inventoryList[0].onyx.green.map((item) => (
        <div
          key={item.id}
          onClick={() =>
            handleClick({ src: item.src, name: item.name, type: item.type })
          }          className="inventory-item"
          style={{
            background: `url(${item.src})`,
            backgroundSize: "750px",
            backgroundPosition: "-100px -80px",
          }}
        ></div>
      ))}

      {inventoryList[0].onyx.white.map((item) => (
        <div
          key={item.id}
          onClick={() =>
            handleClick({ src: item.src, name: item.name, type: item.type })
          }          className="inventory-item"
          style={{
            background: `url(${item.src})`,
            backgroundSize: "750px",
            backgroundPosition: "-100px -80px",
          }}
        ></div>
      ))}

      {inventoryList[0].onyx.red.map((item) => (
        <div
          key={item.id}
          onClick={() =>
            handleClick({ src: item.src, name: item.name, type: item.type })
          }          className="inventory-item"
          style={{
            background: `url(${item.src})`,
            backgroundSize: "750px",
            backgroundPosition: "-100px -80px",
          }}
        ></div>
      ))}

      {inventoryList[0].onyx.other.map((item) => (
        <div
          key={item.id}
          onClick={() =>
            handleClick({ src: item.src, name: item.name, type: item.type })
          }          className="inventory-item"
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
