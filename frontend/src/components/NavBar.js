import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, CHAT, LOGIN_ROUTE, PORTAL_ROUTE, SIB_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
import jwt_decode from "jwt-decode";


const NavBar = observer(() => {

    const userToken = localStorage.getItem('token')
    let userInfo;
    let switchButton;
    if (userToken) {
        userInfo = jwt_decode(userToken)
        if (userInfo.role == 'ADMIN') {
            switchButton = 'true'
        } else {
            switchButton = 'none'
        }
    }
    const {user} = useContext(Context)
    const history = useHistory()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear();
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SIB_ROUTE}>Space in Brains</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button style={{display: `${switchButton}`}} variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
                            <Button variant={"outline-light"} onClick={() => history.push(CHAT)} className={"ml-2"}><div style={{color: 'gold'}}>ЧАТ</div></Button>
                            <Button variant={"outline-light"} onClick={() => history.push(PORTAL_ROUTE)} className={"ml-2"}>Портал</Button>
                            <Button variant={"outline-light"} onClick={() => logOut()} className={"ml-2"} >Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;