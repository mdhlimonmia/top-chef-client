import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and conditions</h2>
            <p>You can't  west food. You can't say bad any thing about chefs and food.</p>
            <p>Go back to <Link to="/register">Register</Link> </p>
        </Container>
    );
};

export default Terms;