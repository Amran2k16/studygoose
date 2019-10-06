// import Header from "./Header";
import Sidebar from "./Sidebar";
import Head from "next/head";

const Layout = props => (
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
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>

    <div className="container-fluid">
      <div className="row fill">
        <div className=" my-sidebar">
          <Sidebar />
        </div>
        <div className="col content-background">
          <div className="container-fluid">{props.children}</div>
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
          background-color: #f8f8f8;
        }
        .fill {
          height: 100vh;
        }
      `}
    </style>
  </div>
);

export default Layout;
