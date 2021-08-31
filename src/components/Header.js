import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons"; 
import { HashLink } from 'react-router-hash-link';
import { Dropdown } from "bootstrap"; 
export default class Header extends React.Component {

  componentDidMount() {
    const navbarDropdown = document.querySelector('#navbarDropdown');
    const ulNavbarDropdown = document.querySelector('[aria-labelledby=navbarDropdown]');
    const navbar = document.querySelector('.navbar');
    
    const bsNavbarDropdown = new Dropdown(navbarDropdown)

    let toMouseLeave;
    navbarDropdown.addEventListener('mouseover', () => {
      clearTimeout(toMouseLeave);
      bsNavbarDropdown.show();
    })
    
    Array.from([navbarDropdown.parentElement, ulNavbarDropdown, navbar]).forEach(element => {
      element.addEventListener('mouseleave', () => {
        toMouseLeave = setTimeout(() => bsNavbarDropdown.hide(), 200);
      })
    })

    Array.from([ulNavbarDropdown, navbar]).forEach(element => {
      element.addEventListener('mouseover', () => {
        clearTimeout(toMouseLeave);
      })
    });

  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand"></a>
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
                  <Link to={{pathname: "/services", state: "lawn-care"}} className="dropdown-item">Lawn Care</Link>
                  </li>
                  <li>
                  <Link to={{pathname: "/services", state: "power-washing"}} className="dropdown-item">Power Washing</Link>
                  </li>
                  <li>
                  <Link to={{pathname: "/services", state: "snow-removal"}} className="dropdown-item">Snow Removal</Link>
                  </li>
                  <li>
                  <Link to={{pathname: "/services", state: "stump-removal"}} className="dropdown-item">Stump Removal</Link>
                  </li>
                  <li>
                  <Link to={{pathname: "/services", state: "demolition"}} className="dropdown-item">Demolition & Hauling</Link>
                  </li>
                  <li> 
                  <Link to={{pathname: "/services", state: "regrades"}} className="dropdown-item">Regrades</Link>
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
                 <a className="nav-link phone" href="tel:3457655555"><span><FontAwesomeIcon icon={faPhone} /></span> (443) 608-3258</a> 
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
  