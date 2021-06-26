import React from "react";
import "../styles/TreeTrimming.scss";
import Footer from "./Footer";

export default class LawnCare extends React.Component {
    render() {
        return (
          <div className="tree-trimming-container">
            <h1>Lawn Care</h1>
            <div className="tree-trimming-description">
              <img src="/images/LawnCare.jpg" alt=""/>
              <div className="tree-trimming-image-description">
                <h3>Lawn Care</h3>
                <p>Dietrich Land Care can make your lawn the envy of your neighborhood. Our Service Leaders and in-house agronomists (soil scientists) provide customized programs that eliminate weeds while bringing you a green, vibrant and healthy lawn.</p>
              </div>
            </div>
            <Footer />
          </div>
          
         
      
        )
      }
      }
