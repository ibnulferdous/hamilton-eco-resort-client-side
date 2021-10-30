import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './PrivateRoute.css';


const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading } = useAuth();

    if(isLoading) {
        return <div className="spinner-div fullscreen d-flex align-items-center justify-content-center">
            <Spinner className="spinner" animation="border" variant="secondary" />
        </div>;
    }

    return (
        <Route
        {...rest}
            render={({location}) => user ? children : <Redirect
                to={{
                    pathname: "/log-in",
                    state: { from: location }
                }}
            ></Redirect>
            }
        ></Route>
    );
};

export default PrivateRoute;