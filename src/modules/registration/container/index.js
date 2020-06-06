import React, { useState } from "react";
import RegistrationComp from "../components";
import UserRegistrationService from "../../../services/api/registration-api.service";

const Registration = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState({});
  
  const registerUser = (payload) => {
    UserRegistrationService.registerUser(payload)
      .then((response) => {
        if (response && response.data && response.data.code === "5000") {
          console.log(response.data.message);
          setSuccess({
            message: response.data.message,
            email: response.data.email,
          });
        }
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
      });
  };

  return (
    <div>
      <RegistrationComp
        registerUser={registerUser}
        error={error}
        success={success}
      ></RegistrationComp>
    </div>
  );
};
export default Registration;
