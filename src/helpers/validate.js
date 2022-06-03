export const validate = (values) => {
  const errors = {};
  if (!values.name || !values.name.trim()) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  } else if (values.name.length < 2) {
    errors.name = 'Must be 3 characters or more';
  }
  if (!values.preparation_time) {
    errors.preparation_time = 'Required';
  }

  if (!values.type) {
    errors.type = 'Required';
  }

  if (values.type === 'pizza') {
    if (!values.no_of_slices || !values.no_of_slices.trim()) {
      errors.no_of_slices = 'Required';
    }
    if (!values.diameter || !values.diameter.trim()) {
      errors.diameter = 'Required';
    }
  }
  if (values.type === 'soup') {
    if (!values.spiciness_scale || !values.spiciness_scale.trim()) {
      errors.spiciness_scale = 'Required';
    }
  }
  if (values.type === 'sandwich') {
    if (!values.slices_of_bread || !values.slices_of_bread.trim()) {
      errors.slices_of_bread = 'Required';
    }
  }

  return errors;
};
