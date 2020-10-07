import React from "react";
import { Switch, Route } from "react-router-dom";
import Amenities from "./components/Amenities";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Accomodation from "./pages/Accomodation";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/accomodation" component={Accomodation} />
        <Route exact path="/accomodation/:type" component={Accomodation} />
        <Route exact path="/accomodation/:type/:slug" component={SingleRoom} />
        <Route
          exact
          path="/accomodation/:type/:slug/amenities"
          component={Amenities}
        />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
