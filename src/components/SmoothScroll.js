import React from "react"

import { AiOutlineArrowUp } from "react-icons/all"

import "../styles/SmoothScroll.scss";

export default class SmoothScroll extends React.Component {

    state = { shouldScrollToTop: false }
    
    componentDidMount() {
        window.addEventListener("scroll", () => {
            const pageYOffset = window.pageYOffset
            if(pageYOffset >= 500) {
                this.setState({ shouldScrollToTop: true}) 
            } else {
                this.setState({ shouldScrollToTop: false})
            }
            // this.setState({ shouldScrollToTop: pageYOffset >= 500})
        })
    }
    componentWillUnmount() {
        window.removeEventListener("scroll")
    }

    scrollToTop() {
        window.scrollTo(0, 0)
    } 

    render() {
        return this.state.shouldScrollToTop && (
            <div className="scroll-top" onClick={ this.scrollToTop.bind(this) }>
                <AiOutlineArrowUp size={50} />
            </div>
        )
        
    }

}