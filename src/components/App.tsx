import React, { useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import Login from './Login';
import Search from './Search';
import Trips from './Trips';
import { Main, Nav, Footer } from '../utils';
import SignUp from './signup';
import { useDispatch } from 'react-redux';
import { getTrips } from '../actions/appActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App: React.FC = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('pre axios')
    axios.get('http://localhost:3000/trips/userId').then(({data})=> {
      console.log('data in axios', data)
      dispatch(getTrips(data));
    })
  })
  return (
    <Router>
      <div id="App" style={{ height: '100vh' }}>
        <Main>
          <Route exact path="/trips" component={Trips} />
          <Route exact path="/" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Footer />
        </Main>
      </div>
    </Router>
  );
};
export default App;
