import React, { useEffect } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import Login from './components/auth/Login';
import NavBar from './components/nav/NavBar';
import Signup from './components/auth/Signup';
import Home from './components/pages/homePage/Home';
import Profile from './components/pages/userProfile/Profile';
import Books from './components/pages/books/Books';
import MyBooks from './components/pages/userBooks/MyBooks';
import ComingSoon from './components/pages/ComingSoon';
import { useDispatch, useSelector } from 'react-redux';
import BookInfo from './components/pages/books/BookInfo';
import { getUserInfo } from './store/currentUser';

//Need to make routes private to ensure there is always a logged in user and forward to login page
// if there is no logged in user or token present.

//Need to refactor logout button because it only works on the homepage because that is the only
// page that uses the authentication slice of state at the moment.

//Need to look into authentication state loading but the token not being in cookies. Causes problems
// with logout functionality.

const PrivateRoute = ({ component: Component, ...rest }) => {
    let needLogin = useSelector(state => !state.authentication.id);

    return (
        <Route {...rest} render={(props) => (
            needLogin
            ? <Redirect to='/login' />
            : <Component {...props} />
        )} />
    )
}

function App() {
    let currentUserId = useSelector(state => state.authentication.id);
    let location = useLocation();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo(currentUserId));
    }, [currentUserId, dispatch])

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
                    component={Profile}
                />
                <PrivateRoute
                    path="/my-books"
                    exact={true}
                    component={MyBooks}
                />
                <PrivateRoute
                    path="/books/:id"
                    exact={true}
                    component={BookInfo}
                />
                <PrivateRoute
                    path="/books"
                    exact={true}
                    component={Books}
                />
                <PrivateRoute
                    path="/recommendations"
                    exact={true}
                    component={ComingSoon}
                />
                <PrivateRoute
                    path="/"
                    exact={true}
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
