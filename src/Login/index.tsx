import * as React from "react";
import "./Login.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  passwordAgain: "",
  terms: false,
};
const reducer = (state: any, action: any) => {
  // if(action.input === 'name'){
  return { ...state, [action.input]: action.value };
};

function Login() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const validateState = () => {
    let enable = false;
    if (
      state.password !== "" &&
      state.passwordAgain !== "" &&
      state.password === state.passwordAgain &&
      state.password.length > 3 &&
      state.email &&
      state.terms
    ) {
      enable = true;
    }
    console.log(enable);
    return enable;
  };

  // console.log(state);

  const handleClick = (e: any) => {
    e.preventDefault();
    alert(`Hello ${state.name} you have successfully loggedin.....!!`);
  };

  const onChange = (e: any) => {
    const { name, value, checked } = e.target;
    const action = {
      input: name,
      value: name === "terms" ? checked : value,
    };
    dispatch(action);
  };

  return (
    <div className="App">
      <div className="LoginFormContainer">
        <h2 className="LoginFormHeading">Sign Up</h2>
        <form className="LoginForm">
          <input
            className="textInput"
            type="text"
            name="name"
            required
            placeholder="Enter your Name"
            onChange={onChange}
          />
          <input
            className="textInput"
            type="text"
            name="email"
            required
            placeholder="Enter your Email"
            onChange={onChange}
          />
          <input
            className="textInput"
            type="password"
            name="password"
            required
            placeholder="Enter your Password"
            onChange={onChange}
          />
          <input
            className="textInput"
            type="password"
            name="passwordAgain"
            required
            placeholder="Confirm your Password"
            onChange={onChange}
          />
          <label className="CheckboxLabel">
            <input
              className="CheckboxInput"
              type="checkbox"
              name="terms"
              onChange={onChange}
            />
            Accept the terms and condition
          </label>
          <button
            className={"loginButton"}
            // onClick={handleClick}
            disabled={!validateState()}
          >
            Register
          </button>
          {/* <Navigate to="/home">Login</Navigate> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
