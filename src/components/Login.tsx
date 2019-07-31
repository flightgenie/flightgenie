import React,{useState} from 'react';
import { Nav } from '../utils';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Login: React.FC = (props: any): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUserChange = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value);
  }

  const onPasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  }
  return (
   
    <div id="Login">
    <input onChange = { onUserChange } type = 'text'></input>
    <input onChange = { onPasswordChange } type = 'password'></input>
    <Link to = '/'><button>Sign In</button></Link>
    <Link to = '/signup'><button>Sign Up</button></Link>
  </div>

  );
};

export default Login;
