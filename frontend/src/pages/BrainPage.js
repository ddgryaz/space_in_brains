import React, {useEffect, useState} from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";
import {useParams} from 'react-router-dom'
import {getOneBrain} from "../http/brainAPI";


const BrainPage = () => {
    const [brain, setBrain] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        getOneBrain(id).then(data => setBrain(data))
    }, [])
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
                        <Image width={250} height={250} src={process.env.REACT_APP_API_URL + brain.img}/>
                    </div>
                    <div className="about" style={{display: "flex", flexDirection: "column", marginTop: '2%', marginLeft: '2%'}}>
                        <div className="title" style={{color: 'white'}}>
                            <h2>{brain.name}</h2>
                        </div>
                        <div className="description" style={{width: '40vw'}}>
                            {brain.info.map((info, index) =>
                                <Row key={info.id}>
                                    {info.description}
                                </Row>
                            )}
                        </div>
                        <Button variant={"success"} style={{width: '200px'}}>Добавить в профиль</Button>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default BrainPage;