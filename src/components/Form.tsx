import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { submitForm } from '../actions/appActions';
import { form, destination } from '../interfaces';
import { brandPrimary, brandSecondary, white, lightGrey, mediumShadow, largeShadow } from '../utils';

const Form: React.FC = (props: any): JSX.Element => {
    useEffect(() => {
        const resultsString =
            '{"numAdults":1,"destinationNumDays-1":2,"departureDate":"2019-07-31T23:41:55.535Z","endDate":"2019-08-07T23:41:55.535Z","flightClass":"economy","directFlights":false,"origin":"LAX","destination-1":"JFK","destinationNumDays-2":2,"destination-2":"SFO","destinationNumDays-3":3,"destination-3":"AMS","tripType":"round-trip"}';
        const parsedResult = JSON.parse(resultsString);
        parsedResult.departureDate = moment();
        // dispatch(submitForm(parsedResult));
    }, []);

    // React state hooks
    const [focused, setFocusedInput] = useState(null);
    const [numDestinations, setNumDestinations] = useState(1);
    const [formData, setFormData] = useState({
        numAdults: 1,
        'destinationNumDays-1': 0,
        departureDate: moment(),
        endDate: moment().add(7, 'days'),
        flightClass: 'economy',
        directFlights: false,
    });

    const [startDate, setStartDate] = useState(null);

    // Calculations for amount of days to spend in each location
    const tripStart = formData.departureDate;
    const tripEnd = formData.endDate;
    const difference = tripEnd.diff(tripStart, 'days');
    const [daysToUse, setDaysToUse] = useState(difference);

    // Redux hooks
    const dispatch = useDispatch();
    const username = useSelector(state => state.app.username);

    const updateFormData = (e: any, property: any) => {
        const inputValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData(prev => ({ ...prev, [property]: inputValue }));
    };

    const updateDates = (date: any) => {
        // TODO: Fix async issues with calendar
        const endDate = date.endDate === null ? date.startDate : date.endDate;
        const tripStart = date.startDate;
        const tripEnd = endDate;
        const difference = tripEnd.diff(tripStart, 'days');
        setFormData(prev => ({ ...prev, departureDate: date.startDate, endDate }));
        setDaysToUse(difference);
    };

    const addDestinationClick = (e: any) => {
        e.preventDefault();
        const destinationNumDaysKey = `destinationNumDays-${numDestinations + 1}`;
        setNumDestinations(numDestinations + 1);
        setFormData(prev => ({ ...prev, [destinationNumDaysKey]: 0 }));
    };

    const renderDestinationBoxes = () => {
        return Array.from({ length: numDestinations }, (_, i) => {
            return (
                <DestinationGroup key={`destination-group-${i}`}>
                    <div className="destination-input">
                        <input
                            onChange={e => updateFormData(e, `destination-${i + 1}`)}
                            className="text-input"
                            type="text"
                            name="name"
                            placeholder="To?"
                        />
                    </div>
                    <div className="days-group">
                        <div className="days-control">
                            <button className="days-control-button" onClick={e => addDestinationDay(e, i + 1)}>
                                +
                            </button>
                            <span className="day-control-days">{formData[`destinationNumDays-${i + 1}`]}</span>
                            <button className="days-control-button" onClick={e => subtractDestinationDay(e, i + 1)}>
                                -
                            </button>
                        </div>
                        <span className="days-here">days here</span>
                    </div>
                </DestinationGroup>
            );
        });
    };

    const addDestinationDay = (e, index) => {
        e.preventDefault();
        if (daysToUse > 0) {
            const destinationNumDaysKey = `destinationNumDays-${index}`;
            setFormData(prev => ({ ...prev, [destinationNumDaysKey]: prev[destinationNumDaysKey] + 1 }));
            setDaysToUse(daysToUse - 1);
        } else {
            alert('Not enough days!');
        }
    };

    const subtractDestinationDay = (e, index) => {
        // TODO: Fix day subtraction bugs (when changing date range)
        e.preventDefault();
        const tripStart = formData.departureDate;
        const tripEnd = formData.endDate;
        const difference = tripEnd.diff(tripStart, 'days');
        const destinationNumDaysKey = `destinationNumDays-${index}`;
        if (daysToUse < difference && formData[destinationNumDaysKey] + 1 > 1) {
            setFormData(prev => ({ ...prev, [destinationNumDaysKey]: prev[destinationNumDaysKey] - 1 }));
            setDaysToUse(daysToUse + 1);
        }
    };

    const addPassenger = (e: any) => {
        e.preventDefault();
        setFormData(prev => ({ ...prev, numAdults: prev.numAdults + 1 }));
    };

    const subtractPassenger = (e: any) => {
        e.preventDefault();
        if (formData.numAdults > 0) {
            setFormData(prev => ({ ...prev, numAdults: prev.numAdults - 1 }));
        }
    };

    const handleSubmitForm = (e: any) => {
        e.preventDefault();
        dispatch(submitForm(formData));
    };

    return (
        <FormContainer onSubmit={handleSubmitForm}>
            <DateRangePicker
                startDate={formData.departureDate}
                startDateId="start-date"
                endDate={formData.endDate}
                endDateId="end-date"
                onDatesChange={date => updateDates(date)}
                focusedInput={focused}
                onFocusChange={focus => setFocusedInput(focus)}
            />
            <input
                onChange={e => updateFormData(e, 'origin')}
                placeholder="From?"
                className="origin text-input"
                type="text"
                name="name"
            />
            <span className="days-left">
                <strong>{daysToUse}</strong> days left to use
            </span>
            {renderDestinationBoxes()}
            <button
                onClick={e => {
                    addDestinationClick(e);
                }}
                className="add-destination-button button"
            >
                + Add Destination
            </button>
            <div className="passengers">
                <span className="number-passengers">Adults</span>
                <div className="passengers-control">
                    <button className="passengers-control-button" onClick={addPassenger}>
                        +
                    </button>
                    <span className="passengers-control-adults">{formData.numAdults}</span>
                    <button className="passengers-control-button" onClick={subtractPassenger}>
                        -
                    </button>
                </div>
            </div>
            <label className="flight-class-label form-label">
                Airline Class
                <select onChange={e => updateFormData(e, 'flightClass')} defaultValue="economy">
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                    <option value="first-class"> First Class</option>
                </select>
            </label>
            <label className="round-trip-label form-label">
                Round Trip
                <input
                    type="radio"
                    onChange={e => updateFormData(e, 'tripType')}
                    value="round-trip"
                    className="round-trip"
                    checked={formData.tripType === 'round-trip' ? true : false}
                />
                One Way
                <input
                    type="radio"
                    onChange={e => updateFormData(e, 'tripType')}
                    value="one-way"
                    className="one-way"
                    checked={formData.tripType === 'one-way' ? true : false}
                />
            </label>
            <label className="direct-flights-label form-label">
                Direct Flights Only
                <input onChange={e => updateFormData(e, 'directFlights')} type="checkbox" />
            </label>
            <button className="button form-submit">Search Flights</button>
        </FormContainer>
    );
};

