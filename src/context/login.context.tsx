import { createContext } from "react";

type LoginContextType = {
  loggedInUser: {
    id: number;
    username: string;
    email: string;
    password?: string;
  };
  setLoggedInUser: React.Dispatch<
    React.SetStateAction<{
      id: number;
      username: string;
      email: string;
      password?: string;
    }>
  >;
};

const LoginContext = createContext<LoginContextType>({
  loggedInUser: {
    id: 0,
    username: "",
    email: "",
    password: "",
  },
  setLoggedInUser: () => null,
});

export default LoginContext;
