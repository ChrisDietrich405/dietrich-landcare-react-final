//create one page for services, create a call to action
//the cta would direct to his most direct communication
//add Services title

//fix the arrow on services 


import React from "react" /*"react is a module" */;
import {
  BrowserRouter as Router,
  Switch /* switch is a component that switches the routes */,
  Route /* route is a path */,
  Link /* link links a href paths internally (never outside) */,
} from "react-router-dom"; /* rrd is a package that allows you to create navigation in a react application */
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap'  //bootstrap uses popperjs 
import {Helmet} from "react-helmet";


import Header from "./Header";
import Testimonials from "./Testimonials";
import BeforeandAfter from "./BeforeandAfter";
import HomePage from "./HomePage";
import Contact from "./Contact";
import Footer from "./Footer"
import SmoothScroll from "./SmoothScroll"

 
import Services from "./Services"

// import 'bootstrap/dist/css/bootstrap.css'

import "../styles/App.scss";
import "../styles/Header.scss";
import "../styles/SlideShow.scss"; 
import "../styles/HomePage.scss";


export default /*export default is a key word to export modules*/ function App() {
  return (
    <Router>
      {/*router is a component of the React router library */}
      <div className="App">
      <Header/>  
        <Helmet>
            <meta charSet="utf-8" />
            <title>Dietrich Landcare</title>
            <meta name="Dietrich Landcare Title" content="Helmet application" />
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        
        <Switch> 
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
          <Route path="/beforeAndAfter" component={BeforeandAfter} />
          <Route path="/services" component={Services} />
        </Switch>
      </div>
      <SmoothScroll />
      <Footer/>
    </Router>
  );
} /*at the moment you export a block of code it becomes a module */


