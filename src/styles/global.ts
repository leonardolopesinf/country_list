import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        display: flex;
        justify-content: center;
        width: 100vw;
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.primary};
        overflow-x: hidden;
    }

    label, a, img {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    button, a {
        cursor: pointer
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;