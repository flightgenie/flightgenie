import React from 'react';
import styled from 'styled-components';
import { brandPrimary, brandSecondary, white } from '../';

const Nav: React.FC = (props: any): JSX.Element => {
  return (
    <NavContainer>
      <ul className="main-nav">
        <li>Search</li>
        <li>Trips</li>
      </ul>
      <ul className="auth">
        <li>Login</li>
      </ul>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  background: ${brandPrimary};
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  position: fixed;
  width: 100%;

  li {
    color: ${white}
    cursor: pointer;
    font-weight: 700;
    list-style: none;
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
