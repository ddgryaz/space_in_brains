import React from 'react';
import {Col, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";

const Profile = () => {
    return (
        <Row className="mt-2">
            <Col md={3} className="mt-3">
                <Navigation />
            </Col>
            <Col md={9}>
                <div style={{color: 'white'}}>PROFILE</div>
            </Col>
        </Row>
    );
};

export default Profile;