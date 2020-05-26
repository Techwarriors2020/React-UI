import React from "react";
import Button from "../../../stories/components/atoms/button/button";
import Field from "../../../stories/components/atoms/field/field";
import {
  mandatoryValidation,
  emailValidation,
} from "../../../utils/validation.util";

interface ILoginProps {
  children?: React.ReactNode;
  error?: String;
  login?: Function;
}

const Login: React.FC<ILoginProps> = ({ error, login, children }) => {
  const validationSchema: any = {
    userEmail: [mandatoryValidation, emailValidation],
    userPassword: [mandatoryValidation],
  };
  const applyValidation = (target: any) => {
    let isError = false;
    if (validationSchema[target.id]) {
      validationSchema[target.id].map((validation: any) => {
        if (validation.type === "passwordmatch") {
          const fieldToCompare: any = document.querySelector(
            "#" + validation.fieldToCompare
          );
          if (
            fieldToCompare &&
            fieldToCompare.value !== target.value &&
            !isError
          ) {
            target.closest(".form-field").querySelector(".error").textContent =
              validation.errorMessage;
            isError = true;
          }
        } else if (!validation.regex.test(target.value) && !isError) {
          target.closest(".form-field").querySelector(".error").textContent =
            validation.errorMessage;
          isError = true;
        }
        if (!isError) {
          target.closest(".form-field").querySelector(".error").textContent =
            "";
        }
      });
    }

    return isError;
  };
  const onFieldBlur = (e: Event) => {
    applyValidation(e.target);
  };
  const submitForm = () => {
    const isValidationFailedArr = Object.keys(validationSchema).map(
      (fieldName) => {
        return applyValidation(document.querySelector("#" + fieldName));
      }
    );
    if (!isValidationFailedArr.includes(true)) {
      const payload = {
        email: (document.querySelector("#userEmail") as HTMLInputElement).value,
        password: (document.querySelector("#userPassword") as HTMLInputElement)
          .value,
      };
      login && login(payload);
    }
  };
  return (
    <div className="registration-page">
      {error && (
        <div className="error" style={{ color: "red" }}>
          {error}
        </div>
      )}

      <div className="form-field">
        <Field
          id="userEmail"
          label="Email Id:"
          fieldType="email"
          handleOnBlur={onFieldBlur}
          name="userEmail"
          includeErrorField={true}
        />
      </div>
      <div className="form-field">
        <Field
          id="userPassword"
          label="Password:"
          fieldType="password"
          name="userPassword"
          handleOnBlur={onFieldBlur}
          includeErrorField={true}
        />
      </div>
      <div className="button form-field">
        <Button onClick={submitForm} classes="ekutumb-btn ekutumb-purple">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
