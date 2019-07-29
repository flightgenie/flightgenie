import React from 'react';

import { useDispatch } from 'react-redux';

import { submitForm, addTrip } from '../actions/appActions';

const Search: React.FC = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  return <div id="Search"></div>;
};
export default Search;
