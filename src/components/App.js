import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap";
import { Helmet } from "react-helmet";

import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import HomePage from "./HomePage";
import Contact from "./Contact";

import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";

import Services from "./Services";

import "../styles/App.scss";
import "../styles/SlideShow.scss";
import "../styles/HomePage.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dietrich Land Care</title>
          <meta name="Dietrich Land Care Title" content="Helmet application" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
        </Switch>
      </div>
      <SmoothScroll />
      <Footer />
    </Router>
  );
}
