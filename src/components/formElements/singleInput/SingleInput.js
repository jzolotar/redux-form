import { StyledSingleInput } from './SingleInput.styled';

const SingleInput = ({
  placeholder,
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <StyledSingleInput>
      <label>{label}:</label>
      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched &&
          ((error && <small>{error}</small>) ||
            (warning && <small>{warning}</small>))}
      </div>
    </StyledSingleInput>
  );
};

export default SingleInput;
