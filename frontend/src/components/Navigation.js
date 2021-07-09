import React from 'react';
import {ListGroup} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ALL_BRAINS_ROUTE, MOSTPOPULAR, PORTAL_ROUTE, PROFILE_ROUTE, SIB_ROUTE} from "../utils/consts";
import Search from "./Search";

const Navigation = () => {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item><NavLink style={{color: 'black'}} to={SIB_ROUTE}>Главная</NavLink></ListGroup.Item>
                <ListGroup.Item><NavLink style={{color: 'black'}} to={PORTAL_ROUTE}>Портал</NavLink></ListGroup.Item>
                <ListGroup.Item><NavLink style={{color: 'black'}} to={ALL_BRAINS_ROUTE}>Все Брейны</NavLink></ListGroup.Item>
                <ListGroup.Item><NavLink style={{color: 'black'}} to={PROFILE_ROUTE}>Мой профиль</NavLink></ListGroup.Item>
                <ListGroup.Item><NavLink style={{color: 'black'}} to={MOSTPOPULAR}>Статистика</NavLink></ListGroup.Item>
                <ListGroup.Item><Search/></ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Navigation;