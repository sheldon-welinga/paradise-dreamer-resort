import React from "react";
import { Link } from "react-router-dom";
import SpaHeader from "../components/SpaHeader";
import { StyledHero } from "../components/Styled";
import TreatmentHighlights from "../components/TreatmentHighlights";

const SPA = () => {
  const toggleOpen = (e) => {
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

  return (
    <div className="page-height spa">
      <StyledHero image="/images/spa.jpg">
        <div className="overlay">
          <h4>Wellness &amp; Spa</h4>
          <p>Rejuvenate your senses</p>
        </div>
      </StyledHero>
      <div className="spa-body">
        <div className="spa-header-content">
          <p>
            Overlooking the turquoise blue waters of the Indian Ocean and
            surrounded by the beautiful and towering date palm trees and the
            refreshing cool breeze, true to the meaning of our name, Paradise
            Dreamer SPA offers luxurious relaxation experiences and wellness
            journeys designed to reconnect with your inner being is an oasis of
            serenity that reflects the soul of Africa.
          </p>
          <p>
            From holistic massages to rejuvenating body wrap, wrinle -reducing
            facials and pampering hail and nail care, to our clebration packages
            &amp; couple delights; Paradise Dreamer, is fully dedicated to
            improving quests quality of life and experiences and offers a
            holistic menu of all natural, results driven and soul soothing spa
            services.
          </p>
          <p>
            The spa is offering reputable product line for body and skin care
            Theravine &amp; Theranaka -SA, who are leading experts within Africa
            for over 13 years.
          </p>
        </div>
        <SpaHeader />
        {/*-------------Section One-------------------*/}
        <div className="spa-section-one">
          <div className="content">
            <h2>Smart tech that's all about you</h2>
            <p>
              We don't follow fads. This is about combining our smart tech (and
              super smart experts!) with what we know about you to personalize a
              spa treatment or design a program to your particular needs (and
              your desire to stay horizontal or incorporate some get up and go).
            </p>
            <Link to="/spa/personalized-wellness">
              Read more about personalized wellness
            </Link>
            <div className="accordion">
              <div className="accordion-list">
                <h4 className="title" onClick={toggleOpen}>
                  Wellness Screening
                </h4>
                <div>
                  <p>
                    This non-invasive analysis measures your key biomarkers and
                    helps our experts understand what your body really needs.
                    It's simple, its quick and the readings along with a
                    discussion about your lifestyle are used in design of a
                    treatment or a bespoke multi-day program specific to your
                    needs.
                  </p>
                  <Link
                    to="/spa/booking-inquiry?title=wellness+screening"
                    className="btn btn-primary"
                  >
                    Book a consultation
                  </Link>
                </div>
              </div>

              <div className="accordion-list">
                <h4 className="title" onClick={toggleOpen}>
                  Movement Efficiency Test
                </h4>
                <div>
                  <p>
                    We take gueswork out of working out with a system tat
                    intergrates sports science and cutting-edge technology and
                    helps our personal trainers look at your movement patterns
                    and identify areas of strength and weakness. Afterwards,
                    they design a workout plan that optimizes your training
                    performance and reduces the risk of injury and ensures that
                    your body is aligned.
                  </p>
                  <Link
                    to="/spa/booking-inquiry?title=movement+efficiency+test"
                    className="btn btn-primary"
                  >
                    Book a consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <img
              src="/images/spa-4.jpg"
              alt="woman sitted"
              className="img-responsive"
            />
          </div>
        </div>
        {/*----------------------End of Section One--------------------*/}

        {/*---------------------Section Two--------------------------*/}
        <div className="spa-section-two">
          <div className="image">
            <img
              src="/images/spa-5.jpg"
              alt="woman being massaged"
              className="img-responsive"
            />
          </div>
          <div className="content">
            <h2>SPA Facilities</h2>
            <ul>
              <li>Welcome lounge with a retail area</li>
              <li>Nine treatment rooms</li>
              <li>Relaxation room</li>
              <li>Two Arabian hammams</li>
              <li>
                Steam room, sauna and ice cave within male and female changing
                rooms
              </li>
              <li>Outdoor yoga pavilion</li>
              <li>Fitness center</li>
              <li>Alchemy Bar</li>
            </ul>
          </div>
        </div>
        <div className="spa-section-three">
          <h2>Treament Highlights</h2>
          <Link to="/spa/treatments">All treamments</Link>
          <TreatmentHighlights />
        </div>
        <div className="spa-section-four">
          <div className="content">
            <h2>Wellness &amp; Spa Experts</h2>
            <p>
              Experience a layered approach to wellness. Simply relax or go
              deeper and say hello to a whole new you. Skilled therapists and
              visiting practitioners guide you towards optimum well-being in
              step with your wellness goals
            </p>
            <Link to="/spa/visiting-practitioners-calendar">
              Visiting practitioners' calendar
            </Link>
            <div className="accordion">
              <div className="accordion-list">
                <h4 className="title" onClick={toggleOpen}>
                  Dr. Peeyush
                  <span>Ayurvedic Doctor</span>
                </h4>
                <div>
                  <p>
                    Dr. Peeyush is an ayurvedic doctor from Kerala and brings
                    over 10 years experience, having worked in various wellness
                    positions in the hospitality industry as well as in
                    hospitals in India, Maldivines and Georgia. He offers
                    personal consultations and his introductory group hatha and
                    therapeutic yoga sessions can relieve joint and back pain
                    and improve posture. He also teaches asanas, pranayama,
                    dhyana and yoga kriyas.
                  </p>
                </div>
              </div>
              <div className="accordion-list">
                <h4 className="title" onClick={toggleOpen}>
                  Luvuyo Mabusela
                  <span>Resident Fitness and Wellness Expert</span>
                </h4>
                <div>
                  <p>
                    A former professional cricketer and a keen sportsman. Luvuyo
                    holds a diploma in Exercise Science and Sports Conditioning
                    and is also a certified instructor in Pilates, yoga and
                    spinning. He worked on the world-famous Queen Mary 2 and
                    travelled the world from Singapore, Australia and Hong Kong
                    to Europe and the UAE. Luvuyo specializes in body posture,
                    rehabilitation, core training, weight loss and muscle gain
                    through using correct exercise personalized to specific
                    needs.
                  </p>
                </div>
              </div>
              <div className="accordion-list">
                <h4 className="title" onClick={toggleOpen}>
                  Arthur Stecca
                  <span>Resident Fitness Expert</span>
                </h4>
                <div>
                  <p>
                    Originally from Brazil, Arthur is our professional Fitness
                    Coach at the resort. A certified personal trainer in over 30
                    countries, Arthur has a wealth of experience in Italy,
                    Dubai, Maldivines, Kuwait and UK and has completed more than
                    5,000 hours of workouts for clients.
                  </p>
                  <p>
                    An expert in weight training and in teaching people how to
                    perform each exercise, Arthur possesses a successful track
                    record of evaluating a client's physical fitness,
                    understanding their needs and then developing a practical
                    and achievable workout and nutritional routine for them to
                    reach their targets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPA;
