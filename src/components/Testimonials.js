import React from "react";
import SlideShow from "./SlideShow";
import Footer from "./Footer"
import 'bootstrap/dist/js/bootstrap'

import "../styles/Testimonials.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //component
import { faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
export default class Testimonials extends React.Component {
  render () {
  return ( 
      <div className="testimonial"> 
      <h1 className="title">Testimonials</h1>
      <hr/>
      <div className="testimonial-container">
          <div className="row">
            <div className="col-12 col-lg-6 text-center" ><img src="/images/pic2.jpg" alt=""/></div>
            <div className="col-12 col-lg-6 text-center testimonial-container-client">
              <img src="/images/testimonials.jpg" alt=""/>
              <p><span><FontAwesomeIcon icon={faQuoteLeft} /></span>&nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum.</p>
            </div>
          </div>
      </div>
      <div className="testimonial-container">
          <div className="row">
            <div className="order-lg-0 order-1 col-12 col-lg-6 text-center testimonial-container-client">
              <img src="/images/testimonials.jpg" alt=""/>
              <p><span><FontAwesomeIcon icon={faQuoteLeft} /></span>&nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum.</p>
            </div>
            <div className="order-lg-1 order-0 col-12 col-lg-6 text-center" ><img src="/images/pic2.jpg" alt=""/></div>
          </div>
      </div>
      <div className="testimonial-container">
          <div className="row">
            <div className="col-12 col-lg-6 text-center" ><img src="/images/pic2.jpg" alt=""/></div>
            <div className="col-12 col-lg-6 text-center testimonial-container-client">
              <img src="/images/testimonials.jpg" alt=""/>
              <p><span><FontAwesomeIcon icon={faQuoteLeft} /></span>&nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsum.</p>
            </div>
          </div>
      </div>
      <Footer />
      </div>

  )

  }
}
