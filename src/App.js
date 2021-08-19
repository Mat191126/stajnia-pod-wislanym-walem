import React from "react";
import Header from "./shared/Header";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import News from "./news/News";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ScrollRestoration from "./config/ScrollRestoration";

function App() {
  return (
      <Router>
        <ScrollRestoration />
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/news" component={News}/>
        </Switch>
      </Router>
  );
}

export default App;
