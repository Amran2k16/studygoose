import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/MyLayout";
import CourseCard from "../../../components/courses/CourseCard";
import fetch from "isomorphic-unfetch";
// import Quiz from "../../../components/Quiz";
import QuizHolder from "../../../components/QuizHolder";

import AddQuiz from "../../../components/AddQuiz";

video.getInitialProps = async function(context) {
  const { coursename, videoname } = context.query;
  const videoResponse = await fetch(
    `http://localhost:3000/api/courses/${coursename}/${videoname}`
  );
  const QuizResponse = await fetch(
    `http://localhost:3000/api/courses/${coursename}/${videoname}/quiz`
  );

  const VideoInformation = await videoResponse.json();
  const QuizInformation = await QuizResponse.json();
  return {
    video: VideoInformation[0],
    quiz: QuizInformation,
    coursename,
    videoname
  };
};

export default function video(props) {
  const router = useRouter();
  // <p>{router.query.videoname}</p>
  return (
    <Layout>
      <div className="row justify-content-center">
        <div className="col-10">
          <iframe
            width="100%"
            height="500"
            src={props.video.video_url}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <h4>{props.video.title}</h4>
          <p>{props.video.description}</p>
          <div className="col-10">
            <QuizHolder quiz={props.quiz} />
          </div>
          <AddQuiz
            coursetitle={props.coursename}
            videotitle={props.videoname}
          />
        </div>
      </div>
    </Layout>
  );
}
