import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function VideoCard(props) {
  const router = useRouter();
  //   console.log(router.asPath + props.videoTitle);
  //   console.log(router.asPath + props.videoTitle);
  console.log(router.asPath + props.videoTitle);

  return (
    <Link
      href="/courses/[coursename]/[videoname]"
      as={`/courses/${router.query.coursename}/${props.slug}`}
    >
      <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
        <div style={{ cursor: "pointer", paddingBottom: "20px" }}>
          <div className="card">
            <div className="card-body">
              <div style={{ height: "150px" }}>{props.videoTitle}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// <div style={{ cursor: "pointer" }}>
//   <div className="row justify-content-between">
//     <div
//       style={{
//         width: "310px",
//         height: "200px",
//         backgroundColor: "white",
//         boxShadow: "2px 2px 5px #A6A6A6"
//       }}
//     >
//       <div className="col">{props.videoNumber}</div>
//       <div className="col align-self-end text-right">
//         {props.videoLength}
//       </div>
//     </div>
//   </div>
//   <p className="mt-2" style={{ fontSize: "24px" }}>
//     {props.videoTitle}
//   </p>
// </div>
