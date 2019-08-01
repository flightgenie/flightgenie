import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitForm } from '../actions/appActions';
import { form } from '../interfaces';
import { Wrapper, Sidebar, Nav } from '../utils';
import TripVisualization from './TripVisualization';
import { centroid } from '../utils/centroid';

const Trips: React.FC = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const someState = useSelector(state => state.app.username);
  return (
    <Fragment>
      <Nav />
      <Wrapper>
        <Sidebar />
        <TripVisualization />
      </Wrapper>
    </Fragment>
  );
};
export default Trips;
