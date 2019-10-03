import React from "react";
// import Link from "next/link";
import { useRouter } from "next/router";
import Link from "./ActiveLink";

export default function SidebarButton(props) {
  const router = useRouter();

  return (
    <div className="p-3">
      <Link activeClassName="active" href={"/" + props.url}>
        <div
          className="row justify-content-centre align-items-end"
          style={{ cursor: "pointer" }}
        >
          <style jsx>{`
            .active {
              color: #07689f;
            }
            .nav-link {
              text-decoration: none;
              padding: 10px;
              display: block;
            }
          `}</style>
          <div className="col-5">
            <i
              className="float-right material-icons"
              style={{ fontSize: "48px", color: props.color }}
            >
              {props.icon}
            </i>
          </div>

          <div className="col">
            <h4 className="" style={{ color: props.color }}>
              {props.text}
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );

  // if (router.route == props.url)
}
