import styled from 'styled-components';

const SubmitInfo = () => {
  return (
    <StyledSubmitInfo>
      <p>Data has been successfully submitted</p>
    </StyledSubmitInfo>
  );
};
export default SubmitInfo;

const StyledSubmitInfo = styled.article`
  position: absolute;
  top: 0px;
  left: 0;
  background-color: #fff;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  color: #31d47d;
  font-weight: 700;
  letter-spacing: 1px;
  font-style: italic;
`;
