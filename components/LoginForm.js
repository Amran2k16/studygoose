import React, { useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Router from "next/router";

LoginForm.getInitialProps = async function() {};

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    fetch("/users/login", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
  };

  return (
    <div className="col-12">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Log In" />
        <Link href="/register">
          <button className="pl-2">Register now!</button>
        </Link>
      </form>
    </div>
  );
}
