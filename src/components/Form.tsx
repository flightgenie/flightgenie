import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { submitForm } from '../actions/appActions';
import { form } from '../interfaces';

const testForm: form = {
  origin: 'lax',
  roundTrip: true,
  departureTime: new Date(),
  numAdults: 3,
  flightClass: 'economy',
  directFlights: false,
  destination: 'jfk',
};

const Form: React.FC = (props: any): JSX.Element => {
  const [focused, setFocusedInput] = useState(null);
  const dispatch = useDispatch();
  const counter = useSelector(state => state.app.username);
  const now = moment();
  const later = moment().add(7, 'days');
  console.log('now', now);
  console.log('later', later);

  return (
    <FormContainer>
      <label className="form-label">
        From
        <input className="text-input" type="text" name="name" />
      </label>
      <label className="form-label">
        To
        <input className="text-input" type="text" name="name" />
      </label>
      <label className="form-label">
        Start date
        <input className="text-input" type="text" name="name" />
      </label>
      <SingleDatePicker
        date={now} // momentPropTypes.momentObj or null,
        onDateChange={date => console.log('set the date to', date)}
        focused={focused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focus => setFocusedInput(focus)} // PropTypes.func.isRequired,
        id="alsdfjklasdfj"
      />
      <label className="form-label">
        Number of adults
        <input className="text-input" type="text" name="name" />
      </label>
      <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">
          Coconut
        </option>
        <option value="mango">Mango</option>
      </select>
      <button onClick={() => dispatch(submitForm(testForm))}>
        Submit Form
      </button>
    </FormContainer>
  );
};
export default Form;

const FormContainer = styled.form`
  margin-top: 100px;
  max-width: 800px;
  width: 100%;

  .form-label {
    display: block;
  }
`;
