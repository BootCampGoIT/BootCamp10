import React from "react";
import { TutorListItemContainer } from "./TutorListItemStyled";

const TutorLIstItem = ({ tutor }) => {
  return (
    <TutorListItemContainer>
      <div className='tutorListItemWrapper'>
        <h3 className='tutorListItemTitle'> {tutor.name}</h3>
        <button className='tutorListItemDetailsButton'>Details</button>
      </div>
    </TutorListItemContainer>
  );
};

export default TutorLIstItem;
