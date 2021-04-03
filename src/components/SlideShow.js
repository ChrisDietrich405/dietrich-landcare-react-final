import React from "react";


export default class SlideShow extends React.Component {
    constructor(props) { //constructor is a method 
        super(props);  //when you need to use attributes in other components
        this.siSlideshow = null  //defining the property with the value of null
        this.state = { position: 0, select: this.props.images[0] };
      }
    render() {
        return <div className="slide-show" style={{backgroundImage: `url(${this.state.select.url})`}}>
              <div className="gradient">
              <h3>{this.state.select.title}</h3>
              </div>
        </div>;
      }

      componentDidMount(){                        //when user changes pages the slideshow will either mount or unmount the slideshow 
        this.siSlideshow = setInterval( () => {
          this.slideshow()
        }, this.props.timeOut)
      }
    
      componentWillUnmount() {                      //didmount and willunmount are like events 
        clearInterval(this.siSlideshow)             //when React renders the component that the events are triggered 
      }

      slideshow() {
        let positionPlace = this.state.position;
        positionPlace++;
        if(positionPlace > this.props.images.length - 1) {
        positionPlace = 0;  
        }
        this.setState({  // setState is a method changes the state that was defined in the constructor method 
          position: positionPlace, //line 27 defined 
          select: this.props.images[positionPlace], // when using React we can't change the state directly
        });                                         // because there's a performance problem if we do it 
    }
}