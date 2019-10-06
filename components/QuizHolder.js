import React, { Component, useState } from "react";
import Slider from "react-slick";

const Quiz = props => {
  const [selected, setselected] = useState("0");
  const [submitted, setsubmitted] = useState(false);
  const [message, setmessage] = useState("");
  const [messageStyle, setmessagestyle] = useState("");

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
        setmessage("correct answer was selected. Move to the next question");
        setmessagestyle("green");
      } else {
        console.log("That was the wrong answer. Try another one");
        // Make that selected component red
        setmessagestyle("red");
        setmessage("That was the wrong answer. Try another one");
        window.setTimeout(() => {
          setmessage("");
        }, 1000);
      }
    } else {
      console.log("You need to select an answer");
      setmessagestyle("red");
      setmessage(
        "Oops. You forgot to select an answer. Please select from one below"
      );
      window.setTimeout(() => {
        setmessage("");
      }, 1000);
    }
  };

  return (
    <div className="col-12">
      <h4>{props.question}</h4>
      <p style={{ color: messageStyle }}> {message}</p>
      <button
        onClick={e => {
          setselected("1");
        }}
        type="button"
        disabled={submitted}
        className={`col-12 btn mb-2 ${
          selected == "1" ? "btn-primary" : "btn-secondary"
        } `}
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
        } `}
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
        } `}
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
        } `}
      >
        {props.option4}
      </button>

      <button className="btn btn-info" disabled={submitted} onClick={onSubmit}>
        Check Answer
      </button>
      {/* {submitted ? <button className="float-right">Next</button> : null} */}
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

class QuizHolder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finished: false,
      score: 0
    };

    // this.next = this.next.bind(this);
    // this.previous = this.next.bind(this);
  }

  // next = () => {
  //   console.log("Clicked on handler");
  // };

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="container">
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.props.quiz.map(quiz => {
            // console.log(quiz.question)
            console.log(quiz);
            return (
              <Quiz
                key={quiz._id}
                question={quiz.question}
                option1={quiz.option1}
                option2={quiz.option2}
                option3={quiz.option3}
                option4={quiz.option4}
                correctAnswer={quiz.correct}
              />
            );
          })}
        </Slider>

        {/* <button className={"col-12"} onClick={this.next}>
          Test
        </button> */}
      </div>
    );
  }
}

export default QuizHolder;
