import React,{useState, Fragment } from 'react';
import { Nav } from '../utils';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { addUserId } from '../actions/appActions';
import Search from './Search';




const Login: React.FC = (props: any): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirect, setRedirect] = useState(false)

  const onUserChange = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value);
  }

  const onPasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  }
  const handleRedirect = () => {
    console.log('set redirect')
    setRedirect(true)
    console.log('redirect', redirect)
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
    <button onClick = { handleSignIn }>Sign In</button>
    <Link to = '/signup'><button>Sign Up</button></Link>
    {redirect && <Redirect to = '/' /> }
  </div>

  );
};

export default Login;
