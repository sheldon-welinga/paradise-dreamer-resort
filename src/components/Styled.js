import styled from "styled-components";
import defaultImg from "../accomodation-1.jpg";
import defaultImgSlider from "../gallery-default.jpg";

const StyledHero = styled.div`
  min-height: 50vh;
  background: url(${(props) => (props.image ? props.image : defaultImg)})
    center/cover no-repeat;
  object-fit: cover;
  position: relative;

  .overlay {
    background-color: rgba(0, 0, 0, 0.4);
    min-height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h4,
    p {
      font-family: "Playfair Display", Arial, Helvetica, sans-serif;
      font-size: 2rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #fff;
      text-align: center;
    }

    p {
      font-size: 1.2rem;
      margin-top: 1rem;
    }

    @media screen and (max-width: 668px) {
      h4 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;

const ImageSlide = styled.div`
  background: url(${(props) => (props.img ? props.img : defaultImgSlider)})
    center/cover no-repeat;
  min-width: 100%;
  width: 100%;
  min-height: 40vh;
`;

const ImageWrapper = styled.div`
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  height: ${(props) => (props.height ? props.height : "35vh")};
  position: relative;
  transition: all 0.3s ease-in-out;
`;

const PropertyOtherImage = styled.div`
  min-height: 20vh;
  max-width: 200px;
  width: 100%;
  background: url(${(props) => (props.image ? props.image : defaultImg)})
    center/cover no-repeat;
  object-fit: cover;
  position: relative;
`;

const StyledHotelHero = styled.div`
  min-height: 60vh;
  background: url(${(props) => (props.image ? props.image : defaultImg)})
    center/cover no-repeat;
  object-fit: cover;
  position: relative;

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    min-height: 60vh;
    width: 100%;
    position: relative;

    display: flex;
    align-items: baseline;
    justify-content: left;
    /* flex-direction: column; */

    > div {
      bottom: 2rem;
      left: 2rem;
      position: absolute;
    }

    .listing-header-top {
      padding: 1rem 0;
      display: flex;
      align-items: baseline;
      text-transform: uppercase;
    }

    .listing-header-top p,
    .listing-header-top h2 {
      color: #ffffff;
      font-family: "Playfair Display", Arial, Helvetica, sans-serif;
      font-size: 1.7rem;
      letter-spacing: 1px;
      font-weight: 600;
    }

    .listing-header-top p {
      font-size: 0.9rem;
      margin-left: 5px;
      font-weight: normal;
    }

    .btn {
      cursor: pointer;
    }

    .book-info-extra {
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-weight: 500;
      color: #860d0d;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }

    .book-info-extra .link {
      margin-left: 5px;
      display: inline-block;
      text-decoration: underline;
      color: #860d0d;
      cursor: pointer;
      font-size: 0.9rem;
    }
  }
`;

export {
  StyledHero,
  ImageSlide,
  ImageWrapper,
  PropertyOtherImage,
  StyledHotelHero,
};
