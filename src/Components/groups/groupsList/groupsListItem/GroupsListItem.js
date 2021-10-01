import React from "react";
import { GroupsListItemContainer } from "./GroupsListItemStyled";
const GroupsListItem = ({ group, deleteGroup }) => {
  const deleteItem = () => deleteGroup(group.id);
  return (
    <GroupsListItemContainer>
      <div className='groupListItemWrapper'>
        <h3 className='groupListItemTitle'> {group.groupName}</h3>
        {/* <div className='groupListItemAvatarContainer'>
        <div className='groupListItemAvatarWrapper'>
        <img src={group.avatar} alt={group.groupName} />
        </div>
    </div> */}
        <button type='button' onClick={deleteItem} className="groupListItemDeleteButton">
          Delete
        </button>
      </div>
    </GroupsListItemContainer>
  );
};

export default GroupsListItem;
