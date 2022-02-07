import { useRef } from "react"
import React from 'react';
import './Gallery.css';
import { images } from "../../constants"
import { SubHeading } from '../../components';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"

const image = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = useRef()

  const scroll = (direction) => {
    const { current } = scrollRef;

    direction === "left" ? current.scrollLeft -= 300 : current.scrollLeft += 300

  }

  return (
    <div className="app__gallery flex__center">
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .</p>
        <button className="custom__button">View More</button>
      </div>

      <div className="app__gallery-images">

        <div className="app__gallery-images_container" ref={scrollRef}>
          {image.map((img, idx) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${idx + 1}`}>
              <img src={img} alt="gallery image" /> 
              <BsInstagram className="gallery__image-icon" /> 
            </div>
          ))}  
        </div> 
 
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery_arrow-icon" onClick={() => scroll("left")} />
          <BsArrowRightShort className="gallery_arrow-icon" onClick={() => scroll("right")} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
