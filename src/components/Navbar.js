import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import MenuMobile from "./MenuMobile";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import { GiHamburgerMenu } from "react-icons/gi";
// import { HashLink } from "react-router-hash-link";
import logo from "../images/logo.jpg";

import OutsideAlerter from "./OutsideAlerter";

import "../styles/Navbar.scss";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showServiceMenu: true, toggleMobileMenu: false };
    this.toggleShowServiceMenu = this.toggleShowServiceMenu.bind(this);
    this.setToggleMobileMenu = this.setToggleMobileMenu.bind(this);
  }

  setToggleMobileMenu() {
    this.setState({ toggleMobileMenu: !this.state.toggleMobileMenu });
  }

  toggleShowServiceMenu() {
    this.setState({ showServiceMenu: !this.state.showServiceMenu });
  }

  render() {
    console.log(this.state.toggleMobileMenu)
    return (
      <nav>
        { this.state.toggleMobileMenu && <MenuMobile whenUserClicksOnXIcon={() => this.setToggleMobileMenu()} />  }
       

        <div className="logo-links">
          <img src={logo} alt="" />
          <ul className="responsive-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="services" onClick={this.toggleShowServiceMenu}>
              <OutsideAlerter clickOutside={() => this.setState({ showServiceMenu: false })}>
                Services
                {this.state.showServiceMenu ? (
                  <div className="services-menu">
                    <ul>
                      <li>
                        <a href="/services#lawn-care" className="services-nav-link">
                          Lawn Care
                        </a>
                      </li>
                      <li>
                        <a href="/services#power-washing" className="services-nav-link">
                          Power Washing
                        </a>
                      </li>
                      <li>
                        <a href="/services#snow-removal" className="services-nav-link">
                          Snow Removal
                        </a>
                      </li>
                      <li>
                        <a href="/services#stump-removal" className="services-nav-link">
                          Stump Removal
                        </a>
                      </li>
                      <li>
                        <a href="/services#demolition" className="services-nav-link">
                          Demolition & Hauling
                        </a>
                      </li>
                      <li>
                        <a href="/services#regrades" className="services-nav-link">
                          Regrades
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </OutsideAlerter>
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

        <div className="social-icons-container">
          <a href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436" target="_blank">
            <FontAwesomeIcon className="social-media-icon" icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/dietrich_landcarellc/" target="_blank">
            <FontAwesomeIcon className="social-media-icon" icon={faInstagram} />
          </a>
        </div>

        <div className="hamburger-menu" onClick={() =>  this.setState({toggleMobileMenu: true})}>
          <GiHamburgerMenu />
        </div>
      </nav>
    );
  }
}
