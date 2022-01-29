import React from "react";

import { AiOutlineArrowLeft } from "react-icons/all";
import { AiOutlineArrowRight } from "react-icons/all";

export default class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.siSlideshow = null;
    this.state = { position: 0, select: this.props.images[0] };
  }

  render() {
    const nextSlideShow = () => {
      let nextSlide = this.state.position + 1;
      if (nextSlide >= this.props.images.length) {
        nextSlide = 0;
      }
      this.setState({
        position: nextSlide,
        select: this.props.images[nextSlide],
      });
    };

    const prevSlideShow = () => {
      let prevSlide = this.state.position - 1;
      if (prevSlide < 0) {
        prevSlide = this.props.images.length - 1;
      }
      this.setState({
        position: prevSlide,
        select: this.props.images[prevSlide],
      });
    };

    return (
      <div className="slide-show-container">
        <div className="darken" />
        <div
          className="slide-show"
          style={{ backgroundImage: `url(${this.state.select.url})` }}
        >
          <div className="arrow-left-container">
            <AiOutlineArrowLeft
              className="arrow-left"
              onClick={prevSlideShow}
            />
          </div>
          <div className="gradient">
            <h3>{this.state.select.title}</h3>
          </div>

          <div className="arrow-right-container">
            <AiOutlineArrowRight
              className="arrow-right"
              onClick={nextSlideShow}
            />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.siSlideshow = setInterval(() => {
      this.slideshow();
    }, this.props.timeOut);
  }

  componentWillUnmount() {
    clearInterval(this.siSlideshow);
  }

  slideshow() {
    let positionPlace = this.state.position;
    positionPlace++;
    if (positionPlace > this.props.images.length - 1) {
      positionPlace = 0;
    }
    this.setState({
      position: positionPlace,
      select: this.props.images[positionPlace],
    });
  }
}
