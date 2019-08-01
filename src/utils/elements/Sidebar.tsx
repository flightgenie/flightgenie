import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { focusTrip } from '../../actions/appActions';
import styled from 'styled-components';
import { brandPrimary, brandSecondary } from '../';
import { StoreInterface } from '../../reducers/index';
import { trip } from '../../Interfaces';
import uuid from 'uuid';

const Sidebar: React.FC = (props: any): JSX.Element => {
    const pastTrips = useSelector((store: StoreInterface) => store.app.pastTrips);
    const dispatch = useDispatch();
    console.log(pastTrips);
    const tripItems = pastTrips.map((trip: trip, i: number) => {
        const destinationList = trip.destinations.reduce((acc, cur) => acc + ' ▶︎ ' + cur.location, trip.origin);
        return (
            <li
                className="trip-item"
                key={uuid()}
                index={i}
                onClick={() => dispatch(focusTrip(i))}
                style={{
                    borderRadius: '10px',
                    padding: '4px',
                }}
            >
                {destinationList}
            </li>
        );
    });
    return (
        <SidebarContainer>
            <ul className="trip-items">{tripItems}</ul>
        </SidebarContainer>
    );
};

export default Sidebar;

const SidebarContainer = styled.div`
    background: ${brandSecondary};
    height: 100%;
    padding: 2rem;

    .trip-items {
        list-style: none;
    }

    .trip-item {
        cursor: pointer;
        font-weight: 700;
        margin-bottom: 1rem;
        background: white;
        color: #333;
        border: 2px solid black;
        &:hover {
            color: white;
            background: #333;
            border: 2px solid white;
        }
    }
`;
