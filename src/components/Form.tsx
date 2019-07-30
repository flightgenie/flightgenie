import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitForm } from '../actions/appActions';
import { form } from '../interfaces'

const testForm: form = {
  origin: 'lax',
  roundTrip: true,
  departureTime: new Date(),
  numAdults: 3,
  flightClass: 'economy',
  directFlights: false,
  destination: 'jfk',
}


const Form: React.FC = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.app.username);
  return (
    <div>
      <button onClick={() => dispatch(submitForm(testForm))}>
        Submit Form
      </button>
    </div>
  )
};
export default Form;
