import React from "react";
import { TutorsListContainer } from "./TutorsListStyled";

const TutorsList = ({ tutors, children = null }) => {
  return (
    <TutorsListContainer>
      {children}
      {tutors.map((tutor) => (
        <li key={tutor.id}>{tutor.name}</li>
      ))}
    </TutorsListContainer>
  );
};

export default TutorsList;
