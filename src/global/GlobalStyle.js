import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700;900&display=swap');


html {
  font-size: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: 'Lato', sans-serif;
  font-size: 0.8125rem;
  line-height: 1.4;
  display: flex;
  background-color: #f4f4f4;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  
  
 
}

h1,
h2,
h3,
h4 {
    margin: 0;
	padding: 0;
}




p {
  margin: 0;
  padding: 0;
}



button {
 cursor: pointer;
}

`;

export default GlobalStyle;
