import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        background-color: #EEE;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;