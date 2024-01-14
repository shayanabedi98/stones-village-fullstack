import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import gallery from "../../public/galleryImages";
import Footer from "./Footer";

const Gallery = () => {
  const bannerRef = useRef(null);
  const itemRefs = useRef(gallery.map(() => React.createRef()));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    itemRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
      itemRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="gallery-container">
        <div ref={bannerRef} className="hidden page-banner">
          <div className="page-banner-overlay">
            <h1 className="title">Gallery</h1>
            <h2>
              Our gallery is a curated exhibition of our proudest projects,
              continually refreshed to reflect our latest achievements.
            </h2>
          </div>
        </div>
        <div className="gallery-showcase">
          {gallery.map((item, index) => (
            <div
              ref={itemRefs.current[index]}
              key={index}
              className="hidden gallery-item"
            >
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
