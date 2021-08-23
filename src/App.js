import React from "react";
import {Helmet} from "react-helmet";
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
          <Helmet>
              <meta charSet="utf-8" />
              <title>Pod wislanym walem</title>
              <link href='http://fonts.googleapis.com/css?family=Akaya+Kanadaka&subset=latin,latin-ext' rel='stylesheet' type='text/css'/>
              <link href='http://fonts.googleapis.com/css?family=Arima+Madurai&subset=latin,latin-ext' rel='stylesheet' type='text/css'/>
          </Helmet>
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
