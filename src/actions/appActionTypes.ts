import { destination, form, layoverLocation, trip } from '../Interfaces';

export interface submitFormActionInterface {
  type: appActionTypes.submitForm;
  payload?: trip[];
}

export interface getTripsActionInterface {
  type: appActionTypes.getTrips;
  payload?: trip[];
}

export interface addTripActionInterface {
  type: appActionTypes.addTrip;
  payload?: trip;
}

export interface focusTripActionInterface {
  type: appActionTypes.focusTrip;
  payload?: number;
}
export enum appActionTypes {
  SUBMIT_FORM = 'SUBMIT_FORM',
  GET_TRIPS = 'GET_TRIPS',
  ADD_TRIP = 'ADD_TRIP',
  FOCUS_TRIP = 'FOCUS_TRIP',
}

export type appActionInterfaceUnion =
  | submitFormActionInterface
  | getTripsActionInterface
  | addTripActionInterface
  | focusTripActionInterface;
