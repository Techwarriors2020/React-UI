import React, {useState, useReducer} from 'react';
import LoginComp from '../components';
import UserLoginService from "../../../services/api/login-api.service";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import reducer, {initialState} from '../../../reducer';

interface LoginPayload {
  email?: string;
  password?: string;
}
const Login = () => {
 
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