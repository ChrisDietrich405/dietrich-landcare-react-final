import React, {Component} from "react";
import "../styles/Radio.scss";

class App extends Component{
  state = {
    value : "odin"
  }

  onChange = e => {
    this.setState({value : e.target.value})
  }
  
  render() {
    const {value} = this.state; 
    return (
      <div className="contact-radio-btn">
          <p>What services are you interested in?</p>
          <label className="contact-label">
            <input type="radio"
                   value="tree"
                   checked={value === "tree"}
                   onChange={this.onChange}/>
            Tree
          </label>
          <label className="contact-label">
            <input type="radio"
                   value="trash"
                   checked={value === "trash"}
                   onChange={this.onChange}/>
            Trash
          </label> 
          <label className="contact-label">
            <input type="radio"
                   value="lawn"
                   checked={value === "lawn"}
                   onChange={this.onChange}/>
            Lawn
          </label>
          <label className="contact-label">
            <input type="radio"
                   value="install"
                   checked={value === "install"}
                   onChange={this.onChange}/>
            Install
          </label> 
      </div>
    )
  }
}


export default App;