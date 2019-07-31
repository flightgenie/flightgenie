import React from 'react';
import { Nav } from '../utils';
import { Link } from 'react-router-dom';


const Login: React.FC = (props: any): JSX.Element => {
  return (
    <div id="Login">
    <input type = 'text'></input>
    <input type = 'password'></input>
    <Link to = '/'><button>Sign In</button></Link>
  </div>
  );
};

export default Login;
