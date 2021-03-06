import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { submitForm, addTrip } from '../actions/appActions';
import Form from './Form';
import SearchResults from './SearchResults';
import { Nav } from '../utils';

const Search: React.FC = (props: any): JSX.Element => {
    const dispatch = useDispatch();
    return (
        <Fragment>
            <Nav />
            <Container>
                <Form />
                <SearchResults />
            </Container>
        </Fragment>
    );
};
export default Search;

const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 5fr;
    justify-content: center;
    grid-gap: 2rem;
    padding: 1.7rem;
`;
