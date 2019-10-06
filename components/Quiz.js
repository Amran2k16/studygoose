import React, { Component, useState } from "react";

const Options = props => {
  const [active, setactive] = useState("0");
  console.log(active);

  const buttonClicked = e => {
    setactive(e.target.value);
  };

  const submit = e => {
    // if state is one of 1,2,3 or 4... then allow this otherwise send "you need to pick one!"
    console.log("submitted");
  };

  const Button = props => {
    return (
      <button
        onClick={buttonClicked}
        type="button"
        value={props.number}
        className={`col-12 btn mb-2 ${
          active == props.number ? "btn-primary" : "btn-secondary"
        }`}
      >
        {props.text}
      </button>
    );
  };

  return (
    <div className="row p-1">
      <Button number="1" text="First option" />
      <Button number="2" text="Second option" />
      <Button number="3" text="Third option" />
      <Button number="4" text="Fourth option" />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

const Quiz = props => {
  return (
    <div className="row">
      <div className="col-12">
        <h4>What is a print statement?</h4>
        <Options />
      </div>
    </div>
  );
};

// Get initial props not working
// Quizzes.getInitialProps = async function(context) {
//   console.log(
//     `http://localhost:3000/api/courses/${coursename}/${videoname}/quiz`
//   );
//   const { coursename, videoname } = context.query;
//   const res = await fetch(
//     `http://localhost:3000/api/courses/${coursename}/${videoname}/quiz`
//   );

//   const allQuizzes = res.json();

//   return allQuizzes;
// };
export default Quiz;
