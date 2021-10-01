import styled from "styled-components";

export const AddItemContainer = styled.li`
  width: 50%;
  padding: 5px;
  cursor: pointer;

  .addItemWrapper {
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 100%;
    height: 100%;
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.main};
    }
  }
  .addItemIcon {
    width: 40px;
    height: 40px;
    fill: ${({ theme }) => theme.colors.main};
  }

  @media (min-width: 768px) {
    width: 25%;
  }
  @media (min-width: 1024px) {
    width: 20%;
  }
`;
