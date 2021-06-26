import React from "react";
import "../styles/TreeTrimming.scss";
import Footer from "./Footer";

export default class SnowRemoval extends React.Component {
    render() {
        return (
          <div className="tree-trimming-container">
            <h1>Snow Removal</h1>
            <div className="tree-trimming-description">
              <img src="/images/SnowRemoval.jpg" alt=""/>
              <div className="tree-trimming-image-description">
                <h3>Snow Removal</h3>
                <p>If you are stuck in your property and you have hard access outside, grab the phone and call us. You don’t want to risk being stuck for hours or going out at the expense of your safety. We’ll help you get rid of snow and keep your sidewalk clear.</p>
              </div>
            </div>
            <Footer />
          </div>
          
         
      
        )
      }
      }