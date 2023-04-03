import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../action";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      login: state.rootReducer.loginReducer,
    };
  });
  const { login } = state;

  console.log("login payload", login);

  const handleClick = () => {
    dispatch(loginRequest("infoadmin", "infoadmin"));
  };

  return (
    <>
      <p>login data:{JSON.stringify(login.loginResult)}</p>
      <button
        style={{ marginLeft: "200px", marginTop: "200px", color: "black" }}
        onClick={handleClick}
      >
        Login
      </button>
    </>
  );
};

export default Login;
