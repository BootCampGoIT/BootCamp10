import styled from "styled-components";

export const CourseFormContainer = styled.div`
  .courseForm {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    padding: 5px;
  
  }

  .courseFormLabel {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 10px;
    border-radius: 6px;

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.active};
    }
  }
`;
