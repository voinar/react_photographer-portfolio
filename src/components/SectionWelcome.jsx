import photographyData from "../data/data.json";
import { useState } from "react";
// import {
//   ReactCSSTransitionGroup,
//   TransitionGroup,
//   CSSTransitionGroup,
//   CSSTransition
// } from "react-transition-group";

import iconFacebook from "../img/icons/icon-facebook.svg";
import iconInstagram from "../img/icons/icon-instagram.svg";
import chevronUp from "../img/icons/chevron-up.svg";

import BrowseCoverImages from "./utils/BrowseCoverImages";

const SectionWelcome = () => {

//   const { coverImage, prevImage, nextImage } = BrowseCoverImages();

const [coverImage, setCoverImage] = useState(4);

const prevImage = () => {
  if (coverImage - 1 > 0) {
    setCoverImage(coverImage - 1);
  } else {
    setCoverImage(photographyData.images.length - 1);
    console.log("beginning of list. image index at 0");
  }
};

const nextImage = () => {
  if (coverImage + 1 < photographyData.images.length) {
    setCoverImage(coverImage + 1);
  } else {
    setCoverImage(0);
    console.log("end of list. image index at " + coverImage);
  }
};

function autoScroll() {
  setInterval(() => {
  nextImage()
  console.log('image index: ' + coverImage)
}, 5000);
}
autoScroll();


  return (
    <main>
      {/* <TransitionGroup> */}
      <div className="section__welcome">
        {/* <CSSTransition key={photographyData.images.url} timeout={300} className="transition"> */}
        <img
          className="cover__image"
          src={`${photographyData.images[coverImage].url}`}
          alt={`${photographyData.images[coverImage].description}`}
        />
        {/* </CSSTransition> */}
      </div>
      {/* </TransitionGroup> */}
      <div className="cover__icons">
        <div className="cover__icons__row-container">
          <div className="cover__icons__social">
            <img src={iconFacebook}></img>
          </div>
          <div className="cover__icons__social">
            <img src={iconInstagram}></img>
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
