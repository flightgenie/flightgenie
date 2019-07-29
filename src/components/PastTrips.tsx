import React from 'react';
import Trip from './Trip';

const PastTrips: React.FC = (props: any): JSX.Element => {
  return (
    <div id="PastTrips">
      <Trip />
      <Trip />
      <Trip />
      <Trip />
      <Trip />
    </div>
  );
};
export default PastTrips;
