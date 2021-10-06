import React from "react";
import { GroupsListItemContainer } from "./GroupsListItemStyled";
import { useHistory, useRouteMatch } from "react-router-dom";

const GroupsListItem = ({ group, deleteGroup }) => {
  const match = useRouteMatch();
  const history = useHistory();
  const deleteItem = () => deleteGroup(group.id);
  const goDetailsPage = () => history.push(`${match.url}/${group.id}`);
  return (
    <GroupsListItemContainer>
      <div className='groupListItemWrapper'>
        <h3 className='groupListItemTitle'> {group.groupName}</h3>
        {/* <div className='groupListItemAvatarContainer'>
        <div className='groupListItemAvatarWrapper'>
        <img src={group.avatar} alt={group.groupName} />
        </div>
    </div> */}
        {/* <button type='button' onClick={deleteItem} className="groupListItemDeleteButton">
          Delete
        </button> */}
        <button type='button' onClick={goDetailsPage}>
          Details
        </button>
      </div>
    </GroupsListItemContainer>
  );
};

export default GroupsListItem;
