import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm, addTrip } from '../actions/appActions';
import uuid from 'uuid';
import { format } from 'date-fns';

import { Nav, Wrapper } from '../utils';

const SearchResults: React.FC = (props: any): JSX.Element => {
    const dispatch = useDispatch();
    const { tripsDisplay } = useSelector((state: any) => ({
        tripsDisplay: state.app.tripChoices,
    }));

    const renderRoutes = (routes: any) => {
        return routes.map((route: any, i: number) => {
            const { airline, arrivalTime, flightNumber, fromAirport, toAirport, departureTime } = route;
            return (
                <div
                    id="route-result"
                    style={{ borderBottom: '1px solid blue', fontSize: '12px', padding: '2px 0px' }}
                    key={uuid()}
                >
                    <h4 style={{ margin: '2px 0px' }}>Leg {i + 1}</h4>
                    <p style={{ margin: '2px 0px' }}>From: {fromAirport}</p>
                    <p style={{ margin: '2px 0px' }}>To: {toAirport}</p>
                    <p style={{ margin: '2px 0px' }}>
                        Departs: {format(new Date(departureTime * 1000), 'M/DD/YYYY h:mma')}
                    </p>
                    <p style={{ margin: '2px 0px' }}>
                        Arrives: {format(new Date(arrivalTime * 1000), 'M/DD/YYYY h:mma')}
                    </p>
                    <p style={{ margin: '2px 0px' }}>
                        Airline & Flight No.: {airline}
                        {flightNumber}
                    </p>
                </div>
            );
        });
    };

    const renderSearchResults = () => {
        //data = [app.tripChoices.flights[0]]
        return tripsDisplay.map((trip: any, tripIndex: number) => {
            const { flights } = trip;
            const flightComponents = flights.map((flight: any, flightIndex: number) => {
                const { fromAirport, toAirport, price, routes, deepLink } = flight;
                return (
                    // ! middle, for the flights
                    <div
                        id="flight-result"
                        style={{
                            boxShadow: '2px 3px 7px 0px rgba(0,0,0,0.75)',
                            borderRadius: '10px',
                            margin: '10px',
                            maxHeight: '300px',
                            overflowY: 'auto',
                            padding: '10px',
                        }}
                        key={uuid()}
                    >
                        <h3>
                            Flight {flightIndex + 1}{' '}
                            <a
                                style={{
                                    color: 'white',
                                    background: '#73c781',
                                    borderRadius: '10px',
                                    border: '1px solid black',
                                    padding: '2px 8px',
                                    margin: '4px',
                                }}
                                href={`${deepLink}`}
                                target={'_blank'}
                            >
                                BUY
                            </a>
                        </h3>
                        <p style={{ margin: '2px 0px' }}>
                            From: {fromAirport + ' '} | To: {' ' + toAirport}
                        </p>
                        <p style={{ margin: '2px 0px' }}>Price: ${price}</p>
                        <div
                            className="routes"
                            style={{
                                //! INNERMOST, for the ROUTES
                                border: '1px solid black',
                                background: '#c9e7ff',
                                borderRadius: '10px',
                                height: '115px',
                                overflowY: 'auto',
                                margin: '4px',
                                padding: '0px 20px',
                            }}
                        >
                            {renderRoutes(routes)}
                        </div>
                    </div>
                );
            });
            return (
                <div
                    className="trip"
                    key={uuid()}
                    style={{
                        //! OUTERMOST STYLE FOR TRIPS
                        maxHeight: '400px',
                        boxShadow: '2px 3px 7px 0px rgba(0,0,0,0.75)',
                        borderRadius: '10px',
                        overflowY: 'auto',
                        margin: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        id="trip-name-add"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <h3>Trip {tripIndex + 1}</h3>
                        <h3>${trip.totalPrice}</h3>
                        <button
                            onClick={() => {
                                dispatch(addTrip(trip))
                            }}
                        >
                            add to My Trips
                        </button>
                        <button
                            onClick={() => {
                                trip.flights.forEach((flight: any) => {
                                    window.open(flight.deepLink);
                                });
                                return false;
                            }}
                        >
                            buy all flights !
                        </button>
                    </div>

                    {flightComponents}
                </div>
            );
        });
    };
    return (
        <div id="search-results" style={{ overflowY: 'auto' }}>
            {renderSearchResults()}
        </div>
    );
};
export default SearchResults;
