const dishTypeValues = ['pizza', 'soup', 'sandwich'];

const SelectDropDownList = ({
  input,
  label,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
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
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};

export default SelectDropDownList;
