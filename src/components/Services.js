import React from "react";
import "../styles/Services.scss";

export default class Services extends React.Component {
  render() {
    return (
      <div className="services-main-container">
        <div className="services-container">
          <h1>Services</h1>
          <hr />
          <div className="services-description" id="lawn-care">
            <div className="image"></div>
            <div className="services-image-description">
              <h3>Lawn Care</h3>
              <p>
                Dietrich Land Care can make your lawn the envy of your
                neighborhood. Our Service Leaders and in-house agronomists (soil
                scientists) provide customized programs that eliminate weeds
                while bringing you a green, vibrant and healthy lawn.
              </p>
            </div>
          </div>
          <div className="services-description" id="power-washing">
            <div className="services-image-description">
              <h3>Power Washing</h3>
              <p>
                We are one of the leading exterior cleaning service providers
                catering to residential and commercial soft washing, pressure
                washing, power washing, pressure cleaning, and exterior property
                maintenance in Maryland. We have been washing for 5 years and
                know the "Ins and Outs" of the industry.
              </p>
            </div>
            <div className="image"></div>
          </div>
          <div className="services-description" id="snow-removal">
            <div className="image"></div>
            <div className="services-image-description">
              <h3>Snow Removal</h3>
              <p>
                If you are stuck in your property and you have hard access
                outside, grab the phone and call us. You don’t want to risk
                being stuck for hours or going out at the expense of your
                safety. We’ll help you get rid of snow and keep your sidewalk
                clear.
              </p>
            </div>
          </div>
          <div className="services-description" id="stump-removal">
            <div className="services-image-description">
              <h3>Stump Removal</h3>
              <p>
                We provide the best stump removal service in the Baltimore area.
                We provide a variety of services, including stump grinding and
                removal. We have the skill and experience necessary to remove
                all types of tree stumps, offering the highest quality services
                and customer care.
              </p>
            </div>
            <div className="image"></div>
          </div>
          <div className="services-description" id="demolition">
            <div className="image"></div>
            <div className="services-image-description">
              <h3>Demolition & Hauling</h3>
              <p>
                Our trained professionals provide cleanout and trash-removal
                services for residential and commercial properties, as well as
                construction and renovation sites. We value prompt, professional
                and courteous service and take the time to inspect every job and
                location individually. Many of our reviews contain comments on
                how our customers appreciated our being on time.
              </p>
            </div>
          </div>
          <div className="services-description" id="regrades">
            <div className="services-image-description">
              <h3>Regrades</h3>
              <p>
                Most clients we visit can benefit from some form of grading to
                further get water away from their houses. Negative grading
                creates hydrostatic pressure on walls by constantly forcing
                water to flow towards the house. With high-density clay fill, we
                change the grade around your entire house to create a holistic
                system that deters water from coming near the vulnerable points
                around the house and property.
              </p>
            </div>
            <div className="image"></div>
          </div>
        </div>
      </div>
    );
  }
}
