import React from "react";
import SlideShow from "./SlideShow";
import Footer from "./Footer"; 

export default class HomePage extends React.Component {
  render() {
    return <div>
    <SlideShow timeOut={3000} images={  [    // timeOUt and images are examples of attributes
      {
        url: "/images/what.jpg",
        title: "lorem ipsum 0",
        description: "lorem ipsum lorem ipsum lorem lipsum"   
      },
      {
        url: "/images/ever.jpg",
        title: "lorem ipsum 1",
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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit enim adipisci provident minima! Saepe
                similique dignissimos eos minus laborum exercitationem voluptatibus reiciendis voluptate, perferendis ad
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eius nam.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, necessitatibus?</p>
            </div>
            <div className="box3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cum vitae similique debitis nesciunt? Voluptate, accusamus tenetur nostrum magnam expedita rem reprehenderit animi illum adipisci quos eaque assumenda fugit eius dignissimos odio totam! Ullam tenetur id, tempora veritatis numquam totam?</p>
            </div>
        </section>
    </div>
    <Footer />
    </div>
  }
}
