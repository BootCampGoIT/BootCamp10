import React from "react";

const TutorsList = ({ tutors }) => {
  return (
    <ul>
      {tutors.map((tutor) => (
        <li key={tutor.id}>{tutor.name}</li>
      ))}
    </ul>
  );
};

export default TutorsList;
