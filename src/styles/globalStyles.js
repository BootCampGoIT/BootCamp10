import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body {
    background-color: ${({ theme }) => theme.colors.primary};
}

button {
    background-color: ${({ theme }) => theme.colors.main};
    height: 25px;
    font-weight: 700;
    font-size: 12px;
    transition: all 300ms linear;
    &:hover{
        background-color: red;
    }
}
`;
