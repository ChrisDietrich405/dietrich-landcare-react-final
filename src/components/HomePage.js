import React from "react";
import SlideShow from "./SlideShow";
import Footer from "./Footer"; 

export default class HomePage extends React.Component {
  render() {
    return <div>
    <SlideShow timeOut={3000} images={  [    // timeOUt and images are examples of attributes
      {
        url: "/images/home1.jpg",
        title: "Hedge Trimming",
        description: "lorem ipsum lorem ipsum lorem lipsum"   
      },
      {
        url: "/images/home2.jpg",
        title: "clearing",
        description: "lorem ipsum lorem ipsum lorem lipsum" 
      },
      {
        url: "/images/pic3.jpg",
        title: "lorem ipsum 2",
        description: "lorem ipsum lorem ipsum lorem lipsum"
      },
      {
        url: "/images/pic4.jpg",
        title: "lorem ipsum 3",
        description: "lorem ipsum lorem ipsum lorem lipsum"
      }
    ]}></SlideShow>
    <div className="home-page-bottom-container">
        <section className="home-page-bottom-section">
            <div className="box1">
               <img src="/images/what.jpg" alt="" className="bottom-pic"/>
            </div>
            <div className="box2">
                <p>Our professionally trained landscape designers are committed to surpassing your expectations and doing everything we can to ensure you are proud of your landscape. We offer a number of different landscape services that you can choose from, and we take the time to customize it to your specific needs in order for it to reflect you best and ensure it aligns to the outdoor activities you enjoy the most. Whether you are looking for a hardscape or softscape installation, drainage solutions, energy-efficient outdoor lighting installations and more, we can assist you and grow your landscape vision according to your preferences.</p>
            </div>
            <div className="box3">
                <p>We are certified in all aspects of landscaping that offers you efficient and dependable services that suit your budget and needs best. We craft innovative patios, terraces, retaining walls, dry rock creeks, outdoor fireplaces, walkways, energy-efficient lighting and more.</p>
            </div>
        </section>
    </div>
    <Footer />
    </div>
  }
}
