// this is what is in the BBJ slideshow put a black layer on top of the slideshow and give it an opacity of 30 percent

//Testimonials
//make the people picture more square
//the people picture should be aligned horizontally with the landscape picture

//like this https://dribbble.com/shots/14773037-Pickup-Website/attachments/6477895?mode=media

//AFTER MVP
//ADD BULLETS TO SLIDESHOW IMAGES
//for home page follow dribble.com hamburger menu drowpdown www.dribbble.com
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import HomePage from "./HomePage";
import Contact from "./Contact";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";

import Services from "./Services";

import "../styles/App.scss";
import "../styles/Header.scss";
import "../styles/SlideShow.scss";
import "../styles/HomePage.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* <Header/>   */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dietrich Landcare</title>
          <meta name="Dietrich Landcare Title" content="Helmet application" />
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
