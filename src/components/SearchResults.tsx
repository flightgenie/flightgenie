import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm, addTrip } from '../actions/appActions';

import { Nav, Wrapper } from '../utils';

const SearchResults: React.FC = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const { tripsDisplay } =  useSelector((state: any) => ({
      tripsDisplay: state.app.tripChoices
  }))

  const renderRoutes = (routes: any) => {
    return routes.map((route: any) => {
        const { airline, arrivalTime, flightNumber, fromAirport, toAirport, departureTime} = route;
        return (
            <div style={{ borderBottom: '1px solid blue'}}>
                <p style={{ fontSize: '12px', color: 'blue'}}>Airline: {airline}</p>
                <p style={{ fontSize: '12px', color: 'blue'}}>Arrival: {arrivalTime}</p>
                <p style={{ fontSize: '12px', color: 'blue'}}>Departure: {departureTime}</p>
                <p style={{ fontSize: '12px', color: 'blue'}}>Flight No.: {flightNumber}</p>
                <p style={{ fontSize: '12px', color: 'blue'}}>From: {fromAirport}</p>
                <p style={{ fontSize: '12px', color: 'blue'}}>To: {toAirport}</p>
            </div>
        )
    })
  }

  const renderSearchResults = () => {
      //data = [app.tripChoices.flights[0]]
      return tripsDisplay.map((trip: any, tripIndex: number) => {
          const { flights } = trip;
          console.log('flights data structre', flights)
          return flights.map((flight: any, flightIndex: number) => {
              const { fromAirport, toAirport, price, route } = flight;
              return (
                  <div style={{ borderBottom: '3px solid black'}}>
                      <h3>Flight {tripIndex + 1}</h3>
                      <p>From: {fromAirport} | To: {toAirport}</p>
                      <p>Price: {price}</p>
                      {renderRoutes(route)}
                  </div>
              )
          })
        // const routes = el.flights.reduce((allRoutes: any, flight: any) => {
        //     allRoutes.push(flight.route);
        //     return allRoutes;
        // }, []);
        // return routes.map((route: any) => {
        //     const { airline, arrivalTime, departureTime, fromAirport, toAirport } = route;
        //     console.log(route);
        //     return (
        //         <div>
        //             <p>Airline: {airline}</p>
        //             <p>Arrival Time: {arrivalTime}</p>
        //             <p>Departure Time: {departureTime}</p>
        //             <p>From: {fromAirport}</p>
        //             <p>To: {toAirport}</p>
        //         </div>
        //     )
        // })
      });
  }
  return (
    <div>
        {renderSearchResults()}     
    </div>
  );
};
export default SearchResults;