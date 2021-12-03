import { Link } from "react-router-dom";

import { AiFillCloseCircle } from "react-icons/ai";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss";

export default function MenuMobile({whenUserClicksOnXIcon}) {


  return (
    <div className="menuMobile">
      <ul className="menuMobile-responsive-links">
        <li className="menuMobile-nav-item">
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/services#lawn-care">Lawn Care</a>
        </li>
        <li>
          <a href="/services#power-washing">Power Washing</a>
        </li>
        <li>
          <a href="/services#snow-removal">Snow Removal</a>
        </li>
        <li>
          <a href="/services#stump-removal">Stump Removal</a>
        </li>
        <li>
          <a href="/services#demolition">Demolition & Hauling</a>
        </li>
        <li>
          <a href="/services#regrades">Regrades</a>
        </li>

        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="menuMobile-social-icons-container">
        <a href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436" target="_blank">
          <FontAwesomeIcon className="social-media-icon" icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/dietrich_landcarellc/" target="_blank">
          <FontAwesomeIcon className="social-media-icon" icon={faInstagram} />
        </a>
      </div>

      <div className="menuMobile-close" onClick={() => whenUserClicksOnXIcon()}>
        <AiFillCloseCircle size={50} />
      </div>
    </div>
  );
}
