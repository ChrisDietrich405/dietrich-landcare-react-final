import React from "react";
import SlideShow from "./SlideShow";
import Footer from "./Footer"
import 'bootstrap/dist/js/bootstrap'

import "../styles/Testimonials.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //component
import { faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

import scrollImage1 from "../images/scroll-image1.png"
import testimonialPerson1 from "../images/testimonial-person1.jpg"
export default class Testimonials extends React.Component {
  render () {
  return ( 
      <div className="testimonial"> 
      <h1 className="title">Testimonials</h1>
      <hr/>
      <div className="testimonial-container">
          <div className="row">
           
            <div className="col-12 col-lg-6 text-center" > <img src={scrollImage1} alt="" /></div>
            <div className="col-12 col-lg-6 text-center testimonial-container-client">
              <img src={testimonialPerson1} alt=""/>
              <p><span><FontAwesomeIcon icon={faQuoteLeft} /></span>&nbsp;I had fallen behind on my gardening and called Dietrich Landcare for a clean up/regular landscaping service. They were prompt in getting back to my inquiry. Devin came out within the week to take a look at the property and get me a quote. She was quick, professional and gave me a realistic timeline of when I could be fit into their schedule. I would not hesitate to recommend this landscaping company to anyone </p>
            </div>
          </div>
      </div>
      <div className="testimonial-container">
          <div className="row">
            <div className="order-lg-0 order-1 col-12 col-lg-6 text-center testimonial-container-client">
            <img src={testimonialPerson1} alt="" />
              <p><span><FontAwesomeIcon icon={faQuoteLeft} /></span>&nbsp; Dan's has been amazing to work with. We've been using them for a few months for landscape maintenance and have just recently used them to install some trees. The level of service and design considerations have been far above anyone I've worked with in the past. The entire team was professional down to the last detail.</p>
            </div>
            <div className="order-lg-1 order-0 col-12 col-lg-6 text-center" ><img src={scrollImage1} alt=""/></div>
          </div>
      </div>
      <div className="testimonial-container">
          <div className="row">
            <div className="col-12 col-lg-6 text-center" ><img src={scrollImage1} alt="" /></div>
            <div className="col-12 col-lg-6 text-center testimonial-container-client">
              <img src={testimonialPerson1} alt=""/>
              <p><span><FontAwesomeIcon icon={faQuoteLeft} /></span>&nbsp; Highly recommend! All of the workers were all professional and friendly. Dan was patient and informative throughout, from the planning stages to the final product. Our new lawn and patio look even better than we imagined! </p>
            </div>
          </div>
      </div>
      </div>

  )

  }
}
