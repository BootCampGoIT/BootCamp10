import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
}

button {
    color: ${(props) => props.theme.colors.buttonText};
    background-color: ${(props) => props.theme.colors.main};
    height: 25px;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: none;
    border-radius: 16px;
    outline: none;
    cursor: pointer;
    padding: 0 24px;
    transition: all 300ms linear;
}

button:hover {
    background-color: ${(props) => props.theme.colors.active};
  }

label {
    color: ${(props) => props.theme.colors.label};
    outline: none;
    /* font-size: 16px; */
    /* line-height: 25px; */
}
ul {
    list-style: none;
}

input, select {
    color: ${(props) => props.theme.colors.input};
    border: 1px solid ${(props) => props.theme.colors.main};
    height: 26px;
    border-radius: 16px;
    outline: none;
    padding: 0 12px;
    width: 100%;
    margin: 8px 0;
   
}
select:hover{
    cursor: pointer;
}

input::-webkit-input-placeholder {
    color: "#dbd7d8";
}
input::-moz-placeholder {
    color: "#dbd7d8";
}
input:-moz-placeholder{
    color: "#dbd7d8";
}
input:-ms-input-placeholder{
    color: "#dbd7d8";
}

input::-webkit-input-placeholder{opacity: 0.5; transition: opacity 0.3s linear;}
input::-moz-placeholder{opacity: 0.5; transition: opacity 0.3s linear;}
input:-moz-placeholder{opacity: 0.5; transition: opacity 0.3s linear;}
input:-ms-input-placeholder{opacity: 0.5; transition: opacity 0.3s linear;}
input:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s linear;}
input:focus::-moz-placeholder{opacity: 0; transition: opacity 0.3s linear;}
input:focus:-moz-placeholder{opacity: 0; transition: opacity 0.3s linear;}
input:focus:-ms-input-placeholder{opacity: 0; transition: opacity 0.3s linear;}
`;
