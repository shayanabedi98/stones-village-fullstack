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
import close from '../../public/close-svgrepo-com.png'

const Inventory = () => {
  const [show, setShow] = useState(false);
  const [showPic, setShowPic] = useState(false)
  const [windowY, setWindowY] = useState(window.scrollY);
  const [info, setInfo] = useState("");
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

  const handleClick = (obj) => {
    setShow(true);
    setInfo(obj);
  };

  const handleShowPic = () => {
    setShowPic(true)
  }

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
        <div className="show-pic">
          <div className="show-pic-card">
            <img src={info.src} onClick={handleShowPic} />
            <div className="show-pic-card-info">
              <p className="show-pic-card-info-tel">
                <span>For more information about this stone, give us a call at <a href="tel:+14372375062">437-237-5062</a>.</span>
              </p>
              <p>
                <span>Name:</span> {info.name}
              </p>
              <p>
                <span>Type:</span> {info.type}
              </p>
              <p>
                <span>Dimensions:</span> 0 x 0 x 0
              </p>
              <button className="close-show-pic" onClick={() => setShow(false)}>
              <img src={close} />
            </button>
            </div>
          </div>
        </div>
      )}

      { showPic && (
        <div onClick={() => setShowPic(false)} className="show-pic show-only-pic">
          <img src={info.src}  />
        </div>
      )}

      {windowY > 500 && (
        <button
          className="back-up"
          onClick={() =>
            setWindowY(window.scrollTo({ top: 300, behavior: "smooth" }))
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
