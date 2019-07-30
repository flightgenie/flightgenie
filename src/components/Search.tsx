import React from 'react';
import { useDispatch } from 'react-redux';
import { submitForm, addTrip } from '../actions/appActions';
import { Nav } from '../utils';

const Search: React.FC = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  return (<div id="Search">
    <Nav />
  </div>);
};
export default Search;
