import React, { useState } from "react";
import Layout from "../../components/MyLayout";
import AddCourseForm from "../../components/courses/AddCourseForm";

export default function addcourse() {
  return (
    <Layout>
      <div className="container">
        <div className="col-8">
          <AddCourseForm />
        </div>
      </div>
    </Layout>
  );
}
