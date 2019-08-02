import React,{useState, Fragment } from 'react';
import { Nav } from '../utils';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { addUserId } from '../actions/appActions';
import Search from './Search';




const Login: React.FC = (props: any): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onUserChange = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value);
  }

  const onPasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  }
  const handleRedirect = () => {
    console.log('redirect handler')
    return (
      <Route exact path = '/' />
    )
  }
  const dispatch = useDispatch();
  const handleSignIn = (e) => {
  
    e.preventDefault();
    axios.post('http://localhost:3000/login', {username, password}).then(({data}) => {
      setIsLoggedIn(true)
      dispatch(addUserId(data));
      console.log('isloggedIn', isLoggedIn)
      handleRedirect();
    })
  }
  return (
   
    <div id="Login">
    <input onChange = { onUserChange } type = 'text'></input>
    <input onChange = { onPasswordChange } type = 'password'></input>
    <Link to = '/'><button onClick = { handleSignIn }>Sign In</button></Link>
    <Link to = '/signup'><button>Sign Up</button></Link>
  </div>

  );
};

export default Login;
