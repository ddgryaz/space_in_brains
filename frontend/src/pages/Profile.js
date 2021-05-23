import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Image, Row, Table} from "react-bootstrap";
import Navigation from "../components/Navigation";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import MyBrainsList from "../components/MyBrainsList";
import {getOneUserBrains} from "../http/userBrainAPI";
import {Context} from "../index";
import ChangeAvatar from "../components/modals/ChangeAvatar";

const Profile = observer(() => {
    const [avatarVisible, setAvatarVisible] = useState(false)
    const {brain} = useContext(Context)
    const userToken = localStorage.getItem('token')
    let userInfo;
    if (userToken) {
        userInfo = jwt_decode(userToken)
    }
    useEffect(() => {
        getOneUserBrains(userInfo.id).then(data => brain.setBrains(data))
    }, [])

    return (
        <Row className="mt-2">
            <Col md={3} className="mt-3">
                <Navigation />
            </Col>
            <Col md={9} className="mt-3">
                <div className="card" style={{display: "flex",
                    width: '72vw',
                    height: '80vh',
                    justifyContent: 'space-between',
                    backgroundColor: '#6d6f6f'}}>
                    <div className="title" style={{display: "flex", justifyContent: "center", marginTop: '1%'}}><h2>Мой профиль:</h2></div>
                    <div className="top" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: '70vw', height: '35vh'}}>
                        <div className="top__left" style={{display: "flex", flexDirection: "column", marginLeft: '2%'}}>
                            <Image width={250} height={250} src={process.env.REACT_APP_API_URL + userInfo.img}/>
                            <Button variant={"success"} style={{width: '250px', marginTop: '2%'}} onClick={() => setAvatarVisible(true)}>Изменить аватар</Button>
                            <ChangeAvatar show={avatarVisible} onHide={() => setAvatarVisible(false)}/>
                        </div>
                        <div className="top__right" style={{marginRight: '10%'}}>
                            <div className="description" style={{width: '40vw', display: "flex", paddingTop: '5%'}}>
                                        <div style={{width: '20vw',
                                            height: '23vh',
                                            border: '1px solid black',
                                            boxShadow: '0 0 10px rgb(255, 255, 255)',
                                            borderRight: '0px',
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: 'space-around',
                                            borderRadius: '2%',
                                            fontSize: '14px'}}>
                                            <div style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>Идентификатор:</div>
                                            <div style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>Логин:</div>
                                            <div style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>Роль:</div>
                                            <div style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>Пароль:</div>
                                        </div>
                                        <div style={{width: '20vw',
                                            height: '23vh',
                                            border: '1px solid black',
                                            boxShadow: '0 0 10px rgb(255, 255, 255)',
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: 'space-around',
                                            textAlign: 'center',
                                            borderRadius: '2%',
                                            fontSize: '14px'}}>
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
                    <div className="title" style={{display: "flex", justifyContent: "center", marginTop: '1%'}}><h2>Моя коллекция:</h2></div>
                    <div className="bottom" style={{display: "flex", flexDirection: "row", justifyContent: "center", height: '60vh'}}>
                        <div className="mybrains" style={{
                            overflowY: 'auto', overflowX: 'hidden',
                            borderRadius: '.25rem',
                            width: '70vw',
                            height: '25vh',
                            boxShadow: '0 0 10px rgb(255, 255, 255)',
                            margin: '2%',
                            border: '1px solid black',
                            display: "flex",
                        }}>
                            <MyBrainsList/>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
});

export default Profile;