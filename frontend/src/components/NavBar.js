import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, PORTAL_ROUTE, SIB_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'

const NavBar = observer(() => {


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
                            <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
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