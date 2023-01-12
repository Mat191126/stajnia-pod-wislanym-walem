import React from "react";
import { Helmet } from 'react-helmet-async';
import Header from "./components/shared/Header";
import Contact from "./components/contact/Contact";
import News from "./components/news/News";
import SingleNews from "./components/news/SingleNews";
import Home from "./components/home/Home";
import Prices from "./components/prices/Prices";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollRestoration from "./config/ScrollRestoration";
import Footer from "./components/shared/Footer";
import Gallery from "./components/gallery/Gallery";
import AboutUs from "./components/aboutUs/AboutUs"
import Regulations from "./components/regulations/Regulations";

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>Pod wislanym walem</title>
        <link href='http://fonts.googleapis.com/css?family=Akaya+Kanadaka&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
        <link href='http://fonts.googleapis.com/css?family=Arima+Madurai&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/news" component={News} />
        <Route exact path="/single-news/:id" component={SingleNews} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/prices" component={Prices} />
        <Route exact path="/regulations" component={Regulations} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
