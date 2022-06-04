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
  background-color: #63d471;
  background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);
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

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: #f4f4f4f4;
  -webkit-box-shadow: 0 0 0px 1000px #333 inset;
  transition: background-color 5000s ease-in-out 0s;
}

`;

export default GlobalStyle;
