export const validate = (values) => {
  const errors = {};
  let isError = false;
  if (!values.dishName || !values.dishName.trim()) {
    errors.dishName = 'Required';
    isError = true;
  } else if (values.dishName.length > 15) {
    errors.dishName = 'Must be 15 characters or less';
    isError = true;
  } else if (values.dishName.length < 2) {
    errors.dishName = 'Must be 3 characters or more';
    isError = true;
  }
  if (!values.prepTime) {
    errors.prepTime = 'Required';
    isError = true;
  }

  if (!values.dishType) {
    errors.dishType = 'Required';
    isError = true;
  }

  if (values.dishType === 'pizza') {
    if (!values.pizzaSlice || !values.pizzaSlice.trim()) {
      errors.pizzaSlice = 'Required';
      isError = true;
    }
    if (!values.diameter || !values.diameter.trim()) {
      errors.diameter = 'Required';
      isError = true;
    }
  }
  if (values.dishType === 'soup') {
    if (!values.spicinessScale || !values.spicinessScale.trim()) {
      errors.spicinessScale = 'Required';
      isError = true;
    }
  }
  if (values.dishType === 'sandwich') {
    if (!values.sandwich || !values.sandwich.trim()) {
      errors.sandwich = 'Required';
      isError = true;
    }
  }

  return errors;
};
