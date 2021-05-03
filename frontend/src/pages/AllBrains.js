import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";
import BrainsList from "../components/BrainsList";


const AllBrains = () => {
    return (
            <Row className="mt-2">
                <Col md={3} className="mt-3">
                    <Navigation />
                </Col>
                <Col md={9}>
                    <BrainsList/>
                </Col>
            </Row>
    );
};

export default AllBrains;