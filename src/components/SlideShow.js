import React from "react";


export default class SlideShow extends React.Component {
    constructor(props) { 
        super(props);  
        this.siSlideshow = null 
        this.state = { position: 0, select: this.props.images[0] };
      }
    render() {
        return ( 
          <div className="slide-show" style={{backgroundImage: `url(${this.state.select.url})`}}>
                <div className="gradient">
                <h3>{this.state.select.title}</h3>
                </div>
          </div>
        )
      }

      componentDidMount(){                        
        this.siSlideshow = setInterval( () => {
          this.slideshow()
        }, this.props.timeOut)
      }
    
      componentWillUnmount() {                      
        clearInterval(this.siSlideshow)             
      }

      slideshow() {
        let positionPlace = this.state.position;
        positionPlace++;
        if(positionPlace > this.props.images.length - 1) {
        positionPlace = 0;  
        }
        this.setState({  
          position: positionPlace, 
          select: this.props.images[positionPlace], 
        });                                        
    }
}