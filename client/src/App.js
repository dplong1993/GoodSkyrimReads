import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import Login from './components/auth/Login';
import NavBar from './components/nav/NavBar';
import Signup from './components/auth/Signup';
import Home from './components/pages/homePage/Home';
import Profile from './components/pages/Profile';
import Books from './components/pages/Books';
import MyBooks from './components/pages/MyBooks';
import ComingSoon from './components/pages/ComingSoon';
import { useSelector } from 'react-redux';

//Need to make routes private to ensure there is always a logged in user and forward to login page
// if there is no logged in user or token present.

//Need to refactor logout button because it only works on the homepage because that is the only
// page that uses the authentication slice of state at the moment.

//Need to look into authentication state loading but the token not being in cookies. Causes problems
// with logout functionality.

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      rest.needLogin === true
        ? <Redirect to='/login' />
        : <Component {...props} />
    )} />
  )

function App() {
    let location = useLocation();
    let needLogin = useSelector(state => !state.authentication.id);

    console.log(needLogin);
    return (
        <>
            {location.pathname !== '/login' && location.pathname !== '/signup' ?
            <NavBar />
            : null}
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <PrivateRoute
                    path="/profile"
                    exact={true}
                    needLogin={needLogin}
                    component={Profile}
                />
                <PrivateRoute
                    path="/my-books"
                    exact={true}
                    needLogin={needLogin}
                    component={MyBooks}
                />
                <PrivateRoute
                    path="/books"
                    exact={true}
                    needLogin={needLogin}
                    component={Books}
                />
                <PrivateRoute
                    path="/recommendations"
                    exact={true}
                    needLogin={needLogin}
                    component={ComingSoon}
                />
                <PrivateRoute
                    path="/"
                    exact={true}
                    needLogin={needLogin}
                    component={Home}
                />
                {/* <Route path="/profile" component={Profile} />
                <Route path="/my-books" component={MyBooks} />
                <Route path="/books" component={Books} />
                <Route path="/recommendations" component={ComingSoon} />
                <Route path="/" component={Home} /> */}
                {/* <Route path="/" render={() => <h1>Home Page</h1> } /> */}
            </Switch>
        </>
    );
}

export default App;
