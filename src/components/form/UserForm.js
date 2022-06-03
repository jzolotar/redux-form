import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { reset, Field, reduxForm } from 'redux-form';
import { Fragment } from 'react';
import SingleInput from '../formElements/singleInput/SingleInput';
import SelectDropDownList from '../formElements/select/SelectDropDown';
import { SubmissionError } from 'redux-form';
import { validate } from '../../helpers/validate';
import { normalizeDuration } from '../../helpers/normalizeDuration';

let UserForm = ({ dishType, handleSubmit }) => {
  const pizzaElem = (
    <Fragment>
      <Field
        name='pizzaSlice'
        component={SingleInput}
        type='number'
        placeholder='Dish Name'
        label='Numbe of slices'
        max='10'
        min='1'
      />

      <Field
        name='diameter'
        component={SingleInput}
        type='float'
        placeholder='Dish Name'
        max='10'
        label='Diameter'
      />
    </Fragment>
  );

  const soupElem = (
    <Field
      name='spicinessScale'
      component={SingleInput}
      type='number'
      placeholder='scale 1-10'
      label='Spiciness Scale'
    />
  );

  const sandwichElem = (
    <Field
      name='sandwichNumOfSlices'
      component={SingleInput}
      type='number'
      placeholder='Dish Name'
      label='Number of Slices'
    />
  );

  return (
    <form onSubmit={handleSubmit(validateSubmition)}>
      <Field
        name='dishName'
        type='text'
        component={SingleInput}
        label='Dish Name'
        placeholder='Enter dish name'
      />

      <Field
        name='prepTime'
        component={SingleInput}
        type='text'
        label='Preparation Time'
        placeholder='00:00:00'
        normalize={normalizeDuration}
      />

      <Field label='Dish Type' name='dishType' component={SelectDropDownList} />

      {dishType === 'pizza' && pizzaElem}
      {dishType === 'soup' && soupElem}
      {dishType === 'sandwich' && sandwichElem}
      <div>
        <button type='submit'>Submit</button>
        <button>reset</button>
      </div>
    </form>
  );
};

const afterSubmit = (_, dispatch) => dispatch(reset('userForm'));

const validateSubmition = (values) => {
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
  if (isError) {
    throw new SubmissionError(errors);
  } else {
    //submit form to server
    localStorage.setItem('dish', JSON.stringify(values));
    fetch(
      'https://react-router-udemy-default-rtdb.europe-west1.firebasedatabase.app/',
      {
        method: 'POST',
        body: JSON.stringify(values),
      }
    );
  }
};

UserForm = reduxForm({
  form: 'userForm',
  validate,
  onSubmitSuccess: afterSubmit,
})(UserForm);

const selector = formValueSelector('userForm');

UserForm = connect((state) => {
  const dishType = selector(state, 'dishType');
  return { dishType };
})(UserForm);

export default UserForm;
