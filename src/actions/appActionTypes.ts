import { destination, form, trip } from '../Interfaces';
import { any } from 'prop-types';

export interface submitFormActionInterface {
  type: appActionTypes.SUBMIT_FORM;
  payload?: trip[];
}
export interface getTripsActionInterface {
  type: appActionTypes.GET_TRIPS;
  payload?: trip[];
}
export interface addTripActionInterface {
  type: appActionTypes.ADD_TRIP;
  payload?: trip;
}
export interface focusTripActionInterface {
  type: appActionTypes.FOCUS_TRIP;
  payload?: number;
}
export interface setUserIdActionInterface {
  type: appActionTypes.SET_USER_ID;
  payload?: number;
}

export interface setUserIdActionInterface {
    type: appActionTypes.SET_USER_ID;
    payload?: number;
}

export enum appActionTypes {
  SUBMIT_FORM = 'SUBMIT_FORM',
  GET_TRIPS = 'GET_TRIPS',
  ADD_TRIP = 'ADD_TRIP',
  FOCUS_TRIP = 'FOCUS_TRIP',
  SET_USER_ID = 'SET_USER_ID',
}
export type appActionInterfaceUnion =
  | submitFormActionInterface
  | getTripsActionInterface
  | addTripActionInterface
  | focusTripActionInterface
  | setUserIdActionInterface;


