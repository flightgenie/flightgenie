import React from 'react';
import TripVisualization from './TripVisualization';
import PastTrips from './PastTrips';
import { useSelector } from 'react-redux';
import { trip } from '../Interfaces';
import { StoreInterface } from '../reducers/index';

const Trips: React.FC = (props: any): JSX.Element => {
  const appPastTrips = useSelector<StoreInterface, trip[]>(
    state => state.app.pastTrips
  );
  const appFocusedTrip = useSelector<StoreInterface, number>(
    state => state.app.focusedTrip
  );

  return (
    <div id="Trips">
      <TripVisualization />
      <PastTrips />
    </div>
  );
};
export default Trips;
