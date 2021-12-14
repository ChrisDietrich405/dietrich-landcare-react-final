//services dropdown titles shouldn't change to white

//Testimonials the images should be at the edge of the marging

//contact page increase font of contact at top and put all three on the same line (just
//like the social media icons)
//the 6 services with the radio button should be aligned left
//instead of 2 columns of 3 services, make 3 columns with 2 services
//add some additional space between the radio buttons and when the first name moves  out of the input
// and goes above

//add toastify
//change color of hamburger to white
//position title of each slide in the center of picture
//and make font bigger and capitalize first word
//over the entire image there will be a black layer with 10 percent opacity
//so that you can see the title in the center better
//like this https://dribbble.com/shots/14773037-Pickup-Website/attachments/6477895?mode=media

//AFTER MVP ADD BULLETS TO SLIDESHOW IMAGES

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
