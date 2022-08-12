import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  #root {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
  }

  h1 {
    font-size: 6rem;
    font-family: 'Inter', sans-serif;
  }

  h3 {
    font-size: 2rem;
    color: #DFDDDD;
    margin-top: 2rem;
  }

  @media screen and (max-width: 50rem) {
    h1 {
      font-size: 4rem;
    }
  }
`

export default GlobalStyle