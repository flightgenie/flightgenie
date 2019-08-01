import { appActionInterfaceUnion, appActionTypes } from '../actions/appActionTypes';
import { destination, form, layoverLocation, trip } from '../Interfaces';
import { simpleData, complexData, mockSearchResult } from '../utils/mockData';

export interface appStoreSliceInterface {
    form: form;
    pastTrips: trip[];
    tripChoices: trip[];
    userId: string;
    focusedTripIndex: number;
}

// const mockInitialState: appStoreSliceInterface = {
//     form: {},
//     pastTrips: [simpleData, complexData],
//     tripChoices: mockSearchResult,
//     username: 'bob',
//     focusedTripIndex: 0,
// };

const initialState: appStoreSliceInterface = {
    form: {},
    pastTrips: [],
    tripChoices: [],
    userId: 'bob',
    focusedTripIndex: 0,
};

export const appReducer = (state: appStoreSliceInterface = initialState, action: appActionInterfaceUnion) => {
    switch (action.type) {
        case appActionTypes.SUBMIT_FORM:
            return {
                ...state,
                tripChoices: action.payload,
            };
        case appActionTypes.GET_TRIPS:
            // your logic here!
            return state;
        case appActionTypes.ADD_TRIP:
            // your logic here!
            const pastTrips = [...state.pastTrips];
            pastTrips.push(action.payload);
            return {
                ...state,
                pastTrips,
            };
        case appActionTypes.FOCUS_TRIP:
            return {
                ...state,
                focusedTripIndex: action.payload,
            };
        default:
            return state;
    }
};
