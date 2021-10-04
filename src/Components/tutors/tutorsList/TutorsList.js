import React from "react";
import TutorLIstItem from "./tutorListItem/TutorListItem";

import { TutorsListContainer } from "./TutorsListStyled";

const TutorsList = ({ tutors, children = null }) => {
  return (
    <TutorsListContainer>
      {children}
      {tutors.map((tutor) => (
        <TutorLIstItem tutor={tutor} key={tutor.id} />
      ))}
    </TutorsListContainer>
  );
};

export default TutorsList;
