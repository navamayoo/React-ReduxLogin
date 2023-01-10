import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  console.log("users", users);

  const login = () => {
    const payload = users.find(
      (user) => user.username === username && user.password === password
    );
    if (payload) {
        dispatch({
            type:"Login",
            payload
        })
         alert("Login Success !!");
    }else{
        alert("Wrong credential !!")
    }
  };

  return (
    <form className="login">
      <input
        type="text"
        value={username}
        placeholder="UserName"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="button" value="login" onClick={login} />
    </form>
  );
}
