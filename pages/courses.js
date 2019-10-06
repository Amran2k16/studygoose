import Layout from "../components/MyLayout";
import Link from "next/link";
import CourseCard from "../components/courses/CourseCard";
import AddCourseCard from "../components/courses/AddCourseCard";
import fetch from "isomorphic-unfetch";

const courses = props => {
  const admin = true;
  return (
    <Layout>
      <div className="row justify-content-center">
        <p
          className="mt-5"
          style={{
            fontSize: "24px",
            textAlign: "center",
            fontWeight: "lighter"
          }}
        >
          And always, There was the magic of learning things <br></br> <br></br>
          Betty Smith
        </p>
      </div>
      <div className="row justify-content-start">
        <div className="ml-3">
          <Link href="/courses">
            <h4 className="" style={{ color: "black", cursor: "pointer" }}>
              Available Courses
            </h4>
          </Link>
        </div>
      </div>
      <div className="row justify-content-start">
        {props.courses.map(course => (
          <CourseCard key={course._id} url={course.slug} title={course.title} />
        ))}
        {admin ? <AddCourseCard /> : null}
      </div>
    </Layout>
  );
};

courses.getInitialProps = async function() {
  const res = await fetch("http://localhost:3000/api/courses/");
  const data = await res.json();

  return {
    courses: data
  };
};

// <CourseCard key={show.id} url={show.id} title={show.name} />
// courses.getInitialProps = async function() {
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//   const data = await res.json();

//   return {
//     shows: data.map(item => item.show)
//   };
// };

export default courses;
