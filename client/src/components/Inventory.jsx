import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Onyx from "./Onyx";
import Porcelain from "./Porcelain";
import Marble from "./Marble";
import Quartz from "./Quartz";
import inventoryList from "../../public/inventory";

const Inventory = () => {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState("");

  const handleClick = (src) => {
    setShow(true);
    setImg(src);
  };

  return (
    <div>
      <Navbar />
      <div className="page-banner">
        <div className="page-banner-overlay">
          <h1 className="title">Inventory</h1>
          <h2>
            Discover our diverse array of natural stones, neatly organized for
            easy selection to suit any design style.
          </h2>
        </div>
      </div>

      <div className="inventory">
        <h2 className="other-h2">Onyx</h2>

        <Onyx inventoryList={inventoryList} handleClick={handleClick} />

        <h2 className="other-h2">Porcelain</h2>

        <Porcelain inventoryList={inventoryList} handleClick={handleClick} />

        <h3 className="other-h2">Marble</h3>

        <Marble inventoryList={inventoryList} handleClick={handleClick} />

        <h2 className="other-h2">Quartz</h2>

        <Quartz inventoryList={inventoryList} handleClick={handleClick} />
      </div>

      {show && (
        <div onClick={() => setShow(false)} className="show-pic">
          <img src={img} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Inventory;
