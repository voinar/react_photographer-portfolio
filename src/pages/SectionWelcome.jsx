import photographyData from "../data/data.json";
// import { useState } from "react";

import iconFacebook from "../img/icons/icon-facebook.svg";
import iconInstagram from "../img/icons/icon-instagram.svg";
import chevronUp from "../img/icons/chevron-up.svg";

import BrowseCoverImages from "../components/utils/BrowseCoverImages";

const SectionWelcome = () => {
  const { coverImage, prevImage, nextImage } = BrowseCoverImages();

  // autoScroll();

  return (
    <main>
      <div className="section__welcome">
        <img
          className="cover__image"
          src={`${photographyData.images[coverImage].url}`}
          alt={`${photographyData.images[coverImage].description}`}
        />
        {/* {photographyData.images.map((images) => {
          return (<img
          className="cover__image"
          src={`${images.url}`}
          alt={`${images.description}`}
        />)
        })} */}
      </div>
      <div className="cover__icons">
        <div className="cover__icons__row-container">
          <div className="cover__icons__social">
            <img src={iconFacebook} alt="facebook" />
          </div>
          <div className="cover__icons__social">
            <img src={iconInstagram} alt="instagram" />
          </div>
        </div>
        <div className="cover__icons__row-container">
          <div className="cover__icons__nav--left" onClick={prevImage}>
            <img
              className="icon__chevron-left"
              src={chevronUp}
              alt="poprzednie zdjęcie"
            />
          </div>
          <div className="cover__icons__nav--right" onClick={nextImage}>
            <img
              className="icon__chevron-right"
              src={chevronUp}
              alt="następne zdjęcie"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SectionWelcome;
