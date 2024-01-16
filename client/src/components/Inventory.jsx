import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Onyx from "./Onyx";
import Porcelain from "./Porcelain";
import Marble from "./Marble";
import Quartz from "./Quartz";
import Filter from "./Filter";
import inventoryList from "../../public/inventory";
import upArrow from "../../public/up.png";

const Inventory = () => {
  const [show, setShow] = useState(false);
  const [windowY, setWindowY] = useState(window.scrollY);
  const [img, setImg] = useState("");
  const [filter, setFilter] = useState({
    onyx: false,
    porcelain: false,
    marble: false,
    quartz: false,
    all: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      setWindowY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  });

  const handleClick = (src) => {
    setShow(true);
    setImg(src);
  };

  const handleFilter = (clicked) => {
    setFilter({
      onyx: clicked === "onyx",
      porcelain: clicked === "porcelain",
      marble: clicked === "marble",
      quartz: clicked === "quartz",
      all: clicked === "all",
    });
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

      <Filter filter={filter} handleFilter={handleFilter} />

      {filter.all && (
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
      )}

      {filter.onyx && (
        <div className="inventory">
          <h2 className="other-h2">Onyx</h2>
          <Onyx inventoryList={inventoryList} handleClick={handleClick} />
        </div>
      )}

      {filter.porcelain && (
        <div className="inventory">
          <h2 className="other-h2">Porcelain</h2>
          <Porcelain inventoryList={inventoryList} handleClick={handleClick} />
        </div>
      )}

      {filter.marble && (
        <div className="inventory">
          <h2 className="other-h2">Marble</h2>
          <Marble inventoryList={inventoryList} handleClick={handleClick} />
        </div>
      )}

      {filter.quartz && (
        <div className="inventory">
          <h2 className="other-h2">Quartz</h2>
          <Quartz inventoryList={inventoryList} handleClick={handleClick} />
        </div>
      )}

      {show && (
        <div onClick={() => setShow(false)} className="show-pic">
          <img src={img} />
        </div>
      )}

      {windowY > 500 && (
        <button
          className="back-up"
          onClick={() =>
            setWindowY(window.scrollTo({ top: 200, behavior: "smooth" }))
          }
        >
          <img src={upArrow} alt="" />
        </button>
      )}
      <Footer />
    </div>
  );
};

export default Inventory;
