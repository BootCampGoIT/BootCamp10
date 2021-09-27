import styled from "styled-components";

export const NavigationContainer = styled.nav`
  .navList {
    display: flex;
    align-items: center;
  }
  .navItem:not(:last-child) {
    margin-right: 20px;
  }
  .navLink {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.main};
    font-weight: 700;
    &:hover {
      color: ${(props) => props.theme.colors.active};
    }
  }
`;
