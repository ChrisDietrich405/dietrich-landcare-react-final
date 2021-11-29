//arrows should be inside the slides and the slides should be 100%
//make sure that the arrows are easy to see, maybe have a circle white
//background

//gradient for slide show make it only for the text not the whole bottom
//and make the background rectangle have maybe 70% opacity

//The service field is required. in the center below the question
//the inputs error messages to the left and the border should be the same color as the message color

//practice delete, put in contact form

//retaining walls service tab
//slideshow needs to be reduced and add arrows to both sides so that the user has control

//create one page for services, create a call to action
//the cta would direct to his most direct communication
//add Services title

//fix the arrow on services

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
