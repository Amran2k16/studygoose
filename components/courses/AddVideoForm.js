import React, { useState } from "react";
import { useRouter } from "next/router";

export default function AddCourseForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videourl, setVideourl] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (
      title !== "" &&
      description !== "" &&
      videourl !== "" &&
      router.query.coursename !== ""
    ) {
      fetch("/api/courses/" + router.query.coursename, {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          description: description,
          video_url: videourl,
          coursename: router.query.coursename
        })
      });
      alert("Successfully created Video");
    } else {
      alert("Inputs cannot be empty!");
    }
  };
  return (
    <div>
      <p>Add a new video to the {router.query.coursename} course! </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Video Title</label>
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
          <label>Video Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Video url</label>
          <input
            name="video_url"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={videourl}
            onChange={e => setVideourl(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
          <label>Course name</label>
          <input
            disabled={true}
            name="course_name"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={router.query.coursename}
          />
        </div> */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
