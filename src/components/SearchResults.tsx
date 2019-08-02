import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { submitForm, addTrip } from '../actions/appActions';
import uuid from 'uuid';
import { format, differenceInMinutes, differenceInHours } from 'date-fns';

import { brandPrimary, brandSecondary, white, grey, lightGrey, mediumShadow, largeShadow, useToggle } from '../utils';

const SearchResults: React.FC = (props: any): JSX.Element => {
    const { isShowing, toggle } = useToggle();
    const dispatch = useDispatch();
    const { tripsDisplay } = useSelector((state: any) => ({
        tripsDisplay: state.app.tripChoices,
    }));

    const renderDates = (departureTime, arrivalTime) => {
        const departure = format(new Date(departureTime * 1000), 'MMM DD');
        const arrival = format(new Date(arrivalTime * 1000), 'MMM DD');
        const isSameDate = arrival === departure;
        return (
            <div>
                <span className="date">{departure}</span>
                {!isSameDate && <span className="date">{arrival}</span>}
            </div>
        );
    };

    const renderDuration = (departureTime, arrivalTime) => {
        const minutesDifference = differenceInMinutes(new Date(arrivalTime * 1000), new Date(departureTime * 1000));
        const hoursDifference = differenceInHours(new Date(arrivalTime * 1000), new Date(departureTime * 1000));
        const hours = hoursDifference.toString();
        let minutes = (minutesDifference - hoursDifference * 60).toString();
        if (minutes.length < 2) {
            const minutesString = String(minutes);
            minutes = `0${minutesString}`;
        }

        return `${hours}h ${minutes}m`;
    };

    const renderRoutes = (routes: any) => {
        return routes.map((route: any, i: number) => {
            const { airline, arrivalTime, flightNumber, fromAirport, toAirport, departureTime } = route;
            return (
                <RouteContainer key={uuid()}>
                    <h4 className="leg-number">Leg {i + 1}</h4>
                    <div className="route-group">
                        <div className="route-info">
                            <div className="route-date">
                                <div className="route-times">{renderDates(departureTime, arrivalTime)}</div>
                            </div>
                            <div className="route-info-group">
                                <div className="route-airports">
                                    <span className="route-airport">{fromAirport}</span>
                                    <span className="route-airport">{toAirport}</span>
                                </div>
                                <div className="airline">
                                    <span className="airline">{airline}</span>{' '}
                                    <span className="flight-number">{flightNumber}</span>
                                </div>
                            </div>
                        </div>
                        <span className="duration">{renderDuration(departureTime, arrivalTime)}</span>

                        <div className="route-times">
                            <span className="time">
                                {format(new Date(departureTime * 1000), 'h:mm a')} -{' '}
                                {format(new Date(arrivalTime * 1000), 'h:mm a')}
                            </span>
                        </div>
                    </div>
                </RouteContainer>
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
                    <FlightContainer key={uuid()}>
                        <div className="flights">
                            <div className="flight-airports">
                                <span className="flight-airport">{fromAirport}</span>
                                <span className="flight-airport">{toAirport}</span>
                            </div>
                            <div className="pricing">
                                <span className="price">${price}</span>
                                <a className="buy-button" href={`${deepLink}`} target={'_blank'}>
                                    Buy
                                </a>
                            </div>
                        </div>
                        <div className="routes">
                            {isShowing ? (
                                <button className="toggle-route" onClick={toggle}>
                                    Less &#8599;
                                </button>
                            ) : (
                                <button className="toggle-route" onClick={toggle}>
                                    More &#8600;
                                </button>
                            )}
                            <Routes isShowing={isShowing}>{renderRoutes(routes)}</Routes>
                        </div>
                    </FlightContainer>
                );
            });
            return (
                <TripContainer key={uuid()}>
                    <div className="title-container">
                        <h3 className="trip-title">Trip {tripIndex + 1}</h3>
                    </div>
                    {flightComponents}
                    <div className="trip-controls">
                        <button
                            className="add-trip-button"
                            onClick={() => {
                                dispatch(addTrip(trip));
                            }}
                        >
                            Save Trip
                        </button>
                        <div className="trip-total">
                            <span className="price">${trip.totalPrice}</span>

                            {/* <button
                                className="buy-all-button"
                                onClick={() => {
                                    trip.flights.forEach((flight: any) => {
                                        window.open(flight.deepLink);
                                    });
                                    return false;
                                }}
                            >
                                Buy All
                            </button> */}
                        </div>
                    </div>
                </TripContainer>
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

const TripContainer = styled.div`
    background: ${grey};
    box-shadow: ${largeShadow};
    margin: 0 1rem;
    margin-bottom: 2rem;
    border-radius: 5px;

    .title-container {
        background: ${brandSecondary};
        border-radius: 5px 5px 0 0;
    }

    .trip-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
        padding: 1rem 2rem;
    }

    .trip-title {
        margin: 0;
        font-size: 1.5rem;
        color: ${white};
        padding: 1rem 2rem;
    }

    .trip-total {
        display: flex;
        flex-direction: column;
    }

    .price {
        text-align: right;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .buy-all-button {
        background: ${brandPrimary};
        padding: 0.5rem 1rem;
        border-radius: 3px;
        color: ${white};
        font-weight: 700;
        font-size: 1.2rem;
        margin: 0;
    }

    .add-trip-button {
        background: ${brandSecondary};
        padding: 0.5rem 1rem;
        border-radius: 3px;
        color: ${white};
        font-weight: 700;
        font-size: 1.2rem;
        border: none;
        margin: 0;
        transition: all 100ms ease-in-out;
        transition-property: background, color;
        &:hover {
            background: ${brandPrimary};
            color: ${brandSecondary};
        }
    }
`;

const FlightContainer = styled.div`
    border-bottom: 1px solid ${lightGrey};
    padding: 2rem;

    .flights {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .flight-airports {
        display: flex;
        flex-direction: column;
    }

    .flight-airport {
        margin: 0.25rem;
        font-weight: 700;
        font-size: 1.2rem;
    }

    .pricing {
        display: flex;
        flex-direction: column;
    }

    .price {
        display: inline-block;
        text-align: right;
        font-size: 1.2rem;
    }

    .buy-button {
        background: ${brandPrimary};
        padding: 0.25rem 1rem;
        border-radius: 3px;
        color: ${white};
        font-weight: 700;
        transition: all 100ms ease-in-out;
        transition-property: background, color;
        &:hover {
            background: ${brandSecondary};
            color: ${white};
        }
    }

    .toggle-route {
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        transition: color 100ms ease-in-out;
        &:hover {
            color: ${brandPrimary};
        }
    }
`;

const Routes = styled.div`
    ${props => (props.isShowing ? 'display: block' : 'display: none')}
`;

const RouteContainer = styled.div`
    margin: 1rem 2rem;
    .leg-number {
        margin: 0 0 1rem;
        font-size: 1.2rem;
        color: ${brandSecondary};
    }

    .route-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .route-info-group {
        margin-left: 1rem;
    }

    .route-info {
        display: flex;
        align-items: center;
    }

    .route-airports {
        display: flex;
        flex-direction: column;
    }

    .route-airport {
        font-weight: 700;
        margin: 0.1rem;
    }

    .route-times {
        .time {
            font-weight: 700;
        }
    }

    .airline {
    }

    .airline,
    .flight-number {
        color: ${grey};
        font-size: 0.9rem;
    }

    .route-date {
        .date {
            display: block;
            margin: 0.2rem;
        }
    }
`;
