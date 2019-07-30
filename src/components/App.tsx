import React from 'react';

import Form from './Form';
import Login from './Login';
import Search from './Search';
import Trips from './Trips';
import { Main, Nav, Footer } from '../utils';

const App: React.FC = (props: any): JSX.Element => {
  return (
    <div id="App">
      <Nav />
      <Main>
        <Trips />
        <Footer />
      </Main>
    </div>
  );
};
export default App;
