import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import Amenities from "./pages/Amenities";
// import Calendar from "./calendar-backed-up/Calendar";
// import CalendarWidget from "./components/CalendarWidget";
// import DatePicker from "./calendar-backed-up/DatePicker";
import Family from "./components/Family";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NatureAndDiscovery from "./components/NatureAndDiscovery";
import PersonalizedWellness from "./pages/PersonalizedWellness";
import Accomodation from "./pages/Accomodation";
import ErrorPage from "./pages/ErrorPage";
import Experiences from "./pages/Experiences";
import Home from "./pages/Home";
// import Rates from "./pages/Rates";
import SingleRoom from "./pages/SingleRoom";
import SPA from "./pages/SPA";
import SingleWellness from "./pages/SingleWellness";
import Treatments from "./pages/Treatments";
import BookTreatment from "./pages/BookTreatment";
import GuestInformation from "./pages/GuestInformation";
import Practitioners from "./pages/Practitioners";
import Inquiry from "./pages/Inquiry";
// import ErrorBoundary from "./ErrorBoundary";
import OurGallery from "./pages/OurGallery";
import Reservation from "./pages/Reservation";
import Calendar from "./Calendar";
import ReservationRoom from "./pages/ReservationRoom";
import ReservationConfirm from "./pages/ReservationConfirm";
import Contact from "./pages/Contact";
import Login from "./admin/Login";
import ForgotPassword from "./admin/ForgotPassword";
import Dashboard from "./admin/Dashboard";
import ResetPassword from "./admin/ResetPassword";
import Listings from "./pages/Listings/Listings";
import SingleListingPage from "./pages/Listings/SingleListingPage";

const App = (props) => {
  // console.log(props.location.pathname.split("/"));
  const urlPath = props.location.pathname;
  const url = urlPath.split("/")[1];

  // if (url === "accounts") {
  //   return <Redirect to="/accounts/login" />;
  // }

  // console.log(url);
  return (
    <div>
      {url !== "accounts" && url !== "dashboard" ? (
        <Header />
      ) : urlPath === "/accounts" || urlPath === "/accounts/" ? (
        <Redirect to="/accounts/login" />
      ) : null}

      {/* {url !== "dashboard" ? <Header /> : null} */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/listings" component={Listings} />
        <Route path="/listing/:slug" component={SingleListingPage} />
        <Route exact path="/accomodation" component={Accomodation} />
        <Route exact path="/accomodation/:type" component={Accomodation} />
        <Route exact path="/accomodation/:type/:slug" component={SingleRoom} />
        <Route
          exact
          path="/accomodation/:type/:slug/amenities"
          component={Amenities}
        />
        <Route exact path="/plan-your-stay" component={Reservation} />
        <Route exact path="/choose-your-room" component={ReservationRoom} />
        <Route exact path="/confirm-your-stay" component={ReservationConfirm} />
        <Route exact path="/experiences" component={Experiences} />
        <Route exact path="/experiences/adventure" component={Experiences} />
        <Route exact path="/experiences/family" component={Family} />
        <Route
          exact
          path="/experiences/nature-discovery-centre"
          component={NatureAndDiscovery}
        />
        <Route exact path="/spa" component={SPA} />
        <Route
          exact
          path="/spa/personalized-wellness"
          component={PersonalizedWellness}
        />
        <Route
          exact
          path="/spa/personalized-wellness/:slug"
          component={SingleWellness}
        />
        <Route exact path="/spa/booking-inquiry" component={Inquiry} />
        <Route exact path="/spa/treatments" component={Treatments} />
        <Route
          exact
          path="/spa/treatments/book-treatment/:slug"
          component={BookTreatment}
        />
        <Route
          exact
          path="/spa/treatments/guest-information"
          component={GuestInformation}
        />
        <Route
          exact
          path="/spa/visiting-practitioners-calendar"
          component={Practitioners}
        />
        <Route
          exact
          path="/spa/visiting-practitioners-calendar/inquiry"
          component={Inquiry}
        />
        <Route exact path="/our-gallery" component={OurGallery} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/accounts/login" component={Login} />
        <Route
          exact
          path="/accounts/forgot-password"
          component={ForgotPassword}
        />
        <Route
          exact
          path="/accounts/reset-password"
          component={ResetPassword}
        />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route exact path="/datepicker" component={DatePicker} /> */}
        <Route component={ErrorPage} />
      </Switch>
      {url !== "accounts" && url !== "dashboard" ? <Footer /> : null}
    </div>
  );
};

export default withRouter(App);
