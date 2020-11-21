import React, { Component } from "react";
import Loading from "../components/Loading";
import { API_URL, IMG_URL } from "../configure";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      gallery: [],
      featuredGallery: [],
      featuredClass: this.props.featuredClass,
    };
  }

  //fetch data from database/API
  fetchData = async () => {
    const response = await fetch(`${API_URL}/gallery/`);
    const data = await response.json();

    return data;
  };

  //handle button click
  handleClick = async (e, allBtns) => {
    await e.preventDefault();

    await allBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    await e.target.classList.add("active");

    await this.filterData(e.target.id);
  };

  //filter data and update the state
  filterData = async (slug) => {
    const data = await this.fetchData();
    let filteredGallery = [];

    if (this.state.featuredClass) {
      if (slug !== "all") {
        filteredGallery = data.filter(
          (item) => item.featured && item.type === slug
        );
      } else {
        filteredGallery = data.filter((item) => item.featured);
      }

      this.setState({
        featuredGallery: filteredGallery,
      });
    } else {
      if (slug !== "all") {
        filteredGallery = data.filter((item) => item.type === slug);
      } else {
        filteredGallery = data;
      }

      this.setState({
        gallery: filteredGallery,
      });
    }
  };

  componentDidMount() {
    const allBtns = [...document.querySelectorAll(".gallery-header p")];

    allBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => this.handleClick(e, allBtns))
    );

    if (this.state.featuredClass) {
      this.fetchData().then((data) => {
        this.setState({
          featuredGallery: data.filter((item) => item.featured),
          loading: false,
        });
      });
    } else {
      this.fetchData().then((data) => {
        this.setState({
          gallery: data,
          loading: false,
        });
      });
    }
  }

  render() {
    const { gallery, featuredClass, featuredGallery, loading } = this.state;

    return (
      <div className="gallery">
        <div className="gallery-header">
          <p className="active" id="all">
            All
          </p>
          <p id="prince-spa">Prince Spa</p>
          <p id="rooms-and-suites">Rooms &amp; Suites</p>
          <p id="dining">Dining</p>
          <p id="conference">Conference</p>
          <p id="reception">Reception</p>
          <p id="swimming-pool">Swimming Pool</p>
          <p id="the-hotel">The Hotel</p>
        </div>
        <div
          className={featuredClass ? "gallery-body featured" : "gallery-body"}
        >
          {loading ? (
            <Loading />
          ) : featuredClass ? (
            featuredGallery.map((item, index) => (
              <div className="single-gallery" key={index}>
                <img
                  src={`${IMG_URL}${item.image}`}
                  alt={item.title}
                  className="img-responsive"
                />
                <p>
                  <span>{item.title}</span>
                </p>
              </div>
            ))
          ) : (
            gallery.map((item, index) => (
              <div className="single-gallery" key={index}>
                <img
                  src={`${IMG_URL}${item.image}`}
                  alt={item.title}
                  className="img-responsive"
                />
                <p>
                  <span>{item.title}</span>
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Gallery;
