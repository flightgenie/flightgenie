import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitForm } from '../actions/appActions';
import { form } from '../interfaces';
import { Wrapper, Sidebar, Nav } from '../utils';

const Trips: React.FC = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const someState = useSelector(state => state.app.username);
  return (
    <Fragment>
      <Nav />
      <Wrapper>
        <Sidebar />
      </Wrapper>
    </Fragment>
  );
};
export default Trips;
