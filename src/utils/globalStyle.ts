import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  button{
    background: white;
    color: rebeccapurple;
    font-size: 14px;
    border-radius: 10px;
    border: 1px solid black;
    padding: 4px 8px;
    margin: 4px;
  }
  button:hover {
    outline: none;
    color: white;
    background: rebeccapurple;
    cursor: pointer;
  }

  button:focus {
      outline: none;
      color: white;
      background: rebeccapurple;
      color: white;
  }
`;
