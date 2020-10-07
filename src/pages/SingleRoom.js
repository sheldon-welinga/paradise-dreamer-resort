import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledHero, ImageSlide } from "../components/Styled";
import ErrorPage from "./ErrorPage";

const SingleRoom = (props) => {
  const [room, setRoom] = useState({});
  const roomSlug = props.match.params.slug;
  let counter = 1;
  const clientWidthSize = 100;

  const sliderTransionend = (slide, images) => {
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

  const imageSlider = useCallback(() => {
    const sliderImages = [...document.querySelectorAll(".slide")];
    const slide = document.querySelector(".image-slider");
    slide.style.transition = "all .3s ease-in-out";
    slide.style.transform = `translateX(${-clientWidthSize * counter}%)`;
    sliderTransionend(slide, sliderImages);

    setInterval(() => {
      counter++;
      slide.style.transition = "all .3s ease-in-out";
      slide.style.transform = `translateX(${-clientWidthSize * counter}%)`;
      sliderTransionend(slide, sliderImages);
    }, 3000);
  }, [sliderTransionend, counter]);

  const handleNextSlide = () => {
    const slide = document.querySelector(".image-slider");
    const sliderImages = [...document.querySelectorAll(".slide")];
    if (counter >= sliderImages.length - 1) return;

    slide.style.transition = "all .3s ease-in-out";
    counter++;
    slide.style.transform = `translateX(${-clientWidthSize * counter}%)`;
    sliderTransionend(slide, sliderImages);
  };

  const handlePrevSlide = () => {
    const slide = document.querySelector(".image-slider");
    const sliderImages = [...document.querySelectorAll(".slide")];
    if (counter <= 0) return;
    slide.style.transition = "all .3s ease-in-out";
    counter--;

    slide.style.transform = `translateX(${-clientWidthSize * counter}%)`;
    sliderTransionend(slide, sliderImages);
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
  }, [roomSlug]);

  if (!room) return <ErrorPage />;

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
    type,
    slug,
  } = room;
  // console.log(gallery);

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
        <div className="gallery-slider-container">
          <div className="image-slider">
            <ImageSlide
              className="slide slide3"
              id="lastClone"
              img={gallery ? gallery[2] : ""}
            />
            <ImageSlide
              className="slide"
              id="slide1"
              img={gallery ? gallery[0] : ""}
            />
            <ImageSlide
              className="slide"
              id="slide2"
              img={gallery ? gallery[1] : ""}
            />
            <ImageSlide
              className="slide"
              id="slide3"
              img={gallery ? gallery[2] : ""}
            />
            <ImageSlide
              className="slide"
              id="firstClone"
              img={gallery ? gallery[0] : ""}
            />
          </div>
          <div className="btn-container">
            <div
              id="arrow-left"
              className="arrow"
              onClick={handlePrevSlide}
            ></div>
            <div
              id="arrow-right"
              className="arrow"
              onClick={handleNextSlide}
            ></div>
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
        <Link
          to={`/accomodation/${type}/${slug}/amenities`}
          className="btn btn-primary"
        >
          Amenities
        </Link>
      </div>
      <div className="single-room-contact">
        <p>We can help you with any questions or information.</p>
        <Link to="/contact" className="btn btn-default">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default SingleRoom;
