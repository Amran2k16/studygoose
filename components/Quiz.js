import React, { Component, useState } from "react";

const Quiz = props => {
  const [selected, setselected] = useState("0");
  const [submitted, setsubmitted] = useState(false);

  const onSubmit = e => {
    if (
      selected == "1" ||
      selected == "2" ||
      selected == "3" ||
      selected == "4"
    ) {
      if (selected == props.correctAnswer) {
        setsubmitted(true);
        console.log("correct answer was selected. Move to the next question");
        // Make that selected component green
      } else {
        console.log("That was the wrong answer. Try another one");
        // Make that selected component red
      }
    } else {
      console.log("You need to select an answer");
    }
  };

  return (
    <div>
      <h4>{props.question}</h4>

      <button
        onClick={e => {
          setselected("1");
        }}
        type="button"
        disabled={submitted}
        className={`col-12 btn mb-2 ${
          selected == "1" ? "btn-primary" : "btn-secondary"
        }`}
      >
        {props.option1}
      </button>

      <button
        onClick={e => {
          setselected("2");
        }}
        type="button"
        disabled={submitted}
        className={`col-12 btn mb-2 ${
          selected == "2" ? "btn-primary" : "btn-secondary"
        }`}
      >
        {props.option2}
      </button>

      <button
        onClick={e => {
          setselected("3");
        }}
        type="button"
        disabled={submitted}
        className={`col-12 btn mb-2 ${
          selected == "3" ? "btn-primary" : "btn-secondary"
        }`}
      >
        {props.option3}
      </button>

      <button
        onClick={e => {
          setselected("4");
        }}
        type="button"
        disabled={submitted}
        className={`col-12 btn mb-2 ${
          selected == "4" ? "btn-primary" : "btn-secondary"
        }`}
      >
        {props.option4}
      </button>
      <button disabled={submitted} onClick={onSubmit}>
        Submit
      </button>
      {submitted ? <button className="float-right">Next</button> : null}
    </div>
  );
};

class QuizHolder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "0",
      submitted: false,
      score: 0
    };
  }

  render() {
    return (
      <div className="row">
        <Quiz 
        question="This is the question" 
        option1="First one" 
        option2="second one" 
        option3="third one" 
        option4="fourth one" 
        correctAnswer="4" />
      </div>
    );
  }
}

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
export default QuizHolder;
