import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';

import UserList from './components/UsersList';
import Login from './components/Login';

function App() {
    //Will be either undefined or a number depending on if there is a token in the cookies
    const currentUserId = useSelector(state=> state.authentication.id);

    return (
        <BrowserRouter>
            <nav>
                <h1>Hello World!</h1>
                <ul>
                    <li><NavLink to="/" activeClass="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeClass="active">Users</NavLink></li>
                    <li><NavLink to="/login" activeClass="active">Login</NavLink></li>
                </ul>
            </nav>
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
        </BrowserRouter>
    );
}

export default App;
