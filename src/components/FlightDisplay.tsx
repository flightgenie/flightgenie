import React from 'react';
import uuid from 'uuid';

export interface FlightDisplayProps {
    flightDestinations: [string, string][];
    color: string;
}

const FlightDisplay: React.FC<FlightDisplayProps> = (props: FlightDisplayProps): JSX.Element => {
    const flightDivs = props.flightDestinations.map(destPair => (
        <div
            className="destinationPair"
            style={{
                background: '#333',
                margin: '10px',
                borderRadius: '10px',
                padding: '10px',
            }}
            key={uuid()}
        >{`${destPair[0]} ▶︎ ${destPair[1]}`}</div>
    ));

    return (
        <div className="flight-display" style={{ color: props.color, display: 'flex' }}>
            {flightDivs}
        </div>
    );
};

export default FlightDisplay;
