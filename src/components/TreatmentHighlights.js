import React from "react";
import { IMG_URL } from "../configure";

const TreatmentHighlights = () => {
  let counter = 0,
    clientWidthSize = 100;

  const handlePrevSlide = () => {
    const slider = document.getElementById("treatment-slider");
    const slides = document.querySelectorAll(".treatment-slide");

    slider.style.transition = "all .3s ease-in-out";
    counter--;

    if (counter < 0) {
      counter = slides.length - 1;
    }

    slider.style.transform = `translateX(${-clientWidthSize * counter}%)`;
  };

  const handleNextSlide = () => {
    const slider = document.getElementById("treatment-slider");
    const slides = document.querySelectorAll(".treatment-slide");

    slider.style.transition = "all .3s ease-in-out";
    counter++;

    if (counter > slides.length - 1) {
      counter = 0;
    }

    slider.style.transform = `translateX(${-clientWidthSize * counter}%)`;
  };

  return (
    <div className="treatment-container">
      <div className="treatment-slider" id="treatment-slider">
        {/* slide 1 */}
        <div className="treatment-slide">
          <div className="image">
            <img
              src={`${IMG_URL}/images/treatment-1.jpg`}
              alt="woman hair massage and treatment"
              className="img-responsive"
            />
          </div>
          <div className="content">
            <h3>Paradise Special Facial</h3>
            <p>
              Cleanse and refresh your skin with this locally-inspired facial,
              which uses natural ingredients such as figs, almond powder and
              warm honey. A hair mask and scalp massage complete this expereince
              that is ideal for all skin types
            </p>
          </div>
        </div>
        {/* ----end of slide1--- */}
        {/* slide 2 */}
        <div className="treatment-slide">
          <div className="image">
            <img
              src={`${IMG_URL}/images/treatment-2.jpg`}
              alt="room with bathtab"
              className="img-responsive"
            />
          </div>
          <div className="content">
            <h3>Traditional Prince Hammam</h3>
            <p>
              This traditional treatment including a warm herbal steam, body
              wash with a black soap and gentle exfoliation followed by the
              application of purifying rasoul clay enriched with seven fragrant
              herbs is focused on cleansing and refreshing. After rinsing, body
              milk is applied, leaving your skin supple and enriched.
            </p>
          </div>
        </div>
        {/* --end of slide2--*/}
        {/* ----slide 3------ */}
        <div className="treatment-slide">
          <div className="image">
            <img
              src={`${IMG_URL}/images/treatment-3.jpg`}
              alt="man with bowl"
              className="img-responsive"
            />
          </div>
          <div className="content">
            <h3>Wonders of Paradise</h3>
            <p>
              This locally-inspired cleansing journey begins with a warm
              sea-salt bath steeped in fresh mint and with a body scrub made
              from local nourishing dates, honey and almond powder. It continues
              with the Arabian body rasoul which has slimming and purifying
              properties to leave the skin revitalized, then concludes with a
              dainage massage.
            </p>
          </div>
        </div>

        {/* -----end of slide3--- */}
        {/* ----slide 4------ */}
        <div className="treatment-slide">
          <div className="image">
            <img
              src={`${IMG_URL}/images/treatment-4.jpg`}
              alt="room with relaxing beds"
              className="img-responsive"
            />
          </div>
          <div className="content">
            <h3>Jet Lag Recovery</h3>
            <p>
              Revive circulation, release muscle tension and reset the internal
              clock with a full body massage using exclusively blended
              aromatherapy oils, followed by a head massage and calming herbal
              tea.
            </p>
          </div>
        </div>

        {/* -----end of slide4--- */}
      </div>
      <div className="btn-container">
        <div id="arrow-left" className="arrow" onClick={handlePrevSlide}></div>
        <div id="arrow-right" className="arrow" onClick={handleNextSlide}></div>
      </div>
    </div>
  );
};

export default TreatmentHighlights;
