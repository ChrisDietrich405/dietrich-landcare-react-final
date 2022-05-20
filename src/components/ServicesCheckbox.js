import React, { Component } from "react";
import "../styles/ServicesCheckbox.scss";

class App extends Component {
  state = {
    value: [],
  };

  onChange = (e) => {
    if (!this.state.value.find((element) => element === e.target.value)) {
      const services = [...this.state.value, e.target.value];
      this.setState({
        value: services,
      });
      this.props.change(services);
    }
    if (this.state.value.find((element) => element === e.target.value)) {
      const services = this.state.value.filter(
        (element) => element !== e.target.value
      );
      this.setState({
        value: services,
      });
      this.props.change(services);
    }
  };

  render() {
    const { value } = this.state;
    return (
      <div className="checkbox-container">
        <h3>What services are you interested in?</h3>
        <div className="service-container">
          <div>
            <label className="contact-label">
              <input
                type="checkbox"
                value="property-maintenance"
                className="checkbox-background-color"
                onChange={this.onChange}
              />
              <span>Property Maintenance</span>
            </label>

            <label className="contact-label">
              <input
                type="checkbox"
                value="power-washing"
                className="checkbox-background-color"
                onChange={this.onChange}
              />
              <span>Power-Washing</span>
            </label>
          </div>
          <div>
            <label className="contact-label">
              <input
                type="checkbox"
                value="snow-removal"
                className="checkbox-background-color"
                //  checked={value === "snow-removal"}
                onChange={this.onChange}
              />
              <span>Snow Removal</span>
            </label>
            <label className="contact-label">
              <input
                type="checkbox"
                value="stump-removal"
                className="checkbox-background-color"
                //  checked={value === "stump-removal"}
                onChange={this.onChange}
              />
              <span>Stump Removal</span>
            </label>
          </div>
          <div>
            <label className="contact-label">
              <input
                type="checkbox"
                value="demolition"
                className="checkbox-background-color"
                //  checked={value === "demolition"}
                onChange={this.onChange}
              />
              <span>Demolition & Hauling</span>
            </label>

            <label className="contact-label">
              <input
                type="checkbox"
                value="regrades"
                className="checkbox-background-color"
                onChange={this.onChange}
              />
              <span>Regrades</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
