import React from "react";
import { TutorsListContainer } from "./TutorsListStyled";

const TutorsList = ({ tutors }) => {
  return (
    <TutorsListContainer>
      {tutors.map((tutor) => (
        <li key={tutor.id}>{tutor.name}</li>
      ))}
    </TutorsListContainer>
  );
};

export default TutorsList;
