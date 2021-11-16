import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

import classnames from "classnames";

import axios from "axios";
import * as Validator from 'validatorjs'; 
 
import ServicesCheckbox from "./ServicesCheckbox"; 

import Phone from "../images/phone.png"
import Email from "../images/email.png"
import Location from "../images/location.png"

import "../styles/Contact.scss";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "", email: "", phone: "", message: "", service: "", error: {} };
  }
  
  render() {

    return (
      <div className="viewport">
        <div className="container">  
          <div className="row row-container">
            <div className="col-8 center-block text-center second-column">
              <h1 className="contact-title">Let's get in touch!</h1>
              <hr />
              <p>We are available by phone: Monday-Saturday 7am-7:30 pm.</p>
              <ul className="c-info">
                <li className="c-information">
                  <img src={Phone} alt="Phone" className="c-info-icons" />
                  <p>(443) 608-3258</p>
                </li>
                <li className="c-information">
                  <img src={Email} alt="Information" className="c-info-icons" />
                  <p>office@dietrichlandcare.com</p>
                </li>
                <li className="c-information">
                  <img src={Location} alt="Location" className="c-info-icons" />
                  <p>Baltimore, MD 21239</p>
                </li>
              </ul>
              <div className="connect-with-us-container">
                <div className="c-social-media">
                  <div className="c-facebook">
                    <a href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
                    rel="noreferrer"
                    target="_blank">
                      <FontAwesomeIcon icon={faFacebook}  size="2x"/>
                    </a>
                  </div>
                  <div className="c-instagram">
                    <a href="https://www.instagram.com/dietrich_landcarellc/"
                    rel="noreferrer"
                    target="_blank">
                      <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                  </div>
                  <div className={classnames("c-twitter", { "thing": false })}>
                    <a href="/">
                      <FontAwesomeIcon icon={faTwitter} size="2x"/>
                    </a>
                  </div>
                </div>
              </div>


              <div className="c-contact-form">

                <ServicesCheckbox change={ targetValue => {
                            this.setState({ service: targetValue})
                        }}/> {"service" in this.state.error && <p className="error-message">{this.state.error.service.join(",")}</p>}

                <form onSubmit={this.onSubmit.bind(this)}>
                  <div className="grid-one">
                    
                    <div className={classnames("c-fields", { "filled": this.state.firstName !== "" })}>
                      <label htmlFor="firstName">First Name</label>
                      <input
                        onFocus={this.onInputFocus.bind(this)}
                        onBlur={this.onInputBlur.bind(this)}
                        id="firstName"
                        value={this.state.firstName}
                        onChange={(event) => {
                          this.setState({ firstName: event.target.value });
                        }}
                      /> {"firstName" in this.state.error && <p className="error-message">{this.state.error.firstName.join(",")}</p>}
                    </div>

                    <div className={classnames("c-fields", { "filled": this.state.lastName != "" })}>
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        onFocus={this.onInputFocus.bind(this)}
                        onBlur={this.onInputBlur.bind(this)}
                        id="lastName"
                        value={this.state.lastName}
                        onChange={(event) => {
                          this.setState({ lastName: event.target.value})
                        }}
                      /> {"lastName" in this.state.error && <p className="error-message">{this.state.error.lastName.join(",")}</p>}
                      
                    </div>

                  </div>
                      
                  <div className="grid-two">
                      
                    <div className={classnames("c-fields", { "filled": this.state.email != "" })}>
                      <label htmlFor="Email">Email</label>
                      <input
                        onFocus={this.onInputFocus.bind(this)}
                        onBlur={this.onInputBlur.bind(this)}
                        id="Email"
                        value={this.state.email}
                        onChange={(event) => {
                          this.setState({ email: event.target.value });
                        }}
                      /> {"email" in this.state.error && <p className="error-message">{this.state.error.email.join(",")}</p>}
                    </div>

                    <div className={classnames("c-fields", { "filled": this.state.phone != "" })}>
                      {" "}
                      <label htmlFor="Phone">Phone</label>
                      <input
                        onFocus={this.onInputFocus.bind(this)}
                        onBlur={this.onInputBlur.bind(this)}
                        id="Phone"
                        value={this.state.phone}
                        onChange={(event) => {
                          this.setState({ phone: event.target.value });
                        }}
                      />{"phone" in this.state.error && <p className="error-message">{this.state.error.phone.join(",")}</p>}
                    </div>
                  
                  </div>
                  <div className="message-container">
                      <div className="message-text" className={classnames("c-fields", { "filled": this.state.message != "" })}>
                        <label htmlFor="Message">Message</label>
                        <textarea id="textarea-responsive" value= {this.state.message}
                          onFocus={this.onInputFocus.bind(this)}
                          onBlur={this.onInputBlur.bind(this)}
                          id="Message"
                          onChange={(event) => {
                            this.setState({ message: event.target.value });
                          }}
                        >
                        </textarea> 
                        {"message" in this.state.error && <p className="error-message">{this.state.error.message.join(",")}</p>}
                      </div>
                  

                      <div className="contact-submit-btn">
                        <button className="c-btn">Submit</button>
                      </div>
                  </div>
                

                

                </form>

              </div>
            </div>
            
          </div>

        </div>
      </div>
    )
  }

  onSubmit(event) {
    event.preventDefault()
    
    const validator = new Validator(this.state, { 
      firstName: "required",
      lastName: "required",
      email: "required|email", 
      phone: "required",
      service: "required",
      message: "required"
    }, {"required.firstName": "The first name field is required", "required.lastName": "The last name field is required"} )
   if(validator.passes()) {
     axios.post("http://localhost:3300/contact", this.state) 
     .then( response => alert("message was sent"))             
     .catch(err => {
       if(err.response.status === 400) {  
       } else {
         alert("some error happened")
       }
     })                                                      
   } else {
       this.setState({error: validator.errors.errors})
   }
  }

  onInputFocus(event) {
    event.target.previousElementSibling.classList.add("focus");
  }
  onInputBlur(event) {
    event.target.previousElementSibling.classList.remove("focus");
  }

}



