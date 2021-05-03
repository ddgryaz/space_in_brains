import React from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";


const BrainPage = () => {
    const brain = {id: 1, name: 'JavaScript', img:'https://habrastorage.org/r/w120/webt/59/cc/76/59cc7600c78a2239379574.jpeg'}
    const desc = {title: 'JavaScript', description: 'Язык программирования лалалаллалаалалал алалалал лаллалал алала лалалалала лла алл алал алала лалалалл'}
    return (
        <Row className="mt-2">
            <Col md={3} className="mt-3">
                <Navigation />
            </Col>
            <Col md={9} className="mt-3 d-flex">
                <div className="card" style={{display: "flex",
                    flexDirection: 'row',
                    width: '72vw',
                    height: '80vh',
                    backgroundColor: '#6d6f6f'}}>
                    <div className="img" style={{marginTop: '2%', marginLeft: '2%'}}>
                        <Image width={250} height={250} src={brain.img}/>
                    </div>
                    <div className="about" style={{display: "flex", flexDirection: "column", marginTop: '2%', marginLeft: '2%'}}>
                        <div className="title" style={{color: 'white'}}>
                            <h2>{brain.name}</h2>
                        </div>
                        <div className="description" style={{width: '40vw'}}>
                            {desc.description}
                        </div>
                        <Button variant={"success"} style={{width: '200px'}}>Добавить в профиль</Button>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default BrainPage;