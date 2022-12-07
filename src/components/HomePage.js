import React from "react";
import SlideShow from "./SlideShow";
import { Link } from "react-router-dom";

import scrollImage1 from "../images/scroll-image1.png";
import scrollImage2 from "../images/scroll-image2.png";
import scrollImage3 from "../images/scroll-image3.png";
import scrollImage4 from "../images/scroll-image4.png";

import lawnCare from "../images/lawn-care.png";
export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="home-page-container">
          <SlideShow
            timeOut={3000}
            images={[
              {
                url: scrollImage1,
                title: "Hedge Trimming",
              },
              {
                url: scrollImage2,
                title: "Lawn Mowing",
              },
              {
                url: scrollImage3,
                title: "Mulching",
              },
              {
                url: scrollImage4,
                title: "Retaining Walls",
              },
            ]}
          ></SlideShow>
        </div>

        <div className="home-page-bottom-container">
          <section className="home-page-bottom-section">
            <h1>Dietrich Landcare</h1>
            <div className="home-page-image">
              <img src={lawnCare} alt="" className="bottom-pic" />
            </div>
            <div className="home-page-description">
              <p>
                Our professionally trained landscape designers are committed to
                surpassing your expectations and doing everything we can to
                ensure you are proud of your landscape.
              </p>
              <p>
                {" "}
                We offer a number of different landscape services that you can
                choose from, and we take the time to customize it to your
                specific needs in order for it to reflect you best and ensure it
                aligns to the outdoor activities you enjoy the most.{" "}
              </p>{" "}
              <p>
                {" "}
                We are certified in all aspects of landscaping that offers you
                efficient and dependable services that suit your budget and
                needs best.We craft innovative patios, terraces, retaining
                walls, dry rock creeks, outdoor fireplaces, walkways,
                energy-efficient lighting and more.
              </p>
            </div>

            <button
              className="contact-btn"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact us today!
            </button>
          </section>
        </div>
      </>
    );
  }
}
