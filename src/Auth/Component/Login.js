import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../UIElements/Button";
import Card from "../../UIElements/Card";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [nameError, setNameErrors] = useState("");
  const [passwordError, setPasswordErrors] = useState("");

  const history = useHistory();

  const users = { id: "1", username: "admin", passwords: "admin" };
  const onChangeUser = (e) => {
    setName(e.target.value);
    setNameErrors("");
  };
  const onChangePassword = (e) => {
    setpassword(e.target.value);
    setPasswordErrors("");
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    if (name !== "") {
      const nameRgx = /^[a-zA-Z ]{2,30}$/;
      if (nameRgx.test(name)) {
        setNameErrors("");
        if (users.username === name) {
          setNameErrors("");
          if (users.passwords === password) {
            setPasswordErrors("");
          } else {
            setPasswordErrors("password is invalid");
          }
        } else {
          setNameErrors("username does not match with our database");
        }
      } else {
        setNameErrors("username is invalid");
      }
    } else {
      setNameErrors("usermane is required");
    }

    if (password !== "") {
    } else {
      setPasswordErrors("Password is invalid");
    }

    if (users.username === name && users.passwords === password) {
      history.push("/dashboard");
    }
  };
  const toSignUpForm = () => {
    history.push("/signUp");
  };
  return (
    <>
      {" "}
      <div className="title">
        <h1>Thinkitive</h1>
      </div>
      <Card>
        <form onSubmit={onSubmitLogin} className="form">
          <label htmlFor="username">Username </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={onChangeUser}
            placeholder="Enter UserName"
            value={name}
          />
          <br />
          <br />
          {nameError && <div className="err-mesegge">{nameError}</div>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={onChangePassword}
            placeholder="Enter Password"
            value={password}
          />
          <br />
          <br />
          {passwordError && <div className="err-mesegge">{passwordError}</div>}
          <Button type="submit">Login</Button>
          <Button type="button" onClick={toSignUpForm}>
            Sign Up
          </Button>
        </form>
      </Card>
    </>
  );
};
export default Login;
