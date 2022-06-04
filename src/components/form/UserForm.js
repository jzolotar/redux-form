import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { reset, Field, reduxForm } from 'redux-form';
import { Fragment } from 'react';
import SingleInput from '../formElements/singleInput/SingleInput';
import SelectDropDownList from '../formElements/select/SelectDropDown';
import { SubmissionError } from 'redux-form';
import { validate } from '../../helpers/validate';
import { normalizeDuration } from '../../helpers/normalizeDuration';
import { sendData } from '../../helpers/sendData';
import { Main } from '../../global/Main';
import { Button } from '../../global/Button';
import SubmitInfo from '../SubmitInfo';

let UserForm = ({ dishType, handleSubmit, submitSucceeded }) => {
  const pizzaElem = (
    <Fragment>
      <Field
        name='no_of_slices'
        component={SingleInput}
        type='number'
        placeholder='num of slices'
        label='Number of slices'
      />

      <Field
        name='diameter'
        component={SingleInput}
        type='number'
        placeholder='diameter'
        step='any'
        label='Diameter'
      />
    </Fragment>
  );

  const soupElem = (
    <Field
      name='spiciness_scale'
      component={SingleInput}
      type='number'
      placeholder='scale 1-10'
      label='Spiciness Scale'
    />
  );

  const sandwichElem = (
    <Field
      name='slices_of_bread'
      component={SingleInput}
      type='number'
      placeholder='num of slices'
      label='Number of Slices'
    />
  );

  return (
    <Main>
      {submitSucceeded && <SubmitInfo />}
      <h1>ReduxForm</h1>
      <form onSubmit={handleSubmit(validateSubmition)}>
        <Field
          name='name'
          type='text'
          component={SingleInput}
          label='Dish Name'
          placeholder='Enter dish name'
        />

        <Field
          name='preparation_time'
          component={SingleInput}
          type='text'
          label='Preparation Time'
          placeholder='00:00:00'
          normalize={normalizeDuration}
        />

        <Field label='Dish Type' name='type' component={SelectDropDownList} />

        {dishType === 'pizza' && pizzaElem}
        {dishType === 'soup' && soupElem}
        {dishType === 'sandwich' && sandwichElem}
        <div>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Main>
  );
};

const afterSubmit = (_, dispatch) => {
  setTimeout(() => {
    dispatch(reset('userForm'));
  }, 2500);
};

const validateSubmition = (values) => {
  const errors = {};
  let isError = false;
  if (!values.name || !values.name.trim()) {
    errors.name = 'Required';
    isError = true;
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
    isError = true;
  } else if (values.name.length < 2) {
    errors.name = 'Must be 3 characters or more';
    isError = true;
  }
  if (!values.preparation_time) {
    errors.preparation_time = 'Required';
    isError = true;
  }

  if (!values.type) {
    errors.type = 'Required';
    isError = true;
  }

  if (values.type === 'pizza') {
    if (!values.no_of_slices || !values.no_of_slices.trim()) {
      errors.no_of_slices = 'Required';
      isError = true;
    }
    if (!values.diameter || !values.diameter.trim()) {
      errors.diameter = 'Required';
      isError = true;
    }
  }
  if (values.type === 'soup') {
    if (!values.spiciness_scale || !values.spiciness_scale.trim()) {
      errors.spiciness_scale = 'Required';
      isError = true;
    }
  }
  if (values.type === 'sandwich') {
    if (!values.slices_of_bread || !values.slices_of_bread.trim()) {
      errors.slices_of_bread = 'Required';
      isError = true;
    }
  }
  if (isError) {
    throw new SubmissionError(errors);
  } else {
    //submit form to server
    return sendData(values).then((data) => {
      console.log(data);
      if (data.errors) {
        throw new SubmissionError(data.errors);
      } else {
      }
    });
  }
};

UserForm = reduxForm({
  form: 'userForm',
  validate,
  onSubmitSuccess: afterSubmit,
})(UserForm);

const selector = formValueSelector('userForm');

UserForm = connect((state) => {
  const dishType = selector(state, 'type');
  return { dishType };
})(UserForm);

export default UserForm;
