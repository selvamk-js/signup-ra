import * as React from "react";
import { Formik } from "formik";

import "./register.css";

function Register() {
  return (
    <div className="App">
      <div className="LoginFormContainer">
        <h2 className="LoginFormHeading">Sign Up</h2>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          enableReinitialize
          validate={(values) => {
            const errors: any = {};
            if (!values.username) {
              errors.username = "Username is required";
            }

            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Password is required";
            } else if (
              values.password.length < 6
              // !/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6}$/i.test(
              //   values.password
              // )
            ) {
              errors.password = "Password is not strong enough";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              resetForm();
            }, 400);
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
                      errors.username && touched.username
                        ? "textInputError"
                        : "textInput"
                    }
                    type="text"
                    name="username"
                    required
                    placeholder="Enter your Name"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && touched.username && (
                    <p className="helperText">{errors.username}</p>
                  )}
                </div>
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
                  Register
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
