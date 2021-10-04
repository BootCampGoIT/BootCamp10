import styled from "styled-components";

export const SectionContainer = styled.section`
  .sectionTitle {
    color: ${({ theme }) => theme.colors.main};
    margin-left: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.main};
  }
`;
