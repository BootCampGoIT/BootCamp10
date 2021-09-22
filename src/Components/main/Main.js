import React from "react";
import CoursesList from "../courses/CoursesList";
import Section from "../section/Section";

const Main = ({ courses }) => {
  return (
    <main>
      <Section title='CourseForm'>
        <form>
          <input type='text' />
          <input type='text' />
          <input type='text' />
          <input type='text' />
        </form>
      </Section>

      <Section title='CourseList'>
        <CoursesList courses={courses} />
      </Section>
    </main>
  );
};

export default Main;
