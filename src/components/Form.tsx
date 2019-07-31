import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { submitForm } from '../actions/appActions';
import { form, destination} from '../interfaces';



const dest: destination = {
  location: 'jfk',
  numDays: 3
}

const testForm: form = {
  origin: 'lax',
  roundTrip: true,
  departureTime: Math.round((new Date()).getTime() / 1000), //UNIX time
  numAdults: 3,
  flightClass: 'economy',
  directFlights: false,
  destinations: [dest],
};


const inputForm: React.FC = (props: any): JSX.Element => {
  return (
    <Form>
      <label className = 'origin'>
        Origin
        <input className = 'text-input' type = 'text'/>
      </label>
      
    </Form>
    )
  }

  const Form = styled.form`

  `;

  


export default inputForm;

