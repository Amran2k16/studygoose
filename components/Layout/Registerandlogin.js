import React, { useState } from "react";

// import Header from "./Header";
import Head from "next/head";

const Registerandlogin = props => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
    </Head>

    <div className="container-fluid">
      <div className="row fill">
        <div className="col-6 sidebar-background">
          <div className="row align-items-center">
            <h1>StudyGoose</h1>
          </div>
          <div className="row ">
            <div className="d-flex flex-column">
              <h2>Welcome!</h2>
              <h5>Sign in to access the content</h5>
            </div>
          </div>
        </div>
        <div className="col-6 content-background">
          <div className="container-fluid">
            <div className="row fill align-items-center">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .my-sidebar {
          -ms-flex: 0 0 400px;
          flex: 0 0 400px;
        }
        .content-background {
          background-color: white;
        }
        .sidebar-background {
          background-color: #a2d5f2;
        }
        .fill {
          height: 100vh;
        }
      `}
    </style>
  </div>
);

export default Registerandlogin;
