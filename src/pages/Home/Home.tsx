import React from 'react';
import { Title, Container } from '../../styled/Home/common';
import Counter from '../../components/Home/Counter/Counter';

const Home: React.FC = () => {
    return (
        <Container>
            <Title data-testid="title">Home</Title>
            <Counter />
        </Container>
    )
}

export default Home;