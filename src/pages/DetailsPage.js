import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouteMatch, useParams } from "react-router-dom";

const DetailsPage = () => {
  const [group, setGroup] = useState(null);
  //   const match = useRouteMatch();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://ited-fc7ac-default-rtdb.firebaseio.com/groups/${id}.json`)
      .then((response) => setGroup(response.data));
  }, [id]);
  return (
    <>
      {group && (
        <div>
          <h2>{group.groupName}</h2>
          <p>Start: {group.startDate}</p>
          <p>Tutor: {group.tutor.name}</p>
          <p>Mentor: {group.mentor.name}</p>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
