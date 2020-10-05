import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledHero } from "../components/Styled";
import ErrorPage from "./ErrorPage";

const SingleRoom = (props) => {
  const [room, setRoom] = useState({});
  const roomSlug = props.match.params.slug;
  let counter = 1;

  const imageSlider = useCallback(() => {
    const carouselImages = [...document.querySelectorAll("#image-slide img")];
    const carouselSlide = document.getElementById("image-slide");

    // transitionCarouselSlide(carouselSlide, carouselImages);
    carouselSlide.style.left = `${-100 * counter}%`;

    setInterval(() => {
      counter++;
      if (counter >= carouselImages.length - 1) {
        counter = 1;
      }
      carouselSlide.style.left = `${-100 * counter}%`;
    }, 3000);
  }, []);

  // const transitionCarouselSlide = (slide, images) => {
  //   slide.addEventListener("transitionend", () => {
  //     if (images[counter].id === "lastClone") {
  //       slide.style.transition = "none";
  //       counter = images.length - 2;
  //       slide.style.left = `${-100 * counter}%`;
  //     }

  //     if (images[counter].id === "firstClone") {
  //       slide.style.transition = "none";
  //       counter = images.length - counter;
  //     }
  //   });
  // };

  const handleNextSlide = () => {
    const carouselImages = [...document.querySelectorAll("#image-slide img")];
    const carouselSlide = document.getElementById("image-slide");

    // if (counter >= carouselImages.length - 1) return;
    counter++;

    // transitionCarouselSlide(carouselSlide, carouselImages);
    if (counter >= carouselImages.length - 1) {
      counter = 1;
    }
    carouselSlide.style.left = `${-100 * counter}%`;
  };

  const handlePrevSlide = () => {
    const carouselImages = [...document.querySelectorAll("#image-slide img")];
    const carouselSlide = document.getElementById("image-slide");
    counter--;

    if (counter <= 1) {
      counter = carouselImages.length - 1;
    }
    carouselSlide.style.left = `${-100 * counter}%`;

    // transitionCarouselSlide(carouselSlide, carouselImages);
  };

  useEffect(() => {
    const getRoomDetails = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        const singleRoom = data.accomodation.find(
          (room) => room.slug === roomSlug
        );

        setRoom(singleRoom);
      } catch (err) {
        console.log(err);
      }
    };

    getRoomDetails();

    imageSlider();
  }, [roomSlug, imageSlider]);

  if (!room) return <ErrorPage />;
  // console.log(room);

  const {
    image,
    title,
    description,
    occupancy,
    size,
    bathroom,
    views,
    uniqueFeatures,
    content,
    gallery,
  } = room;

  return (
    <div className="page-height single-room">
      <div className="single-room-header">
        <h5>Accomodation</h5>
        <h3>{title}</h3>
        <Link to="/accomodation" className="btn btn-default">
          <i className="fa fa-long-arrow-left"></i>
          Back to Accomodation
        </Link>
      </div>
      <StyledHero image={image} />
      <div className="single-room-content">
        <p>{content}</p>
        <Link to="/" className="btn btn-default">
          Check Rates
        </Link>
      </div>
      <div className="single-room-gallery">
        <h3>Gallery</h3>
        <div className="single-room-gallery-slider-container">
          <div className="image-slide" id="image-slide">
            <img
              src={gallery ? gallery[2] : ""}
              alt=""
              className="slider-image"
              id="lastClone"
            />
            <img
              src={gallery ? gallery[0] : ""}
              alt=""
              className="slider-image"
            />
            <img
              src={gallery ? gallery[1] : ""}
              alt=""
              className="slider-image"
            />
            <img
              src={gallery ? gallery[2] : ""}
              alt=""
              className="slider-image"
            />
            <img
              src={gallery ? gallery[0] : ""}
              alt=""
              className="slider-image"
              id="firstClone"
            />
          </div>
          <div className="btn-container">
            <span id="prevBtn" className="arrow" onClick={handlePrevSlide}>
              Prev
            </span>
            <span id="nextBtn" className="arrow" onClick={handleNextSlide}>
              Next
            </span>
          </div>
        </div>
      </div>
      <div className="single-room-details">
        <h4>Details</h4>
        <div className="details">
          <div>
            <h5>Beds</h5>
            <p>{description}</p>
          </div>
          <div>
            <h5>Occupancy</h5>
            <p>{occupancy}</p>
          </div>
          <div>
            <h5>Size</h5>
            <p>{size}</p>
          </div>
          <div>
            <h5>Bathroom</h5>
            <p>{bathroom}</p>
          </div>
          <div>
            <h5>Views</h5>
            <p>{views}</p>
          </div>
          <div>
            <h5>Unique Features</h5>
            <p>{uniqueFeatures}</p>
          </div>
        </div>
      </div>
      <div className="single-room-additional">
        <p>
          Additional charges apply for children aged 5 to 18 years in all Club
          Floor rooms and suites
        </p>
        <Link to="/" className="btn btn-primary">
          Amenities
        </Link>
      </div>
      <div className="single-room-contact">
        <p>We can help you with any questions or information</p>
        <Link to="/contact" className="btn btn-default">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default SingleRoom;
