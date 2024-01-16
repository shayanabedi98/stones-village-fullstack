import React from "react";
import cube from '../../../server/public/resources/sv-cube.png'
import name from '../../../server/public/resources/sv-name.png'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <img
        className="logo-cube"
        src={cube}
        alt="stones village logo"
      />
      <img
        className="logo-name"
        src={name}
        alt="stones village logo"
      />
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
      </div>
      <div className="footer-contact">
        <a href="mailto:info@stonesvillage.net">info@stonesvillage.net</a>
        <a href="https://maps.app.goo.gl/c4RnwW3tdTcgaGqE9">
          8111 Jane St Unit No. 9
        </a>
        <a href="tel:+14372375062">437-237-5062</a>
      </div>
      <p>Copyright © {year} Shayan Abedi, Stones Village Inc.</p>
    </footer>
  );
};

export default Footer;
