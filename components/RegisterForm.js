import React, { useState } from "react";
import Link from "next/link";
export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // if (title !== "" && description !== "") {
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
    console.log("Form submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
        <input type="submit" value="Create account" />
        <Link href="/login">
          <button>Go back to login</button>
        </Link>
      </form>
    </div>
  );
}
