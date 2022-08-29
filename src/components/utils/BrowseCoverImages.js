import { useState } from "react";
import photographyData from "../../data/data.json";

const BrowseCoverImages = () => {

  const [coverImage, setCoverImage] = useState(4);

  const prevImage = () => {
    if (coverImage - 1 > 0) {
      setCoverImage(coverImage - 1);
    } else {
      setCoverImage(photographyData.images.length - 1);
      // console.log("beginning of list. image index at 0");
    }
  };

  const nextImage = () => {
    if (coverImage + 1 < photographyData.images.length) {
      setCoverImage(coverImage + 1);
    } else {
      setCoverImage(0);
      // console.log("end of list. image index at " + coverImage);
    }
  };

  function autoScroll() {
    setInterval(() => {
      nextImage();
      // console.log("image index: " + coverImage);
    }, 5000);
  }

  return { coverImage, prevImage, nextImage, autoScroll };
};

export default BrowseCoverImages