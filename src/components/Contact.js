import React from "react"; 
import "../styles/Contact.scss";
import Footer from "./Footer";
import Radio from "./Radio"; 
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

import classnames from "classnames";
import axios from "axios";
export default class Contact extends React.Component {
  constructor(props) { /* you only need the constructor function if you need to override something from the React Component  */
    super(props);
    this.state = { firstName: "", lastName: "", email: "", phone: "", message: "" };
  }
  render() {
    return (
        <>
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
                <img src="/images/location.png" className="c-info-icons" />
                <p>Baltimore, MD 21239</p>
              </li>
              <li className="c-information">
                <img src="/images/phone.png" className="c-info-icons" />
                <p>(443) 608-3258</p>
              </li>
              <li className="c-information">
                <img src="/images/email.png" className="c-info-icons" />
                <p>office@dietrichlandcare.com</p>
              </li>
            </ul>
          </div>
          <p className="c-paragraph">Connect With Us</p>
          <div className="c-social-media">
            <div className="c-facebook">
              <a
                href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="c-instagram">
              <a
                href="https://www.instagram.com/dietrich_landcarellc/"
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
        </div></div>
            <div className="col-md-6"><div className="c-contact-form">
              <h4 className="c-title-contact">Contact Us</h4>
              <form onSubmit={this.onSubmit.bind(this)}>
              {" "}
              
              {/*onSubmit is an event that calls to the back end */}
              <div className="grid-one">
                <div className={classnames("c-fields", { "filled": this.state.firstName != ""})}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    onFocus={this.onInputFocus.bind(this)}
                    onBlur={this.onInputBlur.bind(this)}
                    id="firstName"
                    value={this.state.firstName}
                    onChange={(event) => {
                      this.setState({ firstName: event.target.value });
                    }}
                  />
                </div>
                <div className={classnames("c-fields", { "filled": this.state.lastName != ""})}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    onFocus={this.onInputFocus.bind(this)}
                    onBlur={this.onInputBlur.bind(this)}
                    id="lastName"
                    value={this.state.lastName}
                    onChange={(event) => {
                      this.setState({ lastName: event.target.value})
                    }}
                  />
                </div>
              </div>
              <div className="grid-two">
                <div className={classnames("c-fields", { "filled": this.state.email != ""})}>
                  <label htmlFor="Email">Email</label>
                  <input
                    onFocus={this.onInputFocus.bind(this)}
                    onBlur={this.onInputBlur.bind(this)}
                    id="Email"
                    value={this.state.email}
                    onChange={(event) => {
                      this.setState({ email: event.target.value });
                    }}
                  />
                </div>
                <div className={classnames("c-fields", { "filled": this.state.phone != ""})}>
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
                    />
                  </div>
                </div>
                <div className="contact-radio-wrapper">
                    <Radio />
                </div>
                  <div className="message">
                    <div className={classnames("c-fields", { "filled": this.state.message != ""})}>
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
                    </div>
                    <div className="contact-submit-btn">
                      <button className="c-btn">Submit</button>
                    </div>
                    </div>
                  <div>
            </div>
          </form>
        </div>
    
      </div>
      </div>
      </div>
      <Footer />
    </div>
    </>
    );
  }
  onSubmit(event) {
    event.preventDefault()
    axios.defaults.headers.common['project']         = 'HELBOR';
    axios.defaults.headers.common['key']             = 'uZBBaTYzk2dr9Q5nF8SLW2Df0V4RPQWs9zK0vcie';
    axios.post("http://api.corretoron.com.br/auth", { 
      email:this.state.email, 
      password:this.state.username
    }).then(response => {
      console.log(response.data)
      alert("login successful")
    }).catch(error => {
      console.log(error)
      alert("password incorrect")
    })
      
  //   fetch("http://api.dietrich.landcare.database")
  // .then(response => response.json())
  // .then(data => { console.log(data) } )
  }
  onInputFocus /*onInputFocus is a method*/(event) {
    event.target.previousElementSibling.className = "focus";
  }
  onInputBlur(event) {
    event.target.previousElementSibling.className = "";
  }
}
