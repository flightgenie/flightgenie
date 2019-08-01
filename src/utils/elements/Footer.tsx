import React from 'react';
import styled from 'styled-components';
import { brandPrimary, white } from '../';

const Footer: React.FC = (props: any): JSX.Element => {
  return (
    <FooterContainer>
      <span className="footer-mark">Keep on flyin' ✈️️</span>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: ${brandPrimary};
  bottom: 0;
  color: ${white};
  display: flex;
  justify-content: center;
  padding: 1em;
  position: absolute;
  width: 100%;
`;
