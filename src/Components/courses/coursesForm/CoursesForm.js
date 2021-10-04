import React, { useState } from "react";
import { toDataURL } from "../../../helpers/base64";
import { CourseFormContainer } from "./CoursesFormStyled";

const initialState = {
  avatar: "",
  courseName: "",
  description: "",
};

const CoursesForm = ({ addCourse }) => {
  const [course, setCourse] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      toDataURL(e.target).then((avatar) =>
        setCourse((prev) => ({ ...prev, avatar }))
      );
      return;
    }
    setCourse((prev) => ({ ...prev, [name]: value }));
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    addCourse(course);
    // setCourse({ ...initialState });
    setCourse({ ...initialState });
  };

  return (
    <CourseFormContainer>
      <form className='courseForm' onSubmit={onHandleSubmit}>
        <label className='courseFormLabel'>
          <div className='courseFormImageWrapper'>
            {course.avatar && <img src={course.avatar} alt='course' />}
          </div>
          <input
            type='file'
            name='avatar'
            onChange={onHandleChange}
            className='courseFormAvatarInput'
          />
        </label>
        <label className='courseFormLabel'>
          Name
          <input
            type='text'
            name='courseName'
            value={course.courseName}
            onChange={onHandleChange}
          />
        </label>
        <label className='courseFormLabel'>
          Description
          <textarea
            name='description'
            value={course.description}
            cols='30'
            rows='10'
            onChange={onHandleChange}
          />
        </label>
        <button type='submit'>Save course</button>
      </form>
    </CourseFormContainer>
  );
};

export default CoursesForm;

// const x = {
//   name: "Alex",
//   data: {
//     age: 25,
//   },
// };
// // const y = { ...x };
// const y = JSON.parse(JSON.stringify(x));

// x.data.age = 30;
// console.log(y);
