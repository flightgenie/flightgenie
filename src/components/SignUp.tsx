import React, { useState } from 'react';
import Login from './Login';
import { Main, Nav, Footer } from '../utils';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

const signUp: React.FC = (props: any): JSX.Element => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onUserChange = (e: any) => {
        console.log(e.target.value);
        setUsername(e.target.value);
    };

    const onPasswordChange = (e: any) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post('http://localhost:3000/signup', { username, password }).then(response => console.log(response.data));
    };

    return (
        <div id="signup">
            <Main>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input onChange={onUserChange} type="text" />
                    <label>Password</label>
                    <input onChange={onPasswordChange} type="password" />
                    <button>Sign Up</button>
                </form>
                <Link to="/login">
                    <button>Back to Login Page</button>
                </Link>
            </Main>
        </div>
    );
};
export default signUp;
