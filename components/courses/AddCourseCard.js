import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CourseCard(props) {
  const router = useRouter();

  return (
    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
      <div style={{ cursor: "pointer", paddingBottom: "20px" }}>
        <Link href="/courses/add-course">
          <div className="card">
            <div className="card-body">
              <div
                className="row justify-content-center align-items-center"
                style={{ height: "150px" }}
              >
                <i className="material-icons" style={{ fontSize: "58px" }}>
                  add
                </i>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
