import styled from 'styled-components';

export const StyledSingleInput = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    font-size: 1rem;
    letter-spacing: 1.5px;
    color: #31d47d;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    input {
      /* border-radius: 0.5rem; */
      border: transparent;
      border-bottom: 1px solid #f4f4f4;
      background: transparent;
      padding: 0.25rem 0.5rem;
      padding-left: 0;
      outline: none;
      color: #f4f4f4;
      &:focus {
        border-bottom: 1px solid rgba(0, 255, 0, 0.6);
        box-shadow: 2px 8px 6px -6px rgba(0, 255, 0, 0.6);
      }

      &::placeholder {
        color: #f4f4f4;
      }
    }
    small {
      margin-top: 0.25rem;
      font-size: 0.8rem;
      color: #f42866;
      font-weight: 700;
      letter-spacing: 2px;
    }
  }
`;
