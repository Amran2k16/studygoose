import React from "react";
import Layout from "../../../components/MyLayout";
import { useRouter } from "next/router";
import Link from "next/link";
import CourseCard from "../../../components/courses/CourseCard";
import VideoCard from "../../../components/courses/VideoCard";
import fetch from "isomorphic-unfetch";
import AddVideoCard from "../../../components/courses/AddVideoCard";

course.getInitialProps = async function(context) {
  const { coursename } = context.query;
  const res = await fetch(`http://localhost:3000/api/courses/${coursename}`);
  const videos = await res.json();
  return { videos: videos };
};

export default function course(props) {
  const router = useRouter();
  console.log(props.show);

  return (
    <Layout>
      <div className="row justify-content-center">
        <p
          className="mt-5"
          style={{
            minHeight: "130px",
            fontSize: "24px",
            textAlign: "center",
            fontWeight: "lighter"
          }}
        >
          Welcome to {router.query.coursename}!
        </p>
      </div>
      <div className="row" style={{ fontSize: "24px" }}>
        <Link href="/courses">
          <h4 style={{ cursor: "pointer" }}>Available Courses</h4>
        </Link>
        <h4 className="pl-3 pr-3"> > </h4>
        <h4 style={{ cursor: "pointer" }}>{router.query.coursename}</h4>
      </div>
      <div className="row">
        {props.videos.map(video => (
          <VideoCard
            key={video._id}
            videoTitle={video.title}
            slug={video.slug}
          />
        ))}
        <AddVideoCard />
      </div>
    </Layout>
  );
}
