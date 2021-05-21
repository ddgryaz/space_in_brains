import React, {useEffect, useState} from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";
import {useParams} from 'react-router-dom'
import {getOneBrain} from "../http/brainAPI";
import jwt_decode from "jwt-decode";
import {createComment} from "../http/commentAPI";
import {createUserBrain} from "../http/userBrainAPI";



const BrainPage = () => {
    const [brain, setBrain] = useState([])
    const {id} = useParams()
    const userToken = localStorage.getItem('token')
    let userInfo;
    if (userToken) {
        userInfo = jwt_decode(userToken)
    }
    const addBrain = async () => {
        try {
            const textComment = brain.name
            const userId = userInfo.id
            await createComment(userId, textComment).then()
            await createUserBrain(userId, brain.id).then(r => alert('Брейн добавлен!'))
        } catch (e) {
            alert('Брейн уже есть в вашей коллекции! ')
        }
    }

    useEffect(() => {
        getOneBrain(id).then(data => setBrain(data))
    }, [])
    console.log(brain)
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
                    <div className="img" style={{marginTop: '2%', marginLeft: '2%', width: '250px'}}>
                        <Image width={250} height={250} src={process.env.REACT_APP_API_URL + brain.img}/>
                        <Button variant={"success"} style={{width: '250px', marginTop: '2%'}} onClick={addBrain}>Добавить в профиль</Button>
                    </div>
                    <div className="about" style={{display: "flex", flexDirection: "column", marginTop: '2%', marginLeft: '5%'}}>
                        <div className="title" style={{color: 'white'}}>
                            <h2>{brain.name}</h2>
                        </div>
                        <div className="description" style={{width: '40vw'}}>
                            <div>{brain.description}</div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default BrainPage;