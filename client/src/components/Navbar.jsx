import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [clickedMobile, setclickedMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // const [currentWindow, setCurrentWindow] = useState(window.location)

  const handleRelocate = () => {
    window.location = '/'
  }

  const handleClick = () => {
    setclickedMobile(!clickedMobile);
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [screenWidth, clickedMobile]);

  return (
    <div onChange={handleResize} className="navbar">
      <div className="logo">
        <img onClick={handleRelocate} id="logo-name" src="./resources/sv-name.png" alt="Company name" />
        <img onClick={handleRelocate} id="logo-cube" src="./resources/sv-cube.png" alt="Company logo" />
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/inventory">Inventory</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <div
          style={{
            display:
              screenWidth <= 900 ? (clickedMobile ? "none" : "grid") : "none",
          }}
          className="phone-menu-button"
        >
          <img
            onClick={handleClick}
            src="./resources/align-justify-svgrepo-com.png"
            alt="Menu Button"
          />
        </div>
        <div
          style={{
            display:
              screenWidth <= 900 ? (!clickedMobile ? "none" : "grid") : "none",
          }}
          className="close-navbar-menu-mobile"
        >
          <img
            onClick={handleClick}
            src="./resources/close-svgrepo-com.png"
            alt="Close menu button"
          />
        </div>
      </div>
      <div
        style={{
          display:
            screenWidth <= 900 ? (clickedMobile ? "flex" : "none") : "none",
        }}
        className="navbar-menu-mobile"
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/inventory">Inventory</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="navbar-links-mobile">
          <button id="tel">
            <a href="tel:+14372375062">
              <img
                src="./resources/icons8-phone-100.png"
                alt="Contact By Number"
              />
            </a>
          </button>
          <button id="instagram">
            <a target="_blank" href="https://www.instagram.com/stonesvillage/">
              <img src="./resources/iglogo.png" alt="Visit Instagram page" />
            </a>
          </button>
        </div>
      </div>

      <div className="navbar-links">
        <button id="instagram">
          <a target="_blank" href="https://www.instagram.com/stonesvillage/">
            <img src="./resources/iglogo.png" alt="Visit Instagram page" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
