import React from "react";
import CoursesForm from "../courses/coursesForm/CoursesForm";
import CoursesList from "../courses/CoursesList";
import Section from "../section/Section";

const Main = ({ courses }) => {
  return (
    <main>
      {/* <Section title='CourseForm'>
        <CoursesForm />
      </Section> */}

      <Section title='CourseList'>
        <CoursesList courses={courses} />
      </Section>
    </main>
  );
};

export default Main;

// const getData = (x) => {
//   return `10 + ${x} + 10`
// }

// const result = getData(10)
