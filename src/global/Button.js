import styled from 'styled-components';

export const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #31d47d;
  border-radius: 0.6em;
  color: #31d47d;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1;
  padding: 0.8rem 1.8rem;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  margin-top: 2rem;

  &:hover {
    box-shadow: 0 0 40px 40px #31d47d inset;
  }

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
  }
`;
