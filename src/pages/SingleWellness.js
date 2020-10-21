import React, { Component } from "react";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

class SingleWellness extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageSlug: "",
      page: {},
      loading: true,
      error: false,
    };
  }

  //Function to get all the data for wellness
  getData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();

    return data.wellness;
  };

  //Get the single page data
  pageData = async () => {
    const data = await this.getData();
    let foundPage = data.find((item) => item.slug === this.state.pageSlug);

    foundPage
      ? this.setState({ page: foundPage })
      : this.setState({ error: true });
  };

  componentDidMount() {
    this.setState({ pageSlug: this.props.match.params.slug, loading: false });

    this.pageData();
  }

  toggleOpen = (e) => {
    document.querySelectorAll(".accordion-list").forEach((item) => {
      const h4 = item.children[0];
      if (h4 !== e.target && h4.classList.contains("open")) {
        h4.classList.remove("open");
      }
    });

    if (e.target.classList.contains("open")) {
      e.target.classList.remove("open");
    } else {
      e.target.classList.add("open");
    }
  };

  render() {
    const { page, error, loading } = this.state;
    const images = page.images;
    const singlePageInfo = page.singleItem;

    if (error) return <ErrorPage />;

    if (loading || !singlePageInfo)
      return (
        <div className="page-height">
          <Loading />
        </div>
      );

    return (
      <div className="page-height single-wellness">
        <div className="single-wellness-section-one">
          <div className="content">
            <h5>
              {page.title === "Sleep" || page.title === "Eat"
                ? `${page.title} with Paradise Dreamers`
                : page.title === "SPA"
                ? `Paradise Dreamer ${page.title}S`
                : page.title}
            </h5>
            <h2>{singlePageInfo.sectionOne.title}</h2>
            <p>{singlePageInfo.sectionOne.content}</p>
          </div>
          <div className="image">
            <img
              src={images[1].image}
              alt={images[1].alternative}
              className="img-responsive"
            />
          </div>
          <div className="other-image">
            <img
              src={images[2].image}
              alt={images[2].alternative}
              className="img-responsive"
            />
          </div>
        </div>
        <div className="single-wellness-section-two">
          <div className="image">
            <img
              src={images[3].image}
              alt={images[3].alternative}
              className="img-responsive"
            />
          </div>
          <div className="content">
            {singlePageInfo.sectionTwo.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="single-wellness-section-three">
          <h2>{singlePageInfo.sectionThree.title}</h2>
          {singlePageInfo.sectionThree.accordion ? (
            <div className="accordion">
              {singlePageInfo.sectionThree.accordion.map((item, index) => (
                <div className="accordion-list" key={index}>
                  <h4 className="title" onClick={this.toggleOpen}>
                    {item.title}
                  </h4>
                  <div>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default SingleWellness;
