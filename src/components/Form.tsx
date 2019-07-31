import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { submitForm } from '../actions/appActions';
import { form, destination} from '../interfaces';
//import console = require('console');
// import console = require('console');
//import console = require('console');

const dest: destination = {
  location: 'jfk',
  numDays: 3
}

const testForm: form = {
  origin: 'lax',
  roundTrip: true,
  departureDate: '', //UNIX time
  numAdults: 3,
  flightClass: 'economy',
  directFlights: false,
  destinations: [dest],
};

const Form: React.FC = (props: any): JSX.Element => {
  const [focused, setFocusedInput] = useState(null);
  const [ numDestinations, setNumDestinations] = useState(1);
  const [formData, setFormData] = useState({numAdults: 1, departureDate : moment(), endDate : moment().add(7, 'days')});
  const [startDate, setStartDate] = useState(null);
  const [airlineClass, setAirlineClass] = useState('economy');

  const dispatch = useDispatch(); // for redux actions
  const username = useSelector(state => state.app.username); // for getting redux state

  const updateFormData = (e: any, property: any) => {
    const inputValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData(prev => ({...prev, [property]: inputValue}));
  }

  const updateDates = (date: any)=> {
;
    setFormData(prev => ({...prev, departureDate: date.startDate, endDate: date.endDate}))
 
  }

  const addDestinationClick = (e: any) => {
    e.preventDefault();
    setNumDestinations(numDestinations+1)
  }

  const renderDestinationBoxes = () => {
    return Array.from({length: numDestinations}, (_, i) => {
      return(
    <label key = {i} className="form-label">
    To
    <input onChange = {(e) => updateFormData(e, `destination-${i + 1}`)} className="text-input" type="text" name="name" />
    </label>
    )
    });
  }

  const handleClass = (e: any) => {
    setFormData(prev => ({...prev, 'class': e.target.value}))
  }
  const addPassenger = (e: any) => {
    e.preventDefault();
    setFormData((prev) => ({...prev, numAdults: prev.numAdults + 1}))
  }
  const renderPassengers = () => {
    return (
     <div>{formData.numAdults}</div>
    )
  }

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    dispatch(submitForm(formData))

  }

  return (
    <FormContainer onSubmit={ handleSubmitForm }>
      <label className="form-label">
        Origin
        <input onChange = {(e)=> updateFormData(e, 'origin') }className="text-input" type="text" name="name" />
      </label>

      {renderDestinationBoxes()}

      <button onClick = {(e) => {addDestinationClick(e)}}>Add Destination</button>

      <label className="form-label">
        Start date
      </label>

      <DateRangePicker
        startDate={formData.departureDate} // momentPropTypes.momentObj or null,
        startDateId="start-date" // PropTypes.string.isRequired,
        endDate={formData.endDate} // momentPropTypes.momentObj or null,
        endDateId="end-date" // PropTypes.string.isRequired,
        onDatesChange={(date) => updateDates(date)} // PropTypes.func.isRequired,
        focusedInput={focused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focus => setFocusedInput(focus)} // PropTypes.func.isRequired,
        
      />

      <label className="form-label">
        Number of Passengers:
        <div>
          {renderPassengers()}
          <button onClick = {addPassenger}>+</button>
        </div>

      </label>
      <label className = 'form-label'>
        Airline Class: 
      <select onChange = {(e) => updateFormData(e, 'airline-class')} defaultValue="economy">
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="first-class"> First Class</option>
      </select>
      </label>

      <label className = 'form-label'>
        Round Trip
        <input type = 'radio' onChange={(e) => updateFormData(e, 'tripType')} value="round-trip" className = 'round-trip' checked={formData.tripType === "round-trip" ? true : false}/>
        One Way
        <input type = 'radio' onChange={(e) => updateFormData(e, 'tripType')} value="one-way" className = 'one-way' checked={formData.tripType === "one-way" ? true : false}/>
      </label>

      <label className = 'form-label'>
        Direct Flights Only
        <input onChange={(e) => updateFormData(e, "directFlightsOnly")} type = 'checkbox'></input>
      </label>

      <button >
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
