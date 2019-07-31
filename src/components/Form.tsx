import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { submitForm } from '../actions/appActions';
import { form, destination} from '../interfaces';

const Form: React.FC = (props: any): JSX.Element => {
  // React state hooks
  const [focused, setFocusedInput] = useState(null);
  const [numDestinations, setNumDestinations] = useState(1);
  const [formData, setFormData] = useState({numAdults: 1, 'destinationNumDays-1': 0, departureDate : moment(), endDate : moment().add(7, 'days'), flightClass: 'economy'});
  const [startDate, setStartDate] = useState(null);
  
  // Calculations for amount of days to spend in each location
  let tripStart = formData.departureDate
  const tripEnd = formData.endDate
  const difference = tripEnd.diff(tripStart, 'days');
  const [daysToUse, setDaysToUse] = useState(difference);


  // Redux hooks
  const dispatch = useDispatch();
  const username = useSelector(state => state.app.username);

  const updateFormData = (e: any, property: any) => {
    const inputValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData(prev => ({...prev, [property]: inputValue}));
  }

  const updateDates = (date: any)=> {
    setFormData(prev => ({...prev, departureDate: date.startDate, endDate: date.endDate}))
  }

  const addDestinationClick = (e: any) => {
    e.preventDefault();
    const destinationNumDaysKey = `destinationNumDays-${numDestinations + 1}`;
    setNumDestinations(numDestinations+1)
    setFormData(prev => ({...prev, [destinationNumDaysKey]: 0}));
  }

  const renderDestinationBoxes = () => {
    return Array.from({length: numDestinations}, (_, i) => {
      return(
        <div>
    <label key = {`destination-input-${i}`} className="form-label">
    To
    <input onChange = {(e) => updateFormData(e, `destination-${i + 1}`)} className="text-input" type="text" name="name" />
    Days Spent Here <span>{formData[`destinationNumDays-${i + 1}`]}</span>
    
    </label>
    
    <label key = {`destination-add-day-${i}`}>
      Add Day
        <button onClick={() => addDestinationDay(i + 1)}>+</button>
    </label>

    <label key = {`destination-subtract-day-${i}`}>
      Subtract Day
        <button onClick={() => subtractDestinationDay(i + 1)}>-</button>
    </label>
    </div>
    )
    });
  }

  const addDestinationDay = (index) => {
    if (daysToUse > 0) {
      const destinationNumDaysKey = `destinationNumDays-${index}`;
      setFormData(prev => ({...prev, [destinationNumDaysKey]: prev[destinationNumDaysKey] + 1 }))
      setDaysToUse(daysToUse - 1);
    } else {
      alert(`You don't have enough days left!`)
    }
  }

  const subtractDestinationDay = (index) => {
    const a = formData.departureDate
    const b = formData.endDate
    const difference = b.diff(a, 'days');
    const destinationNumDaysKey = `destinationNumDays-${index}`;
    if (daysToUse < difference && formData[destinationNumDaysKey] + 1 > 1) {
      setFormData(prev => ({...prev, [destinationNumDaysKey]: prev[destinationNumDaysKey] - 1 }))
      setDaysToUse(daysToUse + 1);
    } else {
      alert(`You don't have that many days!`)
    }
  }

  const addPassenger = (e: any) => {
    e.preventDefault();
    setFormData((prev) => ({...prev, numAdults: prev.numAdults + 1}))
  }

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    dispatch(submitForm(formData))
  }

  return (
    <FormContainer onSubmit={ handleSubmitForm }>
      <label className="form-label">
        Origin
        <input onChange = {(e)=> updateFormData(e, 'origin') } className="text-input" type="text" name="name" />
      </label>
      {renderDestinationBoxes()}
      <p>Days Left To Use</p>
      {daysToUse}
    <br></br>
      <button onClick = {(e) => {addDestinationClick(e)}}>Add Destination</button>

      <label className="form-label">
        Start date
      </label>

      <DateRangePicker
        startDate={formData.departureDate}
        startDateId="start-date"
        endDate={formData.endDate}
        endDateId="end-date"
        onDatesChange={(date) => updateDates(date)}
        focusedInput={focused}
        onFocusChange={focus => setFocusedInput(focus)}
      />

      <label className="form-label">
        Number of Passengers:
        <div>
         <p>{formData.numAdults}</p>
          <button onClick = {addPassenger}>+</button>
        </div>

      </label>
      <label className = 'form-label'>
        Airline Class: 
      <select onChange = {(e) => updateFormData(e, 'flightClass')} defaultValue="economy">
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
        <input onChange={(e) => updateFormData(e, "directFlights")} type = 'checkbox'></input>
      </label>

      <button>
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
