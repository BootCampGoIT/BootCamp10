import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 2px solid ${({ theme }) => theme.colors.main};

  .headerLogo {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.attention};
    font-size: 24px;
    font-weight: 700;
  }
`;
