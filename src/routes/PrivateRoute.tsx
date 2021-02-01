import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

const auth = true;

type Props = {
    path: string,
    component: React.FC,
    redirectTo: string
    exact?: boolean
}

const redirectPath = '/'

const PrivateRoute: React.FC<Props> = ({ component: Component, path, redirectTo = redirectPath, exact = false }) => {
    const location = useLocation();
    return (
        auth ? <Route path={path} exact={exact} component={Component} />
            : <Redirect to={{ pathname: redirectTo, state: { from: location } }} />
    );
}

export default PrivateRoute;