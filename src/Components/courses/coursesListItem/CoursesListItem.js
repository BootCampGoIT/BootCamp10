import React from "react";
import ModuleList from "../moduleList/ModuleList";
import { CourseListItemContainer } from "./CoursesListItemStyled";
const CoursesListItem = ({ modules, name }) => {
  return (
    <CourseListItemContainer>
      <div className='courseListItemContent'>
        <div className='courseListItemTitleBlock'>
          <p className='courseListItemTitle'>{name}</p>
        </div>
      </div>
      {/* <ModuleList modules={modules} /> */}
    </CourseListItemContainer>
  );
};

export default CoursesListItem;
