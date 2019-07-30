import { Dispatch } from 'redux';
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
