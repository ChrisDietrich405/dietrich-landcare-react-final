import React from "react"; 
import "../styles/Footer.scss"; 

import { faBars, faEnvelopeSquare, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component {
    render () {
        function currentTime() {
            let time = new Date()
            let timeNow = time.getUTCFullYear()
            return timeNow
        }
        return (

            <div className="footer">
                <div className="footer-container">
                <div className="footer-container-top">
                     <div className="footer-container-top-title">
                         <h3>Contact Us</h3>
                         <p><span><FontAwesomeIcon icon={faPhone} /></span>&nbsp;432 444 5555</p>
                         <p><span><FontAwesomeIcon icon={faEnvelopeSquare} /></span>&nbsp;DietrichLandcare@gmail.com</p>
                     </div>
                     <div className="footer-container-top-title">
                         <h3>Address</h3>
                         <p>1376 Loch Hill Rd</p>
                         <p>Baltimore, MD 21239</p>
                     </div>
                     <div className="footer-container-top-title">
                         <h3>Office Hours</h3>
                         <p>Monday-Saturday 9am-6pm</p>
                         <p>Sundays 11am-5pm</p>
                     </div>
                     <div className="footer-container-top-title">
                         <h3>Follow Us</h3>
                         <p><a href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"><span><FontAwesomeIcon icon={faFacebook}  /></span>&nbsp;Facebook</a></p>
                         <p><a href="https://www.instagram.com/dietrich_landcarellc/"><span><FontAwesomeIcon icon={faInstagram} /></span>&nbsp;Instagram</a></p>
                         
                     </div>
                 </div>
                    <div className="footer-container-bottom">
                     <div className="footer-copyright">
                         <h4>DietrichLandcare©{currentTime()}</h4>
                     </div>
                 </div>

                </div>
            </div>
        )
    }
}