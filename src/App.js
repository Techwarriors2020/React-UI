import React from "react";
//will add for production
// import Kutumb from "kutumb-style";
//for local dev css
import Style from './styles/main.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayOut from "./common-components/layout.component";
import Header from "./common-components/Header.component";
import Footer from "./common-components/Footer.component";
import RegistrationModule from "../src/modules/registration/container";
import LoginModule from "../src/modules/login/container";
import LandingPage from "../src/modules/landingpage/container";

function App() {
  // console.log('kutumb css' + Kutumb);
  return (
    <LayOut>
      <Header className="ekutumb-col-12">Header</Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <RegistrationModule />
          </Route>
          <Route path="/signUp">
            <RegistrationModule />
          </Route>
          <Route path="/login">
            <LoginModule />
          </Route>
          <Route path="/landingpage">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
      <Footer className="ekutumb-col-12">Footer</Footer>
    </LayOut>
  );
}

export default App;
