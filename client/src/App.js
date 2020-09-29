import React from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';

import UserList from './components/UsersList';
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
    //Will be either undefined or a number depending on if there is a token in the cookies
    const currentUserId = useSelector(state=> state.authentication.id);
    let location = useLocation();
    console.log(location);

    return (
        <>
            {location.pathname !== '/login' ?
            <NavBar />
            : null}
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>


                <Route path="/users">
                    <UserList />
                </Route>

                <Route path="/">
                    <h1>My Home Page</h1>
                </Route>
            </Switch>
        </>
    );
}

export default App;
