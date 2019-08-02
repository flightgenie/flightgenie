import React from 'react';
import styled from 'styled-components';
import { brandPrimary, brandSecondary, white } from '../';
import { Link } from 'react-router-dom';

const Nav: React.FC = (props: any): JSX.Element => {
    return (
        <NavContainer>
            <ul className="main-nav">
                <Link to="/">
                    <li>🔎 Search</li>
                </Link>
                <Link to="/trips">
                    <li>🗺 Trips</li>
                </Link>
            </ul>
            <ul>
                <h1>🧞 Flight ✈ Genie</h1>
            </ul>
            <ul className="auth">
                <Link to="login">
                    <li>Sign Out</li>
                </Link>
            </ul>
        </NavContainer>
    );
};

export default Nav;

const NavContainer = styled.nav`
  background: ${brandPrimary};
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  width: 100%;

  h1{ 
    color: white;
  }

  li {
    color: ${white};
    cursor: pointer;
    font-weight: 700;
    list-style: none;
    text-decoration: none;
    padding: 0.5em 1em 0em 1em;
    transition: color 100ms ease-in-out;
    &:hover {
      color: ${brandSecondary};
      transition: color 100ms ease-in-out;
    }
    a {
        &:hover {
            color: ${brandSecondary};
        }
    }

    .main-nav {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
    }
`;
