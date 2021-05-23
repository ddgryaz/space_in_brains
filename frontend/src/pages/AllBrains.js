import React, {useContext, useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";
import BrainsList from "../components/BrainsList";
import {Context} from "../index";
import {getBrains} from "../http/brainAPI";
import Pages from "../components/Pages";
import {observer} from "mobx-react-lite";


const AllBrains = observer(() => {
    const {brain} = useContext(Context)

    useEffect(() => {
        getBrains(1, 12).then(data => {
            brain.setBrains(data.rows)
            brain.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        getBrains(brain.page, 12).then(data => {
            brain.setBrains(data.rows)
            brain.setTotalCount(data.count)
        })
    }, [brain.page])

    return (
        <Row className="mt-2">
            <Col md={3} className="mt-3">
                <Navigation/>

            </Col>
            <Col md={9}>
                <BrainsList/>
                <Pages/>
            </Col>
        </Row>
    );
});

export default AllBrains;