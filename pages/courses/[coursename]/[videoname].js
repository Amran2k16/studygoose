import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/MyLayout";
import CourseCard from "../../../components/courses/CourseCard";
import fetch from "isomorphic-unfetch";

video.getInitialProps = async function(context) {
  const { coursename, videoname } = context.query;
  const res = await fetch(
    `http://localhost:3000/api/courses/${coursename}/${videoname}`
  );

  const video = await res.json();
  return { video: video[0] };
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
        </div>
      </div>
    </Layout>
  );
}
