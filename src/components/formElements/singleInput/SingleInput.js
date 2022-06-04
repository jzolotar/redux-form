import { StyledSingleInput } from './SingleInput.styled';

const SingleInput = ({
  placeholder,
  input,
  label,
  type,
  step,
  meta: { touched, error, warning },
}) => {
  return (
    <StyledSingleInput error={error} touched={touched}>
      <label>{label}:</label>
      <div>
        <input {...input} placeholder={placeholder} type={type} step={step} />
        {touched &&
          ((error && <small>{error}</small>) ||
            (warning && <small>{warning}</small>))}
      </div>
    </StyledSingleInput>
  );
};

export default SingleInput;
