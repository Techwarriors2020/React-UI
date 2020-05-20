import React from 'react';
import Kutumb from 'kutumb-style';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import RegistrationModule from '../src/modules/registration/container';
import LoginModule from '../src/modules/login/container';

function App() {
 // console.log('kutumb css' + Kutumb);
  return (
    <div className="App">
<div className="ekutumb-layout ekutumb-col-10">
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
        </Switch>
   </Router>
</div>
     </div>
  );
}

export default App;
