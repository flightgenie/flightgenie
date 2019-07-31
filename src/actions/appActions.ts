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
  // return {
  //   type: appActionTypes.SUBMIT_FORM,
  //   payload: form,
  // };
  const formatted = form.departureDate.format('MM/DD/YYYY');
  const formCopy = Object.assign({}, form);
  formCopy.departureDate = formatted;
  console.log('formCopy', formCopy);
  return async (dispatch: Dispatch) => {
    // your code here ! add your own payload to the dispatched action.
    dispatch<submitFormActionInterface>({
      type: appActionTypes.SUBMIT_FORM,
      payload: form,
    });
  };
};
export const getTrips = (username: string) => {
  return async (dispatch: Dispatch) => {
    // your code here ! add your own payload to the dispatched action.
    dispatch<getTripsActionInterface>({
      type: appActionTypes.getTrips,
    });
  };
};
export const addTrip = (tripIndex: number) => {
  return async (dispatch: Dispatch) => {
    // your code here ! add your own payload to the dispatched action.
    dispatch<addTripActionInterface>({
      type: appActionTypes.addTrip,
    });
  };
};
export const focusTrip = (tripIndex: number): focusTripActionInterface => {
  // your code here ! add your own payload to the dispatched action.
  return {
    type: appActionTypes.focusTrip,
  };
};
