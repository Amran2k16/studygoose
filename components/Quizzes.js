import React, { Component } from "react";

const Quizzes = props => {
  return (
    <div className="row">
      <h4>{props.question}</h4>
      <select>
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
export default Quizzes;
