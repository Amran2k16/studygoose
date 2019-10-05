import React, { useState } from "react";

import Router from "next/router";
export default function AddQuiz(props) {
  const [Question, setQuestion] = useState("");
  const [Option1, setOption1] = useState("");
  const [Option2, setOption2] = useState("");
  const [Option3, setOption3] = useState("");
  const [Option4, setOption4] = useState("");
  const [Correct, setCorrect] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:3000/api/courses/${props.coursetitle}/${props.videotitle}/quiz`,
      {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          course_title: props.coursetitle,
          video_title: props.videotitle,
          question: Question,
          option1: Option1,
          option2: Option2,
          option3: Option3,
          option4: Option4,
          correct: Correct
        })
      }
    );
    const reply = await response.json();
    console.log(reply);
    if (reply.status == "success") {
      Router.push(`/courses/${props.coursetitle}/${props.videotitle}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Question</label>
        <input
          type="text"
          className="form-control"
          value={Question}
          onChange={e => setQuestion(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Option 1</label>
        <input
          type="text"
          className="form-control"
          value={Option1}
          onChange={e => setOption1(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Option 2</label>
        <input
          type="text"
          className="form-control"
          value={Option2}
          onChange={e => setOption2(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Option 3</label>
        <input
          type="text"
          className="form-control"
          value={Option3}
          onChange={e => setOption3(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Option 4</label>
        <input
          type="text"
          className="form-control"
          value={Option4}
          onChange={e => setOption4(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Correct </label>
        <input
          type="text"
          className="form-control"
          value={Correct}
          onChange={e => setCorrect(e.target.value)}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}
