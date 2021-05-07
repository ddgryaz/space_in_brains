import React from 'react';
import {Col, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";
import CommentItem from "../components/CommentItem";
import CommentList from "../components/CommentList";

const Portal = () => {
    return (
        <Row className="mt-2">
            <Col md={3} className="mt-3">
                <Navigation />
            </Col>
            <Col md={9}>
                <CommentList/>
            </Col>
        </Row>
    );
};

export default Portal;