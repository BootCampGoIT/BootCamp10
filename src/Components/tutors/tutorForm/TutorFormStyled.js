import styled from "styled-components";

export const TutorFormContainer = styled.div`
  .tutorForm {
    background-color: ${(props) => props.theme.colors.secondary};
    display: flex;
    flex-direction: column;
    max-width: 300px;
    border: 1px solid ${(props) => props.theme.colors.main};
    border-radius: 16px;
    padding: 10px;
  }
  .tutorFormAvatarLabel {
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
    &:hover .tutorFormAvatarIcon {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
  .tutorFormAvatarIcon {
    width: 40px;
    height: 40px;
    fill: currentColor;
  }
  .tutorFormAvatarInput {
    display: none;
  }
  .tutorFormExperienceBlock {
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0;
  }
  .tutorFormExperienceRadio {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
  .tutorFormExperienceLabel {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .tutorFormExperienceLabelTitle {
    margin-right: 10px;
  }
`;
