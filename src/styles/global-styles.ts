import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
} 
html, 
body {  
        background: #fff;
        font-size: 62.5%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
    }
   
    li {
        list-style: none;
    }
    button {
        appearance: none;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.6rem;
    }
    input {
        appearance: none;
        border: none;
    }
    a {
        cursor: pointer;
        font-size:1.6rem;
        text-decoration: none;
    }
    p {
        font-size: 1.6rem;
        line-height: 1.4;
    }
    
    img {
        display: block;
        max-width: 100%;
    }
    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
        appearance: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
`;
