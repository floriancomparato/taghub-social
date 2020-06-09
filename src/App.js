import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* imports components */
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Wall from "./Components/Wall/Wall";
import Login from "./Components/Login/Login";
import Contact from "./Components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Navbar">
          <Navbar />
        </div>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
          <Route path="/wall" component={Wall} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