export default Form;

const FormContainer = styled.form`
    padding: 2rem;
    background: ${brandSecondary};
    border-radius: 5px;
    max-width: 800px;
    width: 100%;
    box-shadow: ${mediumShadow};
    max-height: 700px;

    .form-label {
        display: block;
    }

    .origin {
        margin-bottom: 1rem;
    }

    .text-input {
        padding: 1rem;
        outline: none;
        box-shadow: none;
        font-size: 1.2rem;
        border-radius: 5px;
        border: 1px solid ${lightGrey};
        width: 100%;
    }

    .days-left {
        display: block;
        text-align: center;

        strong {
            color: ${white};
            background: ${brandPrimary};
            padding: 0.1rem 0.3rem;
            border-radius: 2px;
        }
    }

    .button {
        background: ${white};
        border: 1px solid ${lightGrey};
        border-radius: 2px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 100ms ease-in-out;
        transition-property: background, color, height;
        &:hover {
            background: ${brandPrimary};
            color: ${white};
            border: 1px solid ${brandPrimary};
            transition: all 100ms ease-in-out;
            transition-property: background, color, height;
        }
    }

    .form-submit {
        margin: 0 auto;
        font-size: 1.5rem;
        display: block;
        font-weight: 700;
        padding: 1rem 1.2rem;
        transition: all 100ms ease-in-out;
        transition-property: background, color, height;
        background: ${brandPrimary};
        color: ${white};
        border: none;
        box-shadow: ${mediumShadow};
        &:hover {
            background: ${white};
            color: ${brandPrimary};
            transition: all 100ms ease-in-out;
            transition-property: shadow, background, color, height;
            border: none;
            box-shadow: ${largeShadow};
        }
    }

    .add-destination-button {
        font-size: 1rem;
        display: block;
        text-align: center;
        margin: 0 auto;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
    }

    .DateRangePicker {
        margin-bottom: 2rem;
    }

    .passengers {
        display: flex;
        align-items: center;
        margin: 2rem 0;
    }

    .passengers-control {
        display: flex;
        align-items: center;
        margin: 0 1rem;
    }

    .passengers-control-button {
        margin: 0 0.4rem;
        background: ${white};
        padding: 0.25rem 0.5rem;
        border: 1px solid ${lightGrey};
        border-radius: 2px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 100ms ease-in-out;
        transition-property: background, color, height;
        &:hover {
            background: ${brandPrimary};
            color: ${white};
            border: 1px solid ${brandPrimary};
            transition: all 100ms ease-in-out;
            transition-property: background, color, height;
        }
    }

    .passengers-control-adults {
        font-weight: 700;
    }

    .number-passengers {
        font-weight: 700;
    }

    .flight-class-label,
    .round-trip-label,
    .direct-flights-label {
        margin: 1rem 0;
    }
`;

const DestinationGroup = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin: 1rem 0;

    .days-control {
        display: flex;
        align-items: center;
        margin: 0 1rem;
    }

    .days-control-button {
        margin: 0 0.4rem;
        background: ${white};
        padding: 0.25rem 0.5rem;
        border: 1px solid ${lightGrey};
        border-radius: 2px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 100ms ease-in-out;
        transition-property: background, color, height;
        &:hover {
            background: ${brandPrimary};
            color: ${white};
            border: 1px solid ${brandPrimary};
            transition: all 100ms ease-in-out;
            transition-property: background, color, height;
        }
    }

    .days-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .day-control-days {
        font-size: 1.2rem;
        font-weight: 700;
    }

    .days-here {
        display: block;
        text-align: center;
        font-size: 0.7rem;
        text-transform: uppercase;
        font-weight: 700;
        margin-top: 0.2rem;
    }
`;
