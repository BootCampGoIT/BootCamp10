import React from "react";
import { CourseFormContainer } from "./CoursesFormStyled";
import styles from "./Coures.module.css";

const CoursesForm = () => {
  return (
    <CourseFormContainer>
      <form className='courseForm'>
        <label className='courseFormLabel'>
          <span className={styles.test}> Name</span>
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
