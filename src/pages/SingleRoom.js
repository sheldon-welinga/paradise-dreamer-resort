import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { StyledHero, ImageSlide } from "../components/Styled";
import { API_URL, IMG_URL } from "../configure";

let counter = 1;
const clientWidthSize = 100;

class SingleRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: {},
      roomSlug: this.props.match.params.slug,
      error: "",
      loading: true,
    };
  }

  //get data
  getRoomDetails = async () => {
    try {
      const response = await fetch(`${API_URL}/accomodation-rooms/get-rooms`);
      const data = await response.json();

      const singleRoom = data.find((room) => room.slug === this.state.roomSlug);

      if (!singleRoom) throw Error("Room not found");

      this.setState({
        room: singleRoom,
      });
    } catch (err) {
      this.setState({
        error: err.message,
      });
    }
  };

  sliderTransionend = (slide, images) => {
    if (images[counter].id) {
      slide.addEventListener("transitionend", () => {
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
      });
    } else {
      throw Error("An error occurred in image transitioning");
    }
  };

  imageSlider = (sign) => {
    const slide = document.querySelector(".image-slider");
    const sliderImages = [...document.querySelectorAll(".slide")];

    if (counter <= 0 || counter >= sliderImages.length - 1) return;

    slide.style.transition = "all .3s ease-in-out";
    if (sign === "prev") {
      counter--;
    } else if (sign === "next") {
      counter++;
    }

    slide.style.transform = `translateX(${-clientWidthSize * counter}%)`;
    this.sliderTransionend(slide, sliderImages);
  };

  componentDidMount() {
    this.getRoomDetails().catch((err) => {
      this.setState({
        error: err.message,
      });
    });

    this.setState({
      loading: false,
    });

    setInterval(() => {
      this.imageSlider("next");
    }, 5000);
  }

  render() {
    const { error, loading, room } = this.state;
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
        <StyledHero image={`${IMG_URL}${image}`} />
        {error ? (
          <div className="error">{error}</div>
        ) : loading ? (
          <Loading />
        ) : (
          <>
            <div className="single-room-content">
              <p>{content}</p>
              <Link to="/plan-your-stay" className="btn btn-default">
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
                    img={gallery ? `${IMG_URL}${gallery[2]}` : ""}
                  />
                  <ImageSlide
                    className="slide"
                    id="slide1"
                    img={gallery ? `${IMG_URL}${gallery[0]}` : ""}
                  />
                  <ImageSlide
                    className="slide"
                    id="slide2"
                    img={gallery ? `${IMG_URL}${gallery[1]}` : ""}
                  />
                  <ImageSlide
                    className="slide"
                    id="slide3"
                    img={gallery ? `${IMG_URL}${gallery[2]}` : ""}
                  />
                  <ImageSlide
                    className="slide"
                    id="firstClone"
                    img={gallery ? `${IMG_URL}${gallery[0]}` : ""}
                  />
                </div>
                <div className="btn-container">
                  <div
                    id="arrow-left"
                    className="arrow"
                    onClick={() => this.imageSlider("prev")}
                  ></div>
                  <div
                    id="arrow-right"
                    className="arrow"
                    onClick={() => this.imageSlider("next")}
                  ></div>
                </div>
              </div>
            </div>
            <div className="single-room-details">
              <h4>Details</h4>
              <div className="details">
                <div>
                  <h5>Beds</h5>
                  {description ? <p>{description}</p> : <Loading />}
                </div>
                <div>
                  <h5>Occupancy</h5>
                  {occupancy ? <p>{occupancy}</p> : <Loading />}
                </div>
                <div>
                  <h5>Size</h5>
                  {size ? <p>{size}</p> : <Loading />}
                </div>
                <div>
                  <h5>Bathroom</h5>
                  {bathroom ? <p>{bathroom}</p> : <Loading />}
                </div>
                <div>
                  <h5>Views</h5>
                  {views ? <p>{views}</p> : <Loading />}
                </div>
                <div>
                  <h5>Unique Features</h5>
                  {uniqueFeatures ? <p>{uniqueFeatures}</p> : <Loading />}
                </div>
              </div>
            </div>
            <div className="single-room-additional">
              <p>
                Additional charges apply for children aged 5 to 18 years in all
                Club Floor rooms and suites
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
          </>
        )}
      </div>
    );
  }
}

export default SingleRoom;
