import React from "react";
import "../styles/TreeTrimming.scss";
import Footer from "./Footer";

export default class Demolition extends React.Component {
    render() {
        return (
          <div className="tree-trimming-container">
            <h1>Demolition & Hauling</h1>
            <div className="tree-trimming-description">
              <img src="/images/Demolition.jpg" alt=""/>
              <div className="tree-trimming-image-description">
                <h3>Demolition and Hauling</h3>
                <p>Our trained professionals provide cleanout and trash-removal services for residential and commercial properties, as well as construction and renovation sites.
                We value prompt, professional and courteous service and take the time to inspect every job and location individually. Many of our reviews contain comments on how our customers appreciated our being on time.</p>
              </div>
            </div>
            <Footer />
          </div>
          
         
      
        )
      }
      }