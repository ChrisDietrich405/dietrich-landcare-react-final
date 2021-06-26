import React from "react";
import "../styles/TreeTrimming.scss";
import Footer from "./Footer";

export default class TreeTrimming extends React.Component {
    render() {
        return (
          <div className="tree-trimming-container">
            <h1>Tree Trimming</h1>
            <div className="tree-trimming-description">
              <img src="/images/treetrimming.jpg" alt=""/>
              <div className="tree-trimming-image-description">
                <h3>Tree Trimming</h3>
                <p>We can provide you a top-notch tree expert that will cover all your requirements for quality and help you keep your backyard trees healthy and good-looking. We have been in business for more than 10 years and we have assisted numerous residents and business owners throughout the Baltimore area throughout the years. We are proud to have countless successful projects under our belts and we believe that this speaks loudly about the immaculate grade of our work.</p>
              </div>
            </div>
            <Footer />
          </div>
          
         
      
        )
      }
      }