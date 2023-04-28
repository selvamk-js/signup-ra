import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Home from "../Home";
import LoginContext from "../context/login.context";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    id: 0,
    username: "",
    email: "",
  });

  const contextValue = { loggedInUser, setLoggedInUser };

  return (
    <LoginContext.Provider value={contextValue}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </LoginContext.Provider>
  );
}
