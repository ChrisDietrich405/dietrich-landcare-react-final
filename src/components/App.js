import React from "react" /*"react is a module" */;
import {
  BrowserRouter as Router,
  Switch /* switch is a component that switches the routes */,
  Route /* route is a path */,
  Link /* link links a href paths internally (never outside) */,
} from "react-router-dom"; /* rrd is a package that allows you to create navigation in a react application */
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap'  //bootstrap uses popperjs 

import Header from "./Header";
import Testimonials from "./Testimonials";
import BeforeandAfter from "./BeforeandAfter";
import HomePage from "./HomePage";
import Contact from "./Contact";
import Footer from "./Footer"

import TreeTrimming from "./TreeTrimming"; 
import LawnCare from "./LawnCare"
import PowerWashing from "./PowerWashing";
import SnowRemoval from "./SnowRemoval";
import StumpRemoval from "./StumpRemoval";
import Demolition from "./Demolition";
import Regrades from "./Regrades";
// import 'bootstrap/dist/css/bootstrap.css'


import "../styles/App.scss";
import "../styles/Header.scss";
import "../styles/SlideShow.scss"; 
import "../styles/HomePage.scss";
import "../styles/TreeTrimming.scss"; 


export default /*export default is a key word to export modules*/ function App() {
  return (
    <Router>
      {/*router is a component of the React router library */}
      <div className="App">
      <Header/>  
        <Switch> 
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
          <Route path="/beforeAndAfter" component={BeforeandAfter} />
          <Route path="/LawnCare" component={LawnCare} />
          <Route path="/PowerWashing" component={PowerWashing} />
          <Route path="/SnowRemoval" component={SnowRemoval} />
          <Route path="/StumpRemoval" component={StumpRemoval} />
          <Route path="/Demolition" component={Demolition} />
          <Route path="/Regrades" component={Regrades} />
        </Switch>
      </div>
    </Router>
  );
} /*at the moment you export a block of code it becomes a module */


