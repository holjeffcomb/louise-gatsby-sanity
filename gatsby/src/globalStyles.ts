import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: #B48791;
        width: 100%;
        font-family: "Hepta Slab", Open-Sans, Helvetica, Sans-Serif;
    }

    p {
        font-family: "Hepta Slab", serif;
    }
    
    .title {
        font-family: "Sacramento", Arial, Helvetica, sans-serif;
        font-size: 40px;
        color: white;
        text-align: center;
    }

    .quote {
        font-family: "Homemade Apple", Arial, Helvetica, sans-serif;
        font-size: 50px;
        color: white;
        text-align: center;
    }
`;

export default GlobalStyles;
