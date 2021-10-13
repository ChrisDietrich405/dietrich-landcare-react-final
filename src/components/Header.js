import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { Dropdown } from "bootstrap";

export default class Header extends React.Component {
  toMouseLeave = null;
  constructor(props) {
    super(props);
    this.navbarDropdown = React.createRef();
  }

  navbarDropdownMouseEnter() {
    clearTimeout(this.toMouseLeave);
    this.getDropdown().show();
  }

  navbarMouseLeave() {
    clearTimeout(this.toMouseLeave);
    this.toMouseLeave = setTimeout(() => this.getDropdown().hide(), 500);
  }

  navbarMouseEnter() {
    clearTimeout(this.toMouseLeave);
  }

  getDropdown() {
    return new Dropdown(this.navbarDropdown.current);
  }

  render() {
    return (
      <nav
        onMouseLeave={this.navbarMouseLeave.bind(this)}
        onMouseEnter={this.navbarMouseEnter.bind(this)}
        className="navbar navbar-expand-lg"
      >
        <div className="container-fluid">
          <a className="navbar-brand"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  ref={this.navbarDropdown}
                  role="button"
                  onMouseEnter={this.navbarDropdownMouseEnter.bind(this)}
                  onMouseLeave={this.navbarMouseLeave.bind(this)}
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Services
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  onMouseEnter={this.navbarDropdownMouseEnter.bind(this)}
                  onMouseLeave={this.navbarMouseLeave.bind(this)}
                >
                  <li>
                    <Link
                      to={{
                        pathname: "/services",
                        state: "lawn-care",
                      }}
                      className="dropdown-item"
                    >
                      Lawn Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/services",
                        state: "power-washing",
                      }}
                      className="dropdown-item"
                    >
                      Power Washing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/services",
                        state: "snow-removal",
                      }}
                      className="dropdown-item"
                    >
                      Snow Removal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/services",
                        state: "stump-removal",
                      }}
                      className="dropdown-item"
                    >
                      Stump Removal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/services",
                        state: "demolition",
                      }}
                      className="dropdown-item"
                    >
                      Demolition & Hauling
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/services",
                        state: "regrades",
                      }}
                      className="dropdown-item"
                    >
                      Regrades
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/testimonials" className="nav-link">
                  Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a
                  className="nav-link phone"
                  href="tel:3457655555"
                >
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>{" "}
                  (443) 608-3258
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/dietrich_landcarellc/"
                  target="_blank"
                >
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

// import React from "react";
// import { Link, BrowserRouter as Router } from "react-router-dom";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { HashLink } from "react-router-hash-link";
// import { Dropdown } from "bootstrap";
// export default class Header extends React.Component {
// 	bsNavbarDropdown = null;
// 	constructor(props) {
// 		super(props);
// 		this.navbarDropdown = React.createRef();
// 		this.ulNavbarDropdown = React.createRef();
// 		this.navbar = React.createRef();
// 	}

// 	componentDidMount() {
// 		this.bsNavbarDropdown = new Dropdown(this.navbarDropdown);
// 		let toMouseLeave;
// 		this.navbarDropdown.current.addEventListener("mouseover", () => {
// 			clearTimeout(toMouseLeave);
// 			this.bsNavbarDropdown.show();
// 		});

// 		Array.from([
// 			this.navbarDropdown.current.parentElement,
// 			this.ulNavbarDropdown.current,
// 			this.navbar.current,

// 		]).forEach((element) => {
// 			element?.addEventListener("mouseleave", () => {
// 				toMouseLeave = setTimeout(
// 					() => this.bsNavbarDropdown.hide(),
// 					200
// 				);
// 			});
// 		});

// 		Array.from([
// 			this.ulNavbarDropdown.current,
// 			this.navbar.current,
// 		]).forEach((element) => {
// 			element?.addEventListener("mouseover", () => {
// 				clearTimeout(toMouseLeave);
// 			});
// 		});
// 	}

