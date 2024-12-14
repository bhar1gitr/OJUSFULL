import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import image1 from "../assets/image1.JPG";
import image2 from "../assets/image2.JPG";
import image3 from "../assets/image3.JPG";
import image4 from "../assets/image4.JPG";

const images = [
  image1,
  image2,
  image3,
  image4
];


const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    const scrollGallery = () => {
      if (gallery) {
        if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
          gallery.scrollLeft = 0; // Reset to start
        } else {
          gallery.scrollBy({ left: 1, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(scrollGallery, 20); // Adjust speed as needed

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery">
        <img
          src="https://images.unsplash.com/photo-1455368109333-ebc686ad6c58?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1664528201657-378dbf6a4a91?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1516651000622-7f32fe80a57a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;






