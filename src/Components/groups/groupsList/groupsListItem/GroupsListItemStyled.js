import styled from "styled-components";

export const GroupsListItemContainer = styled.li`
  width: 50%;

  .groupListItemWrapper {
    border: 1px solid ${(props) => props.theme.colors.secondary};
    margin: 5px;
    border-radius: 16px;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  .groupListItemTitle {
    text-align: center;
  }
  .groupListItemAvatarContainer {
    flex-grow: 1;
  }
  .groupListItemAvatarWrapper {
    overflow: hidden;
    border-radius: 16px;
    width: 200px;
  }
  .groupListItemDeleteButton {
    margin-top: 10px;
  }
  @media (min-width: 768px) {
    width: 25%;
  }
  @media (min-width: 1024px) {
    width: 20%;
  }
`;
