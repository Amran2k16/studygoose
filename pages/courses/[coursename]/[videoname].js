import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/MyLayout";
import CourseCard from "../../../components/courses/CourseCard";

export default function video() {
  const router = useRouter();
  // <p>{router.query.videoname}</p>

  return <Layout></Layout>;
}

// {/* <div
//         style={{ width: "200px", height: "200px", backgroundColor: "white" }}
//       ></div> */}
// <div>
//   {/* <iframe
//           width="100%"
//           height="500"
//           src="https://www.youtube.com/embed/1yMOqLZ2EO4"
//           frameborder="0"
//           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe> */}
//   {/* <video width="1280" height="720" controls>
//           <source src="movie.mp4" type="video/mp4" />
//           <source src="movie.ogg" type="video/ogg" />
//           Your browser does not support the video tag.
//         </video>
//       </div> */}
