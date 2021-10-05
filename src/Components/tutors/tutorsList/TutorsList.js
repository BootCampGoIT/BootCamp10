import React from "react";
import withToggle from "../../hoc/withToggle";
import TutorListItem from "./tutorListItem/TutorListItem";

import { TutorsListContainer } from "./TutorsListStyled";

const TutorsList = ({ tutors, children = null }) => {
  return (
    <TutorsListContainer>
      {children}
      {tutors.map((tutor) => (
        <TutorListItem tutor={tutor} key={tutor.id} />
      ))}
    </TutorsListContainer>
  );
};

export default withToggle(TutorsList);
