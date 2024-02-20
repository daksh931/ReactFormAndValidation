// import React from "react";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const[didEdit, setDidEdit] = useState( {
    email : false ,
    password : false,
  })


  const emailIsInvalid = data.email !== '' && !data.email.includes('@');

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted" + data.email);
    console.log("submitted" + data.password);
  }

  function HandleInput(identifier, event) {
    setData((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));

    setDidEdit( (prevEdit) => ({
      ...prevEdit,
      [identifier] : false
    }))
  }
  function handleBlur(identifier){
    setDidEdit( (prevEdit) => ({
      ...prevEdit,
      [identifier] : true,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row flex">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleBlur('email')}
            onChange={(event) => HandleInput("email", event)}
          />
        <div className="control-error">{ emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleBlur('password')}
            onChange={(event) => HandleInput("password", event)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
