import React from "react";

import { CourseListItemContainer } from "./CoursesListItemStyled";

const CoursesListItem = ({  name }) => {
  return (
    <CourseListItemContainer>
      <div className='courseListItemContent'>
        <div className='courseListItemTitleBlock'>
          <p className='courseListItemTitle'>{name}</p>
        </div>
      </div>
    </CourseListItemContainer>
  );
};

export default CoursesListItem;
