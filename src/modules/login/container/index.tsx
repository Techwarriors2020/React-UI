import React, {useState, useReducer, useContext} from 'react';
import LoginComp from '../components';
import UserLoginService from "../../../services/api/login-api.service";
import { BrowserRouter as Router,Redirect, Switch, Route, Link } from "react-router-dom";
import LandingPage from "../../landingpage/container";
import { connect } from 'react-redux';
import reducer, {initialState} from '../../../reducer';

interface LoginPayload {
  email?: string;
  password?: string;
}
const Login = ({...props}) => {
 
    const [error, setError] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);
    const loginUser = (payload: LoginPayload) => {
      UserLoginService.loginUser(payload)
      .then((response) => {
        if (response && response.data && response.data.code === "5000") {
          console.log("Response", response.data.message);
          dispatch({type:'AUTH_SUCCESS'});
        }
      })
      .catch((error) => {
        dispatch({type:'AUTH_FAIL'});
        setError(error?.response?.data?.message);
      });
    };
    return <div>
      {state.isAuthenticated ?
      <Redirect to="/landingPage" /> : 
      <LoginComp login={loginUser} error={error}></LoginComp>}
    </div>
};
export default Login;