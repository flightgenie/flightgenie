import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { StoreInterface } from '../reducers/index';
import { jacobColors } from '../utils/colors';
import L from 'leaflet';
import 'leaflet-swoopy';
import FlightDisplay from './FlightDisplay';
import uuid from 'uuid';
import centroid from '../utils/centroid';

const TripVisualization: React.FC = (props: any): JSX.Element => {
    // const [latLongs, setLatLongs] = useState([1, 2]);
    const focusedTripIndex = useSelector((state: StoreInterface) => state.app.focusedTripIndex);
    const pastTrips = useSelector((state: StoreInterface) => state.app.pastTrips);
    const focusedTrip = pastTrips[focusedTripIndex];
    const [destinationArray, setDestinationArray] = useState([]);
    const [flightColors, setFlightColors] = useState([]);
    const [mapCenter, setMapCenter] = useState([52.52, 13.4]);

    const mapRef = useRef(null);
    useEffect(() => {
        mapRef.current = L.map('map', {
            center: mapCenter,
            zoom: 2,
            layers: [
                L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
                    attribution: `attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>`,
                    detectRetina: true,
                }),
            ],
        });
    }, []);
    // create map

    const layerRef = useRef(null);
    useEffect(() => {
        layerRef.current = L.layerGroup().addTo(mapRef.current);
    }, []);

    useEffect(() => {
        layerRef.current.clearLayers();
        const allLatLngs: [number, number][] = [];
        const newDestinationArr: [string, string][][] = [];
        const newFlightColors: string[] = [];
        focusedTrip.flights.forEach(flight => {
            let destinationsForFlight: [string, string][] = [];
            let randomColor = jacobColors[Math.floor(Math.random() * jacobColors.length)];
            while (newFlightColors.indexOf(randomColor) > -1) {
                randomColor = jacobColors[Math.floor(Math.random() * jacobColors.length)];
            }
            const currentColor = randomColor;
            flight.routes.forEach((route, i) => {
                destinationsForFlight.push([route.fromAirport, route.toAirport]);
                allLatLngs.push(route.latLngFrom);
                if (i === flight.routes.length - 1) {
                    allLatLngs.push(route.latLngTo);
                }
                L.swoopyArrow(route.latLngFrom, route.latLngTo, {
                    label: '',
                    color: currentColor,
                    labelColor: currentColor,
                    html:
                        `<span style="color: white; background-color: black;` +
                        `border-radius: 10px; padding: 10px; font-size: 12px; margin-bottom: 20px">${
                            route.fromAirport
                        }</span>`,
                    weight: 4,
                    labelFontSize: 10,
                    iconAnchor: [40, 20],
                    iconSize: [60, 20],
                    hideArrowHead: true,
                }).addTo(layerRef.current);
            });
            newFlightColors.push(currentColor);
            newDestinationArr.push(destinationsForFlight);
        });
        setMapCenter(centroid(allLatLngs));
        setFlightColors(newFlightColors);
        setDestinationArray(newDestinationArr);
    }, [focusedTripIndex]);

    const flightDisplayComponents = destinationArray.map((flightDestinations, i) => (
        <FlightDisplay flightDestinations={flightDestinations} color={flightColors[i]} key={uuid()} />
    ));

    return (
        <div id="TripVisualization">
            <div
                id="flight-displays"
                style={{
                    display: 'flex',
                    padding: '5px',
                    height: '15%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {flightDisplayComponents}
            </div>
            <div
                id="map"
                style={{
                    height: '70%',
                    margin: '0px 40px 20px 40px',
                    border: '2px solid black',
                    borderRadius: '10px',
                }}
            />
        </div>
    );
};
export default TripVisualization;
