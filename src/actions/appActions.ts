import { Dispatch } from 'redux';
import * as moment from 'moment';
import {
  appActionTypes,
  submitFormActionInterface,
  getTripsActionInterface,
  addTripActionInterface,
  focusTripActionInterface,
} from './appActionTypes';
import { destination, form, layoverLocation, trip } from '../Interfaces';

export const submitForm = (form: form) => {  
  const formCopy = Object.assign({}, form);
  const formattedDeparture = form.departureDate.format('MM/DD/YYYY');
  formCopy.departureDate = formattedDeparture;
  formCopy.userId = '1';

  if (formCopy.tripType === 'round-trip') {
    formCopy.roundTrip = true;
  } else {
    formCopy.roundTrip = false;
  }

  const destinations = Object.entries(formCopy).reduce((allDestinations, destinationEntry, index) => {
    const [key, value] = destinationEntry;
    if (key.includes('destination-')) {
      const [_, destinationIndex] = key.split('-');
      const destinationNumDaysKey = `destinationNumDays-${destinationIndex}`;
      const numDays = formCopy[destinationNumDaysKey];

      const destination = {
        location: value,
        numDays
      }
      
      delete formCopy[key];
      delete formCopy[destinationNumDaysKey];
      allDestinations.push(destination);
    }
    return allDestinations;
  }, []);

  formCopy.destinations = destinations;

  delete formCopy.tripType;
  delete formCopy.endDate;

  console.log('formCopy', formCopy);
  
  return async (dispatch: Dispatch) => {
    // your code here ! add your own payload to the dispatched action.
    dispatch<submitFormActionInterface>({
      type: appActionTypes.SUBMIT_FORM,
      payload: null,
    });
  };
};
export const getTrips = (username: string) => {
  return async (dispatch: Dispatch) => {
    // your code here ! add your own payload to the dispatched action.
    dispatch<getTripsActionInterface>({
      type: appActionTypes.GET_TRIPS,
    });
  };
};
export const addTrip = (tripIndex: number) => {
  return async (dispatch: Dispatch) => {
    // your code here ! add your own payload to the dispatched action.
    dispatch<addTripActionInterface>({
      type: appActionTypes.ADD_TRIP,
    });
  };
};
export const focusTrip = (tripIndex: number): focusTripActionInterface => {
  // your code here ! add your own payload to the dispatched action.
  return {
    type: appActionTypes.FOCUS_TRIP,
  };
};
