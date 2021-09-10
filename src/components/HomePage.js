import React from "react";
import SlideShow from "./SlideShow";
import Footer from "./Footer";

import scrollImage1 from "../images/scroll-image1.png"
import scrollImage2 from "../images/scroll-image2.png"
import scrollImage3 from "../images/my-goodness2.png"
import scrollImage4 from "../images/scroll-image4.png"

import lawnCare from "../images/lawn-care.png"

import { AiOutlineArrowLeft } from "react-icons/all"



export default class HomePage extends React.Component {
  render() {
    return <div>
    <AiOutlineArrowLeft/>
    <SlideShow timeOut={3000} images={  [    
      {
        url: scrollImage1, 
        title: "Hedge Trimming", 
      },
      {
        url: scrollImage2,
        title: "lawn mowing",
      },
      {
        url: scrollImage3,
        title: "lorem ipsum 2",
      },
      {
        url: scrollImage4,
        title: "retaining walls",
      }
    ]}></SlideShow>
  
    <div className="home-page-bottom-container">
        <section className="home-page-bottom-section">
            <div className="box1">
               <img src={lawnCare} alt="" className="bottom-pic"/>
            </div>
            <div className="box2">
                <p>Our professionally trained landscape designers are committed to surpassing your expectations and doing everything we can to ensure you are proud of your landscape. We offer a number of different landscape services that you can choose from, and we take the time to customize it to your specific needs in order for it to reflect you best and ensure it aligns to the outdoor activities you enjoy the most.</p>
            </div>
            <div className="box3">
             <p>We are certified in all aspects of landscaping that offers you efficient and dependable services that suit your budget and needs best.We craft innovative patios, terraces, retaining walls, dry rock creeks, outdoor fireplaces, walkways, energy-efficient lighting and more.</p>
            </div>
        </section>

    </div>
  
    </div>
  }
}
