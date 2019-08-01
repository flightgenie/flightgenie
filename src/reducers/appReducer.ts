import { appActionInterfaceUnion, appActionTypes } from '../actions/appActionTypes';
import { destination, form, layoverLocation, trip } from '../Interfaces';
import { simpleData, complexData } from '../utils/mockTripData';

export interface appStoreSliceInterface {
    form: form;
    pastTrips: trip[];
    tripChoices: trip[];
    username: string;
    focusedTripIndex: number;
}

const initialState: appStoreSliceInterface = {
    form: {},
    pastTrips: [simpleData, complexData],
    tripChoices: [],
    username: 'bob',
    focusedTripIndex: 0,
};

export const appReducer = (
  state: appStoreSliceInterface = initialState,
  action: appActionInterfaceUnion
) => {
  switch (action.type) {
    case appActionTypes.SUBMIT_FORM:
      return {
        ...state,
        tripChoices : action.payload
      };
    case appActionTypes.getTrips:
      // your logic here!
      return state;
    case appActionTypes.addTrip:
      // your logic here!
      return state;
    case appActionTypes.focusTrip:
      // your logic here!
      return state;
    default:
      return state;
  }
};
