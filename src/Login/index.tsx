import * as React from "react";
import { Formik } from "formik";

import "./login.css";
import FullPageLoader from "../components/FullPageLoader";
import { useNavigate } from "react-router-dom";
import LoginContext from "../context/login.context";

//save user using post
const getUser = async (user: any) => {
  const response = await fetch("http://localhost:3000/users", {
    method: "GET",
  });
  return response.json();
};

function Login() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { setLoggedInUser } = React.useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="LoginFormContainer">
        {isLoading && <FullPageLoader />}
        <h2 className="LoginFormHeading">Login</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          enableReinitialize
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Password is required";
            }

            return errors;
          }}
          onSubmit={async (values) => {
            try {
              setIsLoading(true);
              const response = await getUser(values);
              const user = response.find(
                (u: any) =>
                  u.email === values.email && u.password === values.password
              );
              setLoggedInUser(user);
              setTimeout(() => {
                setIsLoading(false);
                if (user) {
                  navigate("/home");
                }
              }, 2000);
            } catch (error) {
              console.log(error);
              setIsLoading(false);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            dirty,
            isValid,
          }) => {
            return (
              <form className="LoginForm" onSubmit={handleSubmit}>
                <div className="fieldInput">
                  <input
                    className={
                      errors.email && touched.email
                        ? "textInputError"
                        : "textInput"
                    }
                    type="text"
                    name="email"
                    required
                    placeholder="Enter your Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p className="helperText">{errors.email}</p>
                  )}
                </div>
                <div className="fieldInput">
                  <input
                    className={
                      errors.password && touched.password
                        ? "textInputError"
                        : "textInput"
                    }
                    type="password"
                    name="password"
                    required
                    placeholder="Enter your Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <p className="helperText">{errors.password}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className={"loginButton"}
                  disabled={isSubmitting || !dirty || !isValid}
                >
                  Login
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
