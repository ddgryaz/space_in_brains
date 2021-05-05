import React from 'react';
import {Col, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";
import BrainsList from "../components/BrainsList";

const Portal = () => {
    return (
        <Row className="mt-2">
            <Col md={3} className="mt-3">
                <Navigation />
            </Col>
            <Col md={9}>
                <div style={{color: 'white'}}>PORTAL</div>
            </Col>
        </Row>
    );
};

export default Portal;