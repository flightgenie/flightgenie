import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { submitForm, addTrip } from '../actions/appActions';
import Form from './Form';
import { Nav, Wrapper } from '../utils';

const Search: React.FC = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Nav />
      <Wrapper>
        <Form />
      </Wrapper>
    </Fragment>
  );
};
export default Search;
