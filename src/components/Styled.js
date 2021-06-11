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

export { StyledHero, ImageSlide, ImageWrapper };
