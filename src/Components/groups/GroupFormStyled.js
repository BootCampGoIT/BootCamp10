import styled from "styled-components";

export const GroupFormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  .groupsForm {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    border: 1px solid black;
    padding: 10px;
  }
  .groupFormAvatarImage {
  }
  .groupFormAvatarLabel {
    display: block;
    cursor: pointer;
    width: 100px;
    height: 100px;
    border: 1px solid ${(props) => props.theme.colors.main};
    border-radius: 16px;
    margin: 0 auto;
    overflow: hidden;
  }
  .groupFormAvatarInput {
    display: none;
  }
  .groupFormStudentsListLabel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;

    &:hover {
      background-color: ${(props) => props.theme.colors.main};
      color: ${(props) => props.theme.colors.primary};
      cursor: pointer;
    }
  }
  .groupFormStudentsList {
    /* overflow: scroll-y;
    height: 200px; */
    border-radius: 16px;
    margin: 10px 0;
  }
  .groupFormStudentsListTitle {
    width: 200px;
  }
  .groupFormStudentsListInput {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
  .groupFormActiveGroup {
    display: flex;
    justify-content: space-evenly;
  }
  .groupFormActiveGroupLabel {
    display: flex;
    align-items: center;
  }
  .groupFormActiveGroupInput {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
  .groupFormActiveGroupTitle {
    margin-right: 10px;
  }
`;
