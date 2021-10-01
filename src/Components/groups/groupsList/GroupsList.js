import React from "react";
import GroupsListItem from "./groupsListItem/GroupsListItem";
import { GroupsListContainer } from "./GroupsListStyled";

const GroupsList = ({ groups, deleteGroup }) => {
  return (
    <GroupsListContainer>
      {groups.map((group) => (
        <GroupsListItem
          key={group.id}
          group={group}
          deleteGroup={deleteGroup}
        />
      ))}
    </GroupsListContainer>
  );
};

export default GroupsList;
