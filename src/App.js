import React from 'react';
import Kutumb from 'kutumb-style';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import LayOut from '../src/commonComponents/layout.component';  
import RegistrationModule from '../src/modules/registration/container';
import LoginModule from '../src/modules/login/container';
import LandingPage from '../src/modules/landingpage/container';
function App() {
 // console.log('kutumb css' + Kutumb);
  return (
    

<LayOut>
<Router>
<Switch>
          <Route exact path="/">
            <RegistrationModule />
          </Route>
         <Route path="/signUp">
            <RegistrationModule />
          </Route>
          <Route path="/login">
            <LoginModule/>
          </Route>
          <Route path="/landingpage">
            <LandingPage/>
          </Route>
        </Switch>
   </Router>
</LayOut>
  
  );
}

export default App;
