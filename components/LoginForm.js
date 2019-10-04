import React, { useState } from "react";
import Link from "next/link";
export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // if (username !== "" && password !== "") {
    //   fetch("/api/courses/", {
    //     method: "post",
    //     headers: {
    //       Accept: "application/json, text/plain, */*",
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       username: username,
    //       password: description
    //     })
    //   });
    //   alert("Successfully created Video");
    // } else {
    //   alert("Inputs cannot be empty!");
    // }
    console.log("Form has been submitted");
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
