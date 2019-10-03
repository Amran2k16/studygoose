import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AddVideoCard(props) {
  const router = useRouter();
  //   console.log(router.asPath + props.videoTitle);
  //   console.log(router.asPath + props.videoTitle);
  console.log(router.asPath + props.videoTitle);
  console.log("This is the coursename: " + router.query.coursename);
  return (
    <Link
      href="/courses/[coursename]/add-video"
      as={`/courses/${router.query.coursename}/add-video`}
    >
      <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
        <div style={{ cursor: "pointer", paddingBottom: "20px" }}>
          <div className="card">
            <div className="card-body">
              <div
                className="row justify-content-center align-items-center"
                style={{ height: "150px" }}
              >
                <div className="col-4">
                  <div className="row">
                    <i className="material-icons" style={{ fontSize: "58px" }}>
                      add
                    </i>
                  </div>
                  <div className="row">
                    <p>Add a new video </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
