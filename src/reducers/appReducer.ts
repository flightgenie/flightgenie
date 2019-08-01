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

export const appReducer = (state: appStoreSliceInterface = initialState, action: appActionInterfaceUnion) => {
    switch (action.type) {
        case appActionTypes.SUBMIT_FORM:
            return {
                ...state,
                form: action.payload,
            };
        case appActionTypes.GET_TRIPS:
            // your logic here!
            return state;
        case appActionTypes.ADD_TRIP:
            // your logic here!
            return state;
        case appActionTypes.FOCUS_TRIP:
            // your logic here!
            return { ...state, focusedTripIndex: action.payload };
        default:
            return state;
    }
};
