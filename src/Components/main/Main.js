import React from "react";
import CoursesForm from "../courses/coursesForm/CoursesForm";
import CoursesList from "../courses/CoursesList";
import Section from "../section/Section";
import sprite from '../../icons/header/sprite.svg'

const Main = ({ courses }) => {
  return (
    <main>
      <div>
        <svg>
          <use href={sprite + "#icon-home"}/>
        </svg>
      </div>
      <CoursesForm />
      <button>Hello</button>
      <hr />

      
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


// const getData = (x) => {
//   return `10 + ${x} + 10`
// }

// const result = getData(10)
