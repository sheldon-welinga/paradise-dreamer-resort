import React from "react";
import { Switch, Route } from "react-router-dom";

import Amenities from "./pages/Amenities";
import Calendar from "./components/Calendar";
// import CalendarWidget from "./components/CalendarWidget";
import DatePicker from "./components/DatePicker";
import Family from "./components/Family";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NatureAndDiscovery from "./components/NatureAndDiscovery";
import PersonalizedWellness from "./pages/PersonalizedWellness";
import Accomodation from "./pages/Accomodation";
import ErrorPage from "./pages/ErrorPage";
import Experiences from "./pages/Experiences";
import Home from "./pages/Home";
import Rates from "./pages/Rates";
import SingleRoom from "./pages/SingleRoom";
import SPA from "./pages/SPA";
import SingleWellness from "./pages/SingleWellness";
import Treatments from "./pages/Treatments";
import BookTreatment from "./pages/BookTreatment";
import GuestInformation from "./pages/GuestInformation";
import Practitioners from "./pages/Practitioners";
import Inquiry from "./pages/Inquiry";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/accomodation" component={Accomodation} />
        <Route exact path="/accomodation/:type" component={Accomodation} />
        <ErrorBoundary>
          <Route
            exact
            path="/accomodation/:type/:slug"
            component={SingleRoom}
          />
        </ErrorBoundary>
        <Route
          exact
          path="/accomodation/:type/:slug/amenities"
          component={Amenities}
        />
        <Route exact path="/rates" component={Rates} />
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
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/datepicker" component={DatePicker} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
