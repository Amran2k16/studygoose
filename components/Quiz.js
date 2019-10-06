import React, { Component, useState } from "react";

const Option = props => {
  return (
    <button
      onClick={e => this.setState({ selected: e.target.value })}
      type="button"
      disabled={this.state.submitted}
      value={this.props.number}
      className={`col-12 btn mb-2 ${
        this.state.selected == this.props.number
          ? "btn-primary"
          : "btn-secondary"
      }`}
    >
      {this.props.text}
    </button>
  );
};

class Quiz extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      selected: "0",
      submitted: false,
      score: 0
    };
  }

  onSubmit = e => {
    if (
      this.state.selected == "1" ||
      this.state.selected == "2" ||
      this.state.selected == "3" ||
      this.state.selected == "4"
    ) {
      setSubmitted(true);
      if (this.state.selected == correct) {
        console.log("correct answer was selected");
        // Make that selected component green
      } else {
        console.log("That was the wrong answer");
        // Make that selected component red
      }
    } else {
      console.log("You need to select an answer");
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h4>{this.props.question}</h4>
          <div className="row p-1">
            <Option number="1" text={this.props.option1} />
            <Option number="2" text={this.props.option2} />
            <Option number="3" text={this.props.option3} />
            <Option number="4" text={this.props.option4} />
            <button disabled={this.state.submitted} onClick={this.onSubmit}>
              Submit
            </button>
            {this.state.submitted ? (
              <button className="float-right">Next</button>
            ) : null}
          </div>
        </div>
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
export default Quiz;
