import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useFetchToken from '../hooks/useFetchToken';

const AdminRoute = (props) => {
    const token = useFetchToken()
    if (token){
        return (
            <Route exact path={`${props.componentUrl}`}>
                {props.component}
            </Route>
        )
    } else {
        return (
            <Route exact path={`${props.errorComponentUrl}`}>
                {props.errorComponent}
            </Route>
        )
    }
}

export default AdminRoute