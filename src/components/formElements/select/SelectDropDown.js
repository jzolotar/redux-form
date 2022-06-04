import { StyledSelectDropDownList } from './SelectDropDown.styled';

const dishTypeValues = ['pizza', 'soup', 'sandwich'];

const SelectDropDownList = ({
  input,
  label,
  meta: { touched, error, warning },
}) => {
  return (
    <StyledSelectDropDownList touched={touched} error={error}>
      <label>{label}</label>
      <div>
        <select {...input}>
          <option value=''>Select a dish type...</option>
          {dishTypeValues.map((dishType) => (
            <option value={dishType} key={dishType}>
              {dishType}
            </option>
          ))}
        </select>
      </div>
      {touched &&
        ((error && <small>{error}</small>) ||
          (warning && <small>{warning}</small>))}
    </StyledSelectDropDownList>
  );
};

export default SelectDropDownList;
