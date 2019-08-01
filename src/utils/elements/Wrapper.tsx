import React from 'react';
import styled from 'styled-components';
import { navOffset, brandPrimary } from '../';

const Wrapper: React.FC = (props: any): JSX.Element => {
    return <Container offset={navOffset}>{props.children}</Container>;
};

export default Wrapper;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    height: 100%;
`;
