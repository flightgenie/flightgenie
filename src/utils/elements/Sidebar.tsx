import React from 'react';
import styled from 'styled-components';
import { brandPrimary, brandSecondary } from '../';

const Sidebar: React.FC = (props: any): JSX.Element => {
  return (
    <SidebarContainer>
      <ul className="trip-items">
        <li className="trip-item">Trip 1</li>
        <li className="trip-item">Trip 2</li>
      </ul>
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
