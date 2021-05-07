import React, {useContext, useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";
import CommentList from "../components/CommentList";
import {Context} from "../index";
import {getAllComment} from "../http/commentAPI";

const Portal = () => {
    const {comment} = useContext(Context)

    useEffect(() => {
        getAllComment().then(data => comment.setComment(data))
    }, [])
    return (
        <Row className="mt-2">
            <Col md={3} className="mt-3">
                <Navigation />
            </Col>
            <Col md={9}>
                <div style={{overflowY: 'auto', overflowX: 'hidden', height: '85vh'}}><CommentList/></div>
            </Col>
        </Row>
    );
};

export default Portal;