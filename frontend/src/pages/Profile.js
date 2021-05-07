import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";

const Profile = observer(() => {
    const userToken = localStorage.getItem('token')
    let userInfo;
    if (userToken) {
        userInfo = jwt_decode(userToken)
    }

    return (
        <Row className="mt-2">
            <Col md={3} className="mt-3">
                <Navigation />
            </Col>
            <Col md={9} className="mt-3">
                <div className="card" style={{display: "flex",
                    flexDirection: 'row',
                    width: '72vw',
                    height: '80vh',
                    backgroundColor: '#6d6f6f'}}>
                    <div className="img" style={{marginTop: '2%', marginLeft: '2%', width: '250px'}}>
                        <Image width={250} height={250} src={process.env.REACT_APP_API_URL + userInfo.img}/>
                        <Button variant={"success"} style={{width: '250px', marginTop: '2%'}}>Изменить аватар</Button>
                    </div>
                    <div className="about" style={{display: "flex", flexDirection: "column", marginTop: '2%', marginLeft: '5%'}}>
                        <div className="title" style={{color: 'white'}}>
                            <h2>Мой профиль</h2>
                        </div>
                        <div className="description" style={{width: '40vw', display: "flex"}}>
                            <div style={{width: '20vw',
                                height: '60vh',
                                border: '1px solid black',
                                boxShadow: '0 0 10px rgb(255, 255, 255)',
                                borderRight: '0px',
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: 'space-around',
                                borderRadius: '2%'}}>
                                <div style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>Идентификатор:</div>
                                <div style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>Логин:</div>
                                <div style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>Роль:</div>
                                <div style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>Пароль:</div>
                            </div>
                            <div style={{width: '20vw',
                                height: '60vh',
                                border: '1px solid black',
                                boxShadow: '0 0 10px rgb(255, 255, 255)',
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: 'space-around',
                                textAlign: 'center',
                                borderRadius: '2%'}}>
                                <div style={{color: 'orangered', fontWeight: 'bold'}}>{userInfo.id}</div>
                                <div style={{color: 'orangered', fontWeight: 'bold'}}>{userInfo.login}</div>
                                {userInfo.role == 'ADMIN' ?
                                <div style={{color: 'orangered', fontWeight: 'bold'}}>Ты тут главный!</div>
                                :
                                <div style={{color: 'orangered', fontWeight: 'bold'}}>Ты обычный пользователь</div>
                                }
                                <div style={{color: 'orangered', fontWeight: 'bold'}}>Мы его зашифровали! :(</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
});

export default Profile;