import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Login from './components/auth/Login';
import NavBar from './components/nav/NavBar';
import Signup from './components/auth/Signup';

function App() {
    //Will be either undefined or a number depending on if there is a token in the cookies
    let location = useLocation();
    // console.log(location);

    return (
        <>
            {location.pathname !== '/login' && location.pathname !== '/signup' ?
            <NavBar />
            : null}
            <Switch>
                <Route path="/login" component={Login} />

                <Route path="/signup">
                    <Signup />
                </Route>

                <Route path="/" render={() => <h1>Home Page</h1> } />
            </Switch>
        </>
    );
}

export default App;
