import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CourseCard(props) {
  const router = useRouter();

  return (
    <Link href="/courses/[coursename]" as={`/courses/${props.url}/`}>
      {/* <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
        <div style={{ cursor: "pointer", paddingBottom: "20px" }}>
          <div className="card">
            <div className="card-body">
              <div style={{ height: "150px" }}>{props.title}</div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="col-12 col-sm-12 col-md-12 col-lg-4 pb-3">
        <div className="card ">
          {/* <div className="card-header" style={{ background: "#07689F" }}> */}
          <div className="card-header" style={{ background: props.color }}>
            <h4 style={{ color: "white" }}>{props.title}</h4>
          </div>
          <div className="card-body">
            {/* <h5 className="card-title">Fundamentals Of Python</h5> */}
            <p className="card-text">
              {props.description.substring(0, 61)} ...
            </p>
          </div>
          <div className="card-body">
            <div className="row justify-content-start">
              <span class="badge badge-pill badge-primary ml-3">
                Programming
              </span>
              <span class="badge badge-pill badge-secondary ml-3">Python</span>
              <span class="badge badge-pill badge-info ml-3">Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
{
  /* <div
  className="row justify-content-center align-items-center"
  style={{
    width: "310px",
    height: "200px",
    backgroundColor: "white",
    boxShadow: "2px 2px 5px #A6A6A6",
    cursor: "pointer"
  }}
>
  <p style={{ fontSize: "24px" }}>{props.title}</p>
</div>; */
}
