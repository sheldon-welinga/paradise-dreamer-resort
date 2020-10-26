import React from "react";

const sliderTransionend = (slide, images, counter, clientWidthSize) => {
  slide.addEventListener("transitionend", () => {
    if (!images[counter].id) {
      return <div>Loading...</div>;
    } else {
      if (images[counter].id === "lastClone") {
        slide.style.transition = "none";
        counter = images.length - 2;
        slide.style.transform = `translateX(${-clientWidthSize * counter}%)`;
      }

      if (images[counter].id === "firstClone") {
        slide.style.transition = "none";
        counter = images.length - counter;
        slide.style.transform = `translateX(${-clientWidthSize * counter}%)`;
      }
    }
  });
};

export { sliderTransionend };
