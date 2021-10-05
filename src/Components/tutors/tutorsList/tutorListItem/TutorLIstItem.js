import React from "react";
import withState from "../../../hoc/withState";
import { TutorListItemContainer } from "./TutorListItemStyled";

const TutorListItem = ({ tutor }) => {
  return (
    <TutorListItemContainer>
      <div className='tutorListItemWrapper'>
        <h3 className='tutorListItemTitle'> {tutor.name}</h3>
        <button className='tutorListItemDetailsButton'>Details</button>
      </div>
    </TutorListItemContainer>
  );
};

export default withState(
  "https://ited-fc7ac-default-rtdb.firebaseio.com/tutors/"
)(TutorListItem);
