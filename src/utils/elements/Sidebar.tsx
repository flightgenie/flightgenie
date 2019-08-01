import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { brandPrimary, brandSecondary } from '../';
import { StoreInterface } from '../../reducers/index';
import { trip } from '../../Interfaces';

const Sidebar: React.FC = (props: any): JSX.Element => {
  const pastTrips = useSelector((store: StoreInterface) => store.app.pastTrips);
  const tripItems = pastTrips.map((trip: trip) => {
    <li
      className="trip-item"
      style={{
        color: 'white',
        background: '#262626',
        borderRadius: '10px',
        padding: '4px'
      }}>
      dfsfds
    </li>;
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
    &:hover {
      color: ${brandPrimary};
    }
  }
`;
