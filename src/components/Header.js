import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //component
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons"; 
import { HashLink } from 'react-router-hash-link'; //"@fortawesome/free-solid-svg-icons" example of a package
export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand"><img src="/images/DietrichLandcare.jpg"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">  
                <li>
                <Link to="/services" className="dropdown-item">Lawn Care</Link>
                </li>
                <li>
                <Link to="/PowerWashing" className="dropdown-item">Power Washing</Link>
                </li>
                <li>
                <Link to="/SnowRemoval" className="dropdown-item">Snow Removal</Link>
                </li>
                <li>
                <Link to="/StumpRemoval" className="dropdown-item">Stump Removal</Link>
                </li>
                <li>
                <Link to="/Demolition" className="dropdown-item">Demolition & Hauling</Link>
                </li>
                <li>
                <HashLink to="/services#regrades" className="dropdown-item">Regrades</HashLink>
                {/* <Link to="/Regrades" className="dropdown-item">Regrades</Link> */}
                </li>
              </ul>
              </li>
              <li className="nav-item">
              <Link to="/testimonials" className="nav-link">Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link to="/beforeAndAfter" className="nav-link">Before & After</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li> 
            </ul>
			<ul className="nav justify-content-end">
				<li className="nav-item">
          <a className="nav-link" href="tel:3457655555"><span><FontAwesomeIcon icon={faPhone} /></span> (443) 608-3258</a> 
        </li>
        <li className="nav-item">
					<a className="nav-link" href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
          target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
          </a>	
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="https://www.instagram.com/dietrich_landcarellc/"
          target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
				</li>
			</ul>
    </div>
        </div>
      </nav>
    );
  }
}
    {/* <div>
        <div className="navbar">
          <div className="container">
            <div className="navbar-left">
              <div className="navbar-logo">
                <Link to="/">
                  <img
                    src="/images/DietrichLandcare.jpg"
                    className="navbar-logo-image"
                    alt="Dietrich Landcare"
                  ></img>
                </Link>
              </div>
            </div>
            <div className="navbar-right">
              <div className="navbar-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <div className="services">
                    <li>
                      <a href="">Services</a>
                      <div>
                        <ul className="services-items">
                          <li className="services-item">
                            <a href="" className="trash">
                              Trash removal
                            </a>
                          </li>
                          <li className="services-item">
                            <a href="">Land care</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </div>
                  <li>
                    <Link to="/testimonials">Testimonials</Link>
                  </li>
                  <li>
                    <Link to="/beforeAndafter">Before & After</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="navbar-social-links">
                <div className="facebook">
                  <a
                    href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
                <div className="instagram">
                  <a
                    href="https://www.instagram.com/dietrich_landcarellc/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
                <div className="twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  */}
