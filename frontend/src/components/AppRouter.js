import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRouters, publicRouters} from "../routes";
import {SIB_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return (
        <Switch>
            {user.isAuth && authRouters.map(({path, Component}) =>
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