import { useContext } from "react";
import "./home.css";
import LoginContext from "../context/login.context";
export default function Home() {
  const { loggedInUser, setLoggedInUser } = useContext(LoginContext);

  const handleChangeContext = () => {
    setLoggedInUser({
      email: "text@gmail.com",
      id: 234,
      username: "Test",
    });
  };

  return (
    <div className="welcome">
      <h1>Welcome {loggedInUser.username}</h1>

      <button onClick={handleChangeContext}>Change Context</button>
    </div>
  );
}
