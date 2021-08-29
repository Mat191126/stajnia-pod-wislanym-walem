import React from "react";
import { Helmet} from 'react-helmet-async';
import Header from "./shared/Header";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import News from "./news/News";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ScrollRestoration from "./config/ScrollRestoration";
import Footer from "./shared/Footer";

function App() {
  return (
      <Router>
        <ScrollRestoration />
          <Helmet>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
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
        <Footer />
      </Router>
  );
}

export default App;