// 	render() {
// 		return (
// 			<nav ref={this.navbar} className="navbar navbar-expand-lg">
// 				<div className="container-fluid">
// 					<a className="navbar-brand"></a>
// 					<button
// 						className="navbar-toggler"
// 						type="button"
// 						data-bs-toggle="collapse"
// 						data-bs-target="#navbarSupportedContent"
// 						aria-controls="navbarSupportedContent"
// 						aria-expanded="false"
// 						aria-label="Toggle navigation"
// 					>
// 						<FontAwesomeIcon icon={faBars} />
// 					</button>
// 					<div
// 						className="collapse navbar-collapse"
// 						id="navbarSupportedContent"
// 					>
// 						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
// 							<li className="nav-item">
// 								<Link to="/" className="nav-link">
// 									Home
// 								</Link>
// 							</li>
// 							<li className="nav-item dropdown">
// 								<a
// 									className="nav-link dropdown-toggle"
// 									href="#"
// 									ref={this.navbarDropdown}
// 									id="navbarDropdown"
// 									role="button"
// 									data-bs-toggle="dropdown"
// 									aria-expanded="false"
// 								>
// 									Services
// 								</a>
// 								<ul
// 									ref={this.ulNavbarDropdown}
// 									className="dropdown-menu"
// 									aria-labelledby="navbarDropdown"
// 								>
// 									<li>
// 										<Link
// 											to={{
// 												pathname: "/services",
// 												state: "lawn-care",
// 											}}
// 											className="dropdown-item"
// 										>
// 											Lawn Care
// 										</Link>
// 									</li>
// 									<li>
// 										<Link
// 											to={{
// 												pathname: "/services",
// 												state: "power-washing",
// 											}}
// 											className="dropdown-item"
// 										>
// 											Power Washing
// 										</Link>
// 									</li>
// 									<li>
// 										<Link
// 											to={{
// 												pathname: "/services",
// 												state: "snow-removal",
// 											}}
// 											className="dropdown-item"
// 										>
// 											Snow Removal
// 										</Link>
// 									</li>
// 									<li>
// 										<Link
// 											to={{
// 												pathname: "/services",
// 												state: "stump-removal",
// 											}}
// 											className="dropdown-item"
// 										>
// 											Stump Removal
// 										</Link>
// 									</li>
// 									<li>
// 										<Link
// 											to={{
// 												pathname: "/services",
// 												state: "demolition",
// 											}}
// 											className="dropdown-item"
// 										>
// 											Demolition & Hauling
// 										</Link>
// 									</li>
// 									<li>
// 										<Link
// 											to={{
// 												pathname: "/services",
// 												state: "regrades",
// 											}}
// 											className="dropdown-item"
// 										>
// 											Regrades
// 										</Link>
// 									</li>
// 								</ul>
// 							</li>
// 							<li className="nav-item">
// 								<Link to="/testimonials" className="nav-link">
// 									Testimonials
// 								</Link>
// 							</li>
// 							<li className="nav-item">
// 								<Link to="/contact" className="nav-link">
// 									Contact
// 								</Link>
// 							</li>
// 						</ul>
// 						<ul className="nav justify-content-end">
// 							<li className="nav-item">
// 								<a
// 									className="nav-link phone"
// 									href="tel:3457655555"
// 								>
// 									<span>
// 										<FontAwesomeIcon icon={faPhone} />
// 									</span>{" "}
// 									(443) 608-3258
// 								</a>
// 							</li>
// 							<li className="nav-item">
// 								<a
// 									className="nav-link"
// 									href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
// 									target="_blank"
// 								>
// 									<FontAwesomeIcon icon={faFacebook} />
// 								</a>
// 							</li>
// 							<li className="nav-item">
// 								<a
// 									className="nav-link"
// 									href="https://www.instagram.com/dietrich_landcarellc/"
// 									target="_blank"
// 								>
// 									<FontAwesomeIcon icon={faInstagram} />
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 			</nav>
// 		);
// 	}
// }
