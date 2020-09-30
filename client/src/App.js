import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Login from './components/auth/Login';
import NavBar from './components/nav/NavBar';
import Signup from './components/auth/Signup';
import Home from './components/pages/homePage/Home';
import Profile from './components/pages/Profile';
import Books from './components/pages/Books';
import MyBooks from './components/pages/MyBooks';

function App() {
    let location = useLocation();

    return (
        <>
            {location.pathname !== '/login' && location.pathname !== '/signup' ?
            <NavBar />
            : null}
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/profile" component={Profile} />
                <Route path="/my-books" component={MyBooks} />
                <Route path="/books" component={Books} />
                <Route path="/" component={Home} />
                {/* <Route path="/" render={() => <h1>Home Page</h1> } /> */}
            </Switch>
        </>
    );
}

export default App;
