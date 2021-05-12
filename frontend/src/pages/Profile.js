import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Image, Row, Table} from "react-bootstrap";
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
                    width: '72vw',
                    height: '80vh',
                    justifyContent: 'space-between',
                    backgroundColor: '#6d6f6f'}}>
                    <div className="title" style={{display: "flex", justifyContent: "center", marginTop: '1%'}}><h2>Мой профиль:</h2></div>
                    <div className="top" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: '70vw', height: '25vh'}}>
                        <div className="top__left" style={{display: "flex", flexDirection: "column", marginLeft: '2%'}}>
                            <Image width={250} height={250} src={process.env.REACT_APP_API_URL + userInfo.img}/>
                            <Button variant={"success"} style={{width: '250px', marginTop: '2%'}}>Изменить аватар</Button>
                        </div>
                        <div className="top__right">

                        </div>
                    </div>
                    <div className="title" style={{display: "flex", justifyContent: "center", marginTop: '1%'}}><h2>Моя коллекция:</h2></div>
                    <div className="bottom" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <div className="mybrains" style={{
                            borderRadius: '.25rem',
                            width: '70vw',
                            boxShadow: '0 0 10px rgb(255, 255, 255)',
                            height: '38vh',
                            marginBottom: '2%',
                            border: '1px solid black'
                        }}>

                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
});

export default Profile;


{/*<div className="img" style={{marginTop: '2%', marginLeft: '2%', width: '250px'}}>*/}
{/*    <Image width={250} height={250} src={process.env.REACT_APP_API_URL + userInfo.img}/>*/}
{/*    <Button variant={"success"} style={{width: '250px', marginTop: '2%'}}>Изменить аватар</Button>*/}
{/*    <div className="description" style={{width: '26vw', display: "flex", paddingTop: '5%'}}>*/}
{/*        <div style={{width: '13vw',*/}
{/*            height: '40vh',*/}
{/*            border: '1px solid black',*/}
{/*            boxShadow: '0 0 10px rgb(255, 255, 255)',*/}
{/*            borderRight: '0px',*/}
{/*            display: "flex",*/}
{/*            flexDirection: "column",*/}
{/*            justifyContent: 'space-around',*/}
{/*            borderRadius: '2%',*/}
{/*            fontSize: '12px'}}>*/}
{/*            <div style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>Идентификатор:</div>*/}
{/*            <div style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>Логин:</div>*/}
{/*            <div style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>Роль:</div>*/}
{/*            <div style={{marginLeft: '5%', color: 'white', fontWeight: 'bold'}}>Пароль:</div>*/}
{/*        </div>*/}
{/*        <div style={{width: '13vw',*/}
{/*            height: '40vh',*/}
{/*            border: '1px solid black',*/}
{/*            boxShadow: '0 0 10px rgb(255, 255, 255)',*/}
{/*            display: "flex",*/}
{/*            flexDirection: "column",*/}
{/*            justifyContent: 'space-around',*/}
{/*            textAlign: 'center',*/}
{/*            borderRadius: '2%',*/}
{/*            fontSize: '12px'}}>*/}
{/*            <div style={{color: 'orangered', fontWeight: 'bold'}}>{userInfo.id}</div>*/}
{/*            <div style={{color: 'orangered', fontWeight: 'bold'}}>{userInfo.login}</div>*/}
{/*            {userInfo.role == 'ADMIN' ?*/}
{/*                <div style={{color: 'orangered', fontWeight: 'bold'}}>Ты тут главный!</div>*/}
{/*                :*/}
{/*                <div style={{color: 'orangered', fontWeight: 'bold'}}>Ты обычный пользователь</div>*/}
{/*            }*/}
{/*            <div style={{color: 'orangered', fontWeight: 'bold'}}>Мы его зашифровали! :(</div>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*</div>*/}
{/*<div className="about" style={{display: "flex", flexDirection: "column", marginTop: '2%', marginLeft: '5%'}}>*/}
{/*    <div className="title" style={{color: 'white'}}>*/}
{/*        <h2>Мой профиль</h2>*/}
{/*    </div>*/}

{/*</div>*/}