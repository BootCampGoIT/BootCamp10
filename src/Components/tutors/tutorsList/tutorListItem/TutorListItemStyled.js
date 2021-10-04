import styled from "styled-components";

export const TutorListItemContainer = styled.li`
  width: 50%;
  padding: 5px;

  .tutorListItemWrapper {
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 5px;
  }
  .tutorListItemTitle {
    text-align: center;
  }
  .tutorListItemAvatarContainer {
    flex-grow: 1;
  }
  .tutorListItemAvatarWrapper {
    overflow: hidden;
    border-radius: 16px;
    width: 200px;
  }
  .tutorListItemDetailsButton {
    margin-top: 10px;
  }

  .active {
    background-color: red;
  }
  .inActive {
    background-color: green;
  }
  @media (min-width: 768px) {
    width: 25%;
  }
  @media (min-width: 1024px) {
    width: 20%;
  }
`;
