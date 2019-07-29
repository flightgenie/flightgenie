import React from 'react';
import Login from './Login';
import Search from './Search';
import Trips from './Trips';

const App: React.FC = (props: any): JSX.Element => {
  return (
    <div id="App">
      <Login />
      <Search />
      <Trips />
    </div>
  );
};
export default App;
