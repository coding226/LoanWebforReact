import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Contact from "../pages/Contact";
import Faqs from "../pages/Faqs";
import Home from "../pages/Home";
import HowItWorks from "../pages/HowItWorks";
import PrivacyRights from "../pages/PrivacyRights";
import Terms from "../pages/Terms";
import Apply from "../pages/Apply";

function RouteConfig() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/privacy-rights" component={PrivacyRights} />
          <Route path="/terms" component={Terms} />
          <Route path="/contact" component={Contact} />
          <Route path="/apply" component={Apply} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default RouteConfig;
