import React, { Component } from "react";

const Quiz = props => {
  const handleChange = e => {
    console.log(e.target.value);
    if (e.target.value == props.correct) {
      console.log("Correct answer");
      console.log(e);
      e.target.className = "text-success";
    } else {
      console.log("Wrong answer");
      e.target.className = "text-danger";
    }
  };
  return (
    <div className="row">
      <h4>{props.question}</h4>
      <select onChange={handleChange}>
        <option value="0">Select Answer</option>
        <option value="1">{props.option1}</option>
        <option value="2">{props.option2}</option>
        <option value="3">{props.option3}</option>
        <option value="4">{props.option4}</option>
      </select>
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
