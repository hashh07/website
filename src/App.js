import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import {BrowserRouter} from "react-router-dom";
import Footer from "./Footer";


import { Switch, Route, Redirect} from "react-router-dom";

const App = () => {
  return (

    <div>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Service" component={Service} />
    <Route exact path="/Contact" component={Contact} />
    <Redirect to = "/" />   

    
    </Switch>
     <Footer/>
    </div>
    );
};

export default App;