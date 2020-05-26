import React, {useState} from 'react';
import LoginComp from '../components';
import UserLoginService from "../../../services/api/login-api.service";
interface LoginPayload {
  email?: string;
  password?: string;
}
const Login = () => {
    const [error, setError] = useState("");
    const loginUser = (payload: LoginPayload) => {
      UserLoginService.loginUser(payload)
      .then((response) => {
        if (response && response.data && response.data.code === "5000") {
          console.log("Response", response.data.message);
          // Redirect to Home Page
        }
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
      });
    };
    return <div>
      <LoginComp login={loginUser} error={error}></LoginComp>
    </div>
};
export default Login;