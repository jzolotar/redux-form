import styled from 'styled-components';

export const Main = styled.main`
  background-color: white;
  padding: 2.5rem;
  font-size: 1.1rem;
  border-radius: 0.6rem;
  box-shadow: 20px 20px 26px -20px rgba(66, 68, 90, 1);
  width: 85vw;
  @media (min-width: 48rem) {
    max-width: 35rem;
  }
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  form {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    gap: 1rem;
  }
`;
