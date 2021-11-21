import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import logo from '../images/logo.jpg';

import "../styles/Navbar.scss";



export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={ showServiceMenu: true }
    this.toggleShowServiceMenu = this.toggleShowServiceMenu.bind(this)
  }

  toggleShowServiceMenu() {
    this.setState({showServiceMenu: !this.state.showServiceMenu})
  }

  render() {
    console.log(this.state.showServiceMenu)
    return (
        <nav>
            <div className="logo-links">
                <img src={logo} alt="" />
                <ul>
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>                    
                    <li className="services" onClick={this.toggleShowServiceMenu} >
                      Services
                      {this.state.showServiceMenu ? (<div className="services-menu">
                      
                      <ul>
                        <li>Lawn Care</li>
                        <li>Power Washing</li>
                        <li>Snow Removal</li>
                        <li>Stump Removal</li>
                        <li>Demolition & Hauling</li>
                        <li>Regrades</li>
                      </ul>
                    </div>) : ""}
                      
                    </li>
                    <li className="nav-item">
                      <Link to="/testimonials" className="nav-link">
                        Testimonials
                      </Link>
                    </li>
                    <li> 
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                </ul>
            </div>
            
            <div>
            <a  
                  href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
                  target="_blank"
                >
                  <FontAwesomeIcon className="social-media-icon" icon={faFacebook} />
                </a>
                <a
                  href="https://www.instagram.com/dietrich_landcarellc/"
                  target="_blank"
                >
                  <FontAwesomeIcon className="social-media-icon" icon={faInstagram} />
                </a>
            </div>
        </nav>
    );
  }
}