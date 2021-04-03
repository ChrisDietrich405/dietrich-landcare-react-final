import React from "react"; 
import "../styles/BeforeAndAfter.scss";
import Footer from "./Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const drag = (e, container, slider, before, arrowCircle) => {
    let xPos = e.layerX;
    let size = container.offsetWidth; //current width of the div
    before.style.width = xPos + "px";  
    slider.style.left = xPos + "px";   // left here is similar to a dynamic definition of position:absolute another example top, bottom
    arrowCircle.style.left = xPos + "px";
    if(xPos < 3) {
        before.style.width = 0;
        slider.style.left = 0; 
    }
    if(xPos + 10 > size) {
        before.style.width = size + "px"; 
    }
};
export default class BeforeandAfter extends React.Component {
componentDidMount() {
    const containers = document.querySelectorAll(".before-and-after-container")

    containers.forEach(beforeAndAfter => {
      const slider = beforeAndAfter.querySelector(".slider")
      const before = beforeAndAfter.querySelector(".img-container-before")
      const after = beforeAndAfter.querySelector(".img-container-after")
      const arrowCircle = beforeAndAfter.querySelector(".arrow-circle")
      beforeAndAfter.addEventListener("mousemove", (e) => drag(e, beforeAndAfter, slider, before, arrowCircle))
    })
  }

  componentWillUnmount() {
    const containers = document.querySelectorAll(".before-and-after-container")

    containers.forEach(beforeAndAfter => {
      const slider = beforeAndAfter.querySelector(".slider")
      const before = beforeAndAfter.querySelector(".img-container-before")
      const after = beforeAndAfter.querySelector(".img-container-after")
      const arrowCircle = beforeAndAfter.querySelector(".arrow-circle")
      beforeAndAfter.removeEventListener("mousemove", (e) => drag(e, beforeAndAfter, slider, before, arrowCircle))
    })
    console.log("something")
  }

render() {
  return (  <div><div className="first-container-div"> 
  <h1>Before & After</h1>
  <div className="before-and-after-body">
  
  <div className="before-and-after-container">
    <div class="before-and-after-title">
    </div>
  <div className="img-container-after">
      <img className="after" src="/images/pic2.jpg" alt=""/>
  </div>
  <div className="img-container-before">
      <img className="before" src="/images/pic3.jpg" alt=""/>
  </div>
  <div className="slider-container">
      <div className="slider"></div>
      <div className="arrow-circle">
          <div className="chevron-left"><p><FontAwesomeIcon icon={faChevronLeft} /></p></div>
          <div className="chevron-right"><p><FontAwesomeIcon icon={faChevronRight} /></p></div>
      </div>     
  </div>
  <div className="review">
      <div className="review-container">
        <div className="quotation-mark-container">
            <span className="quotation-mark"><p><FontAwesomeIcon icon={faQuoteLeft} /></p></span>
        </div>
        <div className="picture-container"></div>
        <p className="review-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
  </div> 
</div>
</div>
  </div>
  <div className="before-and-after-body">
  <div className="before-and-after-container">
  <div className="img-container-after">
      <img className="after" src="/images/pic2.jpg" alt=""/>
  </div>
  <div className="img-container-before">
      <img className="before" src="/images/pic3.jpg" alt=""/>
  </div>
  <div className="slider-container">
      <div className="slider"></div>
      <div className="arrow-circle">
          <div className="chevron-left"><p><FontAwesomeIcon icon={faChevronLeft} /></p></div>
          <div className="chevron-right"><p><FontAwesomeIcon icon={faChevronRight} /></p></div>
      </div>     
  </div>
  <div className="review">
      <div className="review-container">
        <div className="quotation-mark-container">
            <span className="quotation-mark"><p><FontAwesomeIcon icon={faQuoteLeft} /></p></span>
        </div>
        <div className="picture-container"></div>
        <p className="review-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
  </div>
</div>
  </div>
  <div className="before-and-after-body">
  <div className="before-and-after-container">
  <div className="img-container-after">
      <img className="after" src="/images/pic2.jpg" alt=""/>
  </div>
  <div className="img-container-before">
      <img className="before" src="/images/pic3.jpg" alt=""/>
  </div>
  <div className="slider-container">
      <div className="slider"></div>
      <div className="arrow-circle">
          <div className="chevron-left"><p><FontAwesomeIcon icon={faChevronLeft} /></p></div>
          <div className="chevron-right"><p><FontAwesomeIcon icon={faChevronRight} /></p></div>
      </div>     
  </div>
  <div className="review">
      <div className="review-container">
        <div className="quotation-mark-container">
            <span className="quotation-mark"><p><FontAwesomeIcon icon={faQuoteLeft} /></p></span>
        </div>
        <div className="picture-container"></div>
        <p className="review-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
  </div> 
</div>
  </div>
  <Footer />
  </div>
   


  )
}

}