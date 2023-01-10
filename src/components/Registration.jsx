import React, { useState } from 'react';
import {useDispatch} from "react-redux"

export default function Registration() {

    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();
    const register = () => {
      dispatch({
        type: "Register",
        payload: {
          id: new Date().getTime(),
          name,
          username,
          password,
        },
      });
    };

    console.log(name, username,password)

  return (
    <form className="register">
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
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
      <input type="button" value="register" onClick={register} />
    </form>
  );
}
 