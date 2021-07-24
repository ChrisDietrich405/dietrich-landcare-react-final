import React from "react"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCashRegister, faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

import classnames from "classnames";
import axios from "axios";
import * as Validator from 'validatorjs';

import Footer from "./Footer";
import Radio from "./Radio"; 

import "../styles/Contact.scss";
export default class Contact extends React.Component {
  constructor(props) { /* you only need the constructor function if you need to override something from the React Component  */
    super(props);
    this.state = { firstName: "", lastName: "", email: "", phone: "", message: "", service: "", error: {}};
  }
  render() {
    return (
        <div className="viewport">

          <div className="container">
            <div className="row row-container">
              <div className="col-md-6 col-md-">
                <div className="c-form">
                  
                  <div className="c-contact-info">
                    <h4 className="c-title">Let's get in touch!</h4>
                    <div className="c-text">
                      <p>We are available by phone,</p>
                      <p>Monday-Saturday 7am-7:30 pm.</p>
                    </div>
                    <ul className="c-info">
                      <li className="c-information">
                        <img alt="Location" src="/images/location.png" className="c-info-icons" />
                        <p>Baltimore, MD 21239</p>
                      </li>
                      <li className="c-information">
                        <img alt="Phone" src="/images/phone.png" className="c-info-icons" />
                        <p>(443) 608-3258</p>
                      </li>
                      <li className="c-information">
                        <img alt="Email" src="/images/email.png" className="c-info-icons" />
                        <p>office@dietrichlandcare.com</p>
                      </li>
                    </ul>
                  </div>
            
                  <p className="c-paragraph">Connect With Us</p>
                  <div className="c-social-media">
                    <div className="c-facebook">
                      <a
                        href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </div>
                    <div className="c-instagram">
                      <a
                        href="https://www.instagram.com/dietrich_landcarellc/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                    <div className={classnames("c-twitter", { "thing": false })}>
                      <a href="/">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              
              <div className="col-md-6">
                <div className="c-contact-form">
                  <h4 className="c-title-contact">Contact Us</h4>
                  <form onSubmit={this.onSubmit.bind(this)}>
                    {/*onSubmit is an event that calls to the back end */}
                    <div className="grid-one">
                      
                      <div className={classnames("c-fields", { "filled": this.state.firstName != "" })}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                          onFocus={this.onInputFocus.bind(this)}
                          onBlur={this.onInputBlur.bind(this)}
                          id="firstName"
                          value={this.state.firstName}
                          onChange={(event) => {
                            this.setState({ firstName: event.target.value });
                          }}
                        /> {"firstName" in this.state.error && <p>{this.state.error.firstName.join(",")}</p>}
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
                        /> {"lastName" in this.state.error && <p>{this.state.error.lastName.join(",")}</p>}
                        {/* checking to see if the error property includes the lastName property */}
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
                        /> {"email" in this.state.error && <p>{this.state.error.email.join(",")}</p>}
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
                        />{"phone" in this.state.error && <p>{this.state.error.phone.join(",")}</p>}
                      </div>
                  
                    </div>
                      
                    <div className="contact-radio-wrapper">
                        <Radio onChange={ service => {
                            this.setState({ service: service })
                        }}/> {"service" in this.state.error && <p>{this.state.error.service.join(",")}</p>}
                    </div>
                      
                    <div className="message">
                      
                      <div className={classnames("c-fields", { "filled": this.state.message != "" })}>
                        <label htmlFor="Message">Message</label>
                        <textarea value= {this.state.message}
                          onFocus={this.onInputFocus.bind(this)}n
                          onBlur={this.onInputBlur.bind(this)}
                          id="Message"
                          onChange={(event) => {
                            this.setState({ message: event.target.value });
                          }}
                        >
                        </textarea> 
                        {"message" in this.state.error && <p>{this.state.error.message.join(",")}</p>}
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

        <Footer />

      </div>
    );
  }

  onSubmit(event) {
    event.preventDefault()
    
    const validator = new Validator(this.state, { //validating the state which includes all the properties 
      firstName: "required",
      lastName: "required",
      email: "required|email", //required is one validator, email is another validator and we could add more
      // for example max 
      phone: "required",
      service: "required",
      message: "required"
    })
   if(validator.passes()) {
     axios.post("http://localhost:3300/contact", this.state) //when you use post the second argument is the data
     .then( response => alert("message was sent"))              //being sent
     .catch(err => {
       if(err.response.status === 400) {  //400 is a validation error 
         this.setState({error: err.response.data}) //for example "first name wasn't entered"
       } else {
         alert("some error happened")
       }
     })                                                      
   } else {
       this.setState({error: validator.errors.errors})
   }
  }
  onInputFocus(event) {
    event.target.previousElementSibling.className = "focus";
  }
  onInputBlur(event) {
    event.target.previousElementSibling.className = "";
  }
}
