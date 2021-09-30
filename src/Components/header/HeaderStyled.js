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
  .headerBurgerMenu {
    width: 40px;
    height: 40px;
    fill: ${({ theme }) => theme.colors.main};
  }
  .navigationWrapper {
    display: flex;
    align-items: center;
  }
  .headerThemeButton {
    margin-left: 20px;
  }
  .headerSettingsBlock {
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    &:hover {
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .headerSettings {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.main};
  }

  .headerModalSettingsWrapper {
    background-color: white;
    padding: 20px;
    border-radius: 16px;
  }
  .headerModalWrapper {
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    height: 100%;
  }
`;
