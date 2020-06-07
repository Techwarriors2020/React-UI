import React, { useContext, createContext, useReducer } from 'react';
//will add for production
// import Kutumb from "kutumb-style";
//for local dev css
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayOut from "./common-components/layout.component";
import Header from "./common-components/Header.component";
import Footer from "./common-components/Footer.component";
import RegistrationModule from "../src/modules/registration/container";
import LoginModule from "../src/modules/login/container";
import LandingPage from "../src/modules/landingpage/container";
import GamePage from "../src/modules/gamePage";
import reducer, {initialState} from './reducer';
import './styles/main.css';

function App({...props}) {
  // console.log('kutumb css' + Kutumb);
  props.isUserAuthenticated=false;
  const Context = createContext(initialState);
  const [state, dispatch] = useReducer(reducer, initialState);
  const data=useContext(Context);
  console.log(data);
  
  return (
    <Context.Provider value={[state, dispatch]}>
    <LayOut>
      <Header className="ekutumb-col-12">Header</Header>
      {console.log(state)}
      <Router>
        <Switch>
          <Route exact path="/">
            <RegistrationModule />
          </Route>
          <Route path="/signUp">
            <RegistrationModule />
          </Route>
          <Route path="/login">
           <LoginModule isAuthenticated={data} />
           </Route>
          <Route path="/landingpage">
          <LandingPage />
          </Route>
          <Route path="/gamePage">
          <GamePage />
          </Route>
        </Switch>
      </Router>
      <Footer className="ekutumb-col-12">Footer</Footer>
    </LayOut>
    </Context.Provider>
   
  );
}

export default App;
