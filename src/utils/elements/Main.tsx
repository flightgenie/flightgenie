import React from 'react';
import styled from 'styled-components';
import { navOffset } from '../';

const Main: React.FC = (props: any): JSX.Element => {
  return <Container offset={navOffset}>{props.children}</Container>;
};

export default Main;

const Container = styled.main``;
