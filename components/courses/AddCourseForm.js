import React, { useState } from "react";

export default function AddCourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (title !== "" && description !== "") {
      fetch("http://localhost:4000/api/courses/", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          description: description
        })
      });
      alert("Successfully created Video");
    } else {
      alert("Inputs cannot be empty!");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course Title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Course Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
