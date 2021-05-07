import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";
import BrainsList from "../components/BrainsList";
import {Context} from "../index";
import {getBrains} from "../http/brainAPI";


const AllBrains = () => {
    const {brain} = useContext(Context)

    useEffect(() => {
        getBrains().then(data => brain.setBrains(data))
    }, [])
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