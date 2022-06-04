import styled from 'styled-components';

export const StyledSelectDropDownList = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    font-size: 1rem;
    letter-spacing: 1.5px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    select {
      border-radius: 0.5rem;
      border: 1px solid #333;
      padding: 0.25rem 0.5rem;
    }
  }
  small {
    font-size: 0.8rem;
    color: #f42866;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;
