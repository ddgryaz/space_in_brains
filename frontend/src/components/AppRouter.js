import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {adminRoutes, authRouters, publicRouters} from "../routes";
import {SIB_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";

const AppRouter = observer(() => {
    const userToken = localStorage.getItem('token')
    let userInfo;
    if (userToken) {
        userInfo = jwt_decode(userToken)
    }
    const {user} = useContext(Context)
    return (
        <Switch>
            {user.isAuth && authRouters.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>
            )}
            {user.isAuth && userInfo.role == 'ADMIN' && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRouters.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SIB_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;