import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { reset, Field, reduxForm } from 'redux-form';
import { Fragment } from 'react';
import normalizeDuration from './normalizeDuration';

const dishTypeValues = ['pizza', 'soup', 'sandwich'];

let UserForm = ({ dishType, handleSubmit, reset }) => {
  const pizzaElem = (
    <Fragment>
      <div>
        <label>Numbe of slices</label>
        <div>
          <Field
            name='pizzaSlice'
            component='input'
            type='number'
            placeholder='Dish Name'
            max='10'
            min='1'
          />
        </div>
      </div>
      <div>
        <label>Diameter</label>
        <div>
          <Field
            name='diameter'
            component='input'
            type='float'
            placeholder='Dish Name'
            max='10'
          />
        </div>
      </div>
    </Fragment>
  );

  const soupElem = (
    <Fragment>
      <div>
        <label>Spiciness scale</label>
        <div>
          <Field
            name='spicinessScale'
            component='input'
            type='number'
            placeholder='Dish Name'
            max='10'
            min='1'
          />
        </div>
      </div>
    </Fragment>
  );

  const sandwichElem = (
    <Fragment>
      <div>
        <label>Number of slices</label>
        <div>
          <Field
            name='spicinessScale'
            component='input'
            type='number'
            placeholder='Dish Name'
            max='20'
            min='1'
          />
        </div>
      </div>
    </Fragment>
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Dish Name</label>
        <div>
          <Field
            name='dishName'
            component='input'
            type='text'
            placeholder='Dish Name'
          />
        </div>
      </div>
      <div>
        <label>Preparation Time</label>
        <div>
          <Field
            name='prepTime'
            component='input'
            type='text'
            placeholder='00:00:00'
            normalize={normalizeDuration}
          />
        </div>
      </div>
      <div>
        <label>Dish Type</label>
        <div>
          <Field name='dishType' component='select'>
            <option value=''>Select a dish type...</option>
            {dishTypeValues.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </Field>
        </div>
      </div>
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

const validate = (values, dishType) => {
  const errors = {};
  if (!values.dishName) {
    errors.dishName = 'Required';
  } else if (values.dishName.length > 15) {
    errors.dishName = 'Must be 15 characters or less';
  } else if (values.dishName.length < 2) {
    errors.dishName = 'Must be 3 characters or more';
  }
  if (!values.prepTime) {
    errors.prepTime = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.prepTime = 'Must be a number';
  }

  if (!values.dishType) {
    errors.prepTime = 'Please select dish type';
  }

  //TODO: finish validation for all elements, dynamic elements dishtypes
  if (dishType === 'pizza') {
    if (!values.pizzaNumOfSlices) {
      errors.prepTime = 'Required';
    }
    if (!values.diameter) {
      errors.diameter = 'Required';
    }
  }
  if (dishType === 'soup') {
    if (!values.spicinessScale) {
      errors.spicinessScale = 'Required';
    }
  }
  if (dishType === 'sandwich') {
    if (!values.sandwich) {
      errors.sandwich = 'Required';
    }
  }
  return errors;
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
