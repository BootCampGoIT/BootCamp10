import styled from "styled-components";

export const GroupFormContainer = styled.div`
  .groupsForm {
    background-color: ${(props) => props.theme.colors.secondary};
    display: flex;
    flex-direction: column;
    max-width: 300px;
    border: 1px solid ${(props) => props.theme.colors.main};
    border-radius: 16px;
    padding: 10px;
  }
  .groupFormAvatarImage {
  }
  .groupFormAvatarIcon {
    width: 40px;
    height: 40px;
    fill: currentColor;
  }
  .groupFormAvatarLabel {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100px;
    height: 100px;
    border: 1px solid ${(props) => props.theme.colors.main};
    border-radius: 16px;
    margin: 0 auto;
    overflow: hidden;
    color: ${(props) => props.theme.colors.main};
    transition: all 300ms linear;

    &:hover {
      background-color: ${(props) => props.theme.colors.active};
    }
    &:hover .groupFormAvatarIcon {
      fill: ${(props) => props.theme.colors.secondary};
    }
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
    cursor: pointer;
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
