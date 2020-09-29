import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';

import Login from './components/auth/Login';
import NavBar from './components/nav/NavBar';
import Signup from './components/auth/Signup';

function App() {
    //Will be either undefined or a number depending on if there is a token in the cookies
    const currentUserId = useSelector(state=> state.authentication.id);
    let location = useLocation();
    console.log(location);

    return (
        <>
            {location.pathname !== '/login' && location.pathname !== '/signup' ?
            <NavBar />
            : null}
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/signup">
                    <Signup />
                </Route>

                <Route path="/">
                    <h1>My Home Page</h1>
                </Route>
            </Switch>
        </>
    );
}

export default App;
