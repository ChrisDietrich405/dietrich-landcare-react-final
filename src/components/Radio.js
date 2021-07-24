import React, {Component} from "react";
import "../styles/Radio.scss";

class App extends Component{
  state = {
    value : "odin"
  }

  onChange = e => {
    this.setState({value : e.target.value})
    this.props.onChange(e.target.value)
  }
  
  render() {
    const {value} = this.state; 
    return (
      <div className="row radio">
          <p>What services are you interested in?</p>
          <div className="col-6">
            <label className="contact-label">
              <input type="radio"
                     value="tree"
                     checked={value === "tree"}
                     onChange={this.onChange}/>
              Mowing, Lawn & Property Maintenance
            </label>

            <label className="contact-label">
              <input type="radio"
                     value="trash"
                     checked={value === "trash"}
                     onChange={this.onChange}/>
              Power-Washing
            </label> 
         
            <label className="contact-label">
              <input type="radio"
                     value="lawn"
                     checked={value === "lawn"}
                     onChange={this.onChange}/>
              Snow Removal
            </label>
          </div>
          <div className="col-6" style={{display: 'flex', flexDirection: 'column'}}>
            <label className="contact-label">
              <input type="radio"
                     value="install"
                     checked={value === "install"}
                     onChange={this.onChange}/>
              Stump Removal
            </label>
            
            <label className="contact-label">
              <input type="radio"
                    value="install"
                    checked={value === "install"}
                    onChange={this.onChange}/>
              Demolition & Hauling
            </label>
        
            <label className="contact-label">
              <input type="radio"
                    value="install"
                    checked={value === "install"}
                    onChange={this.onChange}/>
              Regrades
            </label>
          </div>
      </div>
    )
  }
}


export default App;