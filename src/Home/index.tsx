// import { useContext } from "react";
import "./home.css";
// import LoginContext from "../context/login.context";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { selectLoggedInUser } from "../Login/selector";
import { setTestValue } from "../Login/reducer";
export default function Home() {
  // const { loggedInUser, setLoggedInUser } = useContext(LoginContext);
  const loggedInUser = useAppSelector(selectLoggedInUser);
  const dispatch = useAppDispatch();

  // console.log("loggedInUser", loggedInUser);

  // const handleChangeContext = () => {
  //   setLoggedInUser({
  //     email: "text@gmail.com",
  //     id: 234,
  //     username: "Test",
  //   });
  // };

  return (
    <div className="welcome">
      <h1>Welcome {loggedInUser.username}</h1>

      <button
        onClick={() => {
          dispatch(setTestValue("Test Value"));
        }}
      >
        Change Context
      </button>
    </div>
  );
}
