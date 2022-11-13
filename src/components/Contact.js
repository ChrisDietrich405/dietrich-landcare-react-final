import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { AiFillInstagram } from "react-icons/ai";
import classnames from "classnames";
import * as Validator from "validatorjs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServicesCheckbox from "./ServicesCheckbox";

import "../styles/Contact.scss";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      service: "",
      error: {},
    };
  }

  render() {
    return (
      <div className="contact-viewport">
        <div className="contact-header">
          <h1 className="contact-title">Let's get in touch!</h1>
          <hr className="contact-line" />
          <p>We are available by phone: Monday-Saturday 7am-7:30 pm.</p>
        </div>

        <ul className="contact-info">
          <li className="contact-information">
            <span className="icon-phone contact-info-icons"></span>
            <p>(443) 608-3258</p>
          </li>
          <li className="contact-information">
            <span className="icon-mail3 contact-info-icons"></span>

            <p>office@dietrichlandcare.com</p>
          </li>
          <li className="contact-information">
            <span className="icon-location2 contact-info-icons"></span>

            <p>Baltimore, MD 21239</p>
          </li>
        </ul>

        <div className="contact-social-media">
          <div className="contact-facebook">
            <a
              href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
          <div className="contact-instagram">
            <a
              href="https://www.instagram.com/dietrich_landcarellc/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillInstagram size={40} />
            </a>
          </div>
          <div className={classnames("contact-twitter", { thing: false })}>
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>

        <div className="contact-services">
          <ServicesCheckbox
            change={(targetValue) => {
              this.setState({ service: targetValue });
            }}
          />{" "}
          <div className="contact-form">
            {"service" in this.state.error && (
              <p className="error-message">
                {this.state.error.service.join(",")}
              </p>
            )}
          </div>
          <form
            className="contact-form-container"
            onSubmit={this.onSubmit.bind(this)}
          >
            <div className="contact-form-inputs">
              <div className="contact-form-section">
                <div
                  className={classnames("contact-fields", {
                    filled: this.state.firstName !== "",
                  })}
                >
                  <label htmlFor="firstName">First Name</label>
                  <div className="input-container">
                    <input
                      onFocus={this.onInputFocus.bind(this)}
                      onBlur={this.onInputBlur.bind(this)}
                      id="firstName"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={(event) => {
                        this.setState({ firstName: event.target.value });
                      }}
                    />{" "}
                    {"firstName" in this.state.error && (
                      <p className="error-message">
                        {this.state.error.firstName.join(",")}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={classnames("contact-fields", {
                    filled: this.state.lastName !== "",
                  })}
                >
                  <label htmlFor="lastName">Last Name</label>
                  <div className="input-container">
                    <input
                      onFocus={this.onInputFocus.bind(this)}
                      onBlur={this.onInputBlur.bind(this)}
                      id="lastName"
                      value={this.state.lastName}
                      onChange={(event) => {
                        this.setState({ lastName: event.target.value });
                      }}
                    />{" "}
                    {"lastName" in this.state.error && (
                      <p className="error-message">
                        {this.state.error.lastName.join(",")}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={classnames("contact-fields", {
                    filled: this.state.email !== "",
                  })}
                >
                  <label htmlFor="Email">Email</label>
                  <div className="input-container">
                    <input
                      onFocus={this.onInputFocus.bind(this)}
                      onBlur={this.onInputBlur.bind(this)}
                      id="Email"
                      value={this.state.email}
                      onChange={(event) => {
                        this.setState({ email: event.target.value });
                      }}
                    />{" "}
                    {"email" in this.state.error && (
                      <p className="error-message">
                        {this.state.error.email.join(",")}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={classnames("contact-fields", {
                    filled: this.state.phone !== "",
                  })}
                >
                  {" "}
                  <label htmlFor="Phone">Phone</label>
                  <div className="input-container">
                    <input
                      onFocus={this.onInputFocus.bind(this)}
                      onBlur={this.onInputBlur.bind(this)}
                      id="Phone"
                      value={this.state.phone}
                      onChange={(event) => {
                        this.setState({ phone: event.target.value });
                      }}
                    />
                    {"phone" in this.state.error && (
                      <p className="error-message">
                        {this.state.error.phone.join(",")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="contact-form-section">
                <div
                  className={classnames("message-text", "contact-fields", {
                    filled: this.state.message !== "",
                  })}
                >
                  <label htmlFor="Message">Message</label>
                  <div className="input-container">
                    <textarea
                      id="textarea-responsive"
                      value={this.state.message}
                      onFocus={this.onInputFocus.bind(this)}
                      onBlur={this.onInputBlur.bind(this)}
                      onChange={(event) => {
                        this.setState({ message: event.target.value });
                      }}
                    ></textarea>
                    {"message" in this.state.error && (
                      <p className="error-message">
                        {this.state.error.message.join(",")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button className="contact-submit-btn">Submit</button>
          </form>
        </div>
        <ToastContainer toastStyle={{ color: "red" }} />
      </div>
    );
  }
  onSubmit(event) {
    event.preventDefault();

    const validator = new Validator(
      this.state,
      {
        firstName: "required",
        lastName: "required",
        email: "required|email",
        phone: "required",
        service: "required",
        message: "required",
      },
      {
        "required.firstName": "The name field is required",
        "required.lastName": "The name field is required",
      }
    );
    if (validator.passes()) {
      console.log(this.state);

      const services = this.state.service.join(", ");

      var templateParams = {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        services,
        message: this.state.message,
      };

      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_USER_ID

          // process.env.REACT_APP_SERVICE_ID,
          // process.env.REACT_APP_TEMPLATE_ID,
          // templateParams,
          // process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            console.log("hi Romulo");
            toast.success("Your message was successfully submitted");
          },
          (error) => {
            console.log(error.text);
          }
        );

        this.setState({ firstName: "", lastName: "", email: "",  phone: "", message: "", services });
        document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
      
        // axios
      //   .post("http://localhost:3001/api/contact", this.state)
      //   .then((response) => alert("message was sent"))
      //   .catch((err) => {
      //     console.log(err);
      //   });
    } else {
      this.setState({ error: validator.errors.errors });
    }
  }

  onInputFocus(event) {
    // event.target.parent.previousElementSibling.classList.add("focus");
  }
  onInputBlur(event) {
    // event.target.parent.previousElementSibling.classList.remove("focus");
  }
}
