import { Dispatch } from 'redux';
import axios from 'axios';
import * as moment from 'moment';
import {
    appActionTypes,
    submitFormActionInterface,
    getTripsActionInterface,
    addTripActionInterface,
    focusTripActionInterface,
} from './appActionTypes';
import { destination, form, layoverLocation, trip } from '../Interfaces';
import { any } from 'prop-types';

export const submitForm = (form: form) => {
    console.log('this is what imt gettoimg;', form);
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
                location: value.toUpperCase(),
                numDays,
            };

            delete formCopy[key];
            delete formCopy[destinationNumDaysKey];
            allDestinations.push(destination);
        }
        return allDestinations;
    }, []);

    formCopy.destinations = destinations;
    formCopy.origin = formCopy.origin.toUpperCase();

    delete formCopy.tripType;
    delete formCopy.endDate;

    return async (dispatch: Dispatch) => {
        axios.post('http://localhost:3000/search', formCopy).then(({ data }) => {
            console.log(data);
            dispatch<submitFormActionInterface>({
                type: appActionTypes.SUBMIT_FORM,
                payload: data,
            });
        });
    };
};

export const getTrips = (trips: any ) => {
    return async (dispatch: Dispatch) => {
        // your code here ! add your own payload to the dispatched action.
        console.log('trips in actions', trips)
        dispatch<getTripsActionInterface>({
            type: appActionTypes.GET_TRIPS,
            payload: trips
        });
    };
};
export const addTrip = (tripIndex: trip) => {
    const tripCopy = tripIndex;
    tripCopy.userId = '578df3efb618f5141202a196';
    return async (dispatch: Dispatch) => {
        // your code here ! add your own payload to the dispatched action.
        axios.post('http://localhost:3000/trips', tripCopy).then(({ data }) => {
            console.log('after axios addtrip', data);
            dispatch<addTripActionInterface>({
                type: appActionTypes.ADD_TRIP,
                payload: tripIndex,
            });
        });
    };
};

export const addUserId = (userId: any) => {
    console.log('addUserIdAction', userId);
    return {
        type: appActionTypes.SET_USER_ID,
        payload: userId,

    }
}
export const focusTrip = (tripIndex: number): focusTripActionInterface => {
    // your code here ! add your own payload to the dispatched action.
    console.log('yeet', tripIndex);
    return {
        type: appActionTypes.FOCUS_TRIP,
        payload: tripIndex,
    };
};
