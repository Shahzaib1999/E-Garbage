import React, { Component } from 'react';
import './App.css';
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SignUp from "./components/User/SignUp";


const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router history={customHistory}>
        <div>
          <Navbar />
          {/* <Home /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/User/SignUp" component={SignUp} />
          {/* <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Meetings" component={Meetings} />
          <Route path="/Requests" component={Requests} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Picture" component={Picture} />
          <Route path="/Data" component={Data} /> */}
          {/* <Route path="/" Component={} />*/}
        </div> 
      </Router>
    </Provider>
    );
  }
}

export default App;
