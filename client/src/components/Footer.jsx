import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear()

  return (
    <footer>
    <div class="navbar-menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/inventory">Inventory</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <p>Copyright © {year} Shayan Abedi, Stones Village Inc.</p>
    </div>
  </footer>
  )
}

export default Footer