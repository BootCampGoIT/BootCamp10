import React from "react";
import { CourseFormContainer } from "./CoursesFormStyled";


const CoursesForm = () => {
  return (
    <CourseFormContainer>
      <form className='courseForm'>
        <label className='courseFormLabel'>
          Name
          <input type='text' />
        </label>
        <label className='courseFormLabel'>
          Image
          <input type='file' name='' id='' />
        </label>
        <label className='courseFormLabel'>
          Description
          <textarea name='' id='' cols='30' rows='10'></textarea>
        </label>
        <button type=''>Save course</button>
      </form>
    </CourseFormContainer>
  );
};

export default CoursesForm;
