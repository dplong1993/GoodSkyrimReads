import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import AuthorizedHomePage from "./components/AuthorizedHomePage";
import BookInfoPage from "./components/BookInfoPage";
import MyBooksPage from "./components/MyBooksPage";
import BooksPage from "./components/BooksPage";
import ProfilePage from "./components/ProfilePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {sessionUser ? (
            <>
              <Route exact path="/">
                <AuthorizedHomePage />
              </Route>
              <Route exact path="/books/:id">
                <BookInfoPage />
              </Route>
              <Route exact path="/my-books">
                <MyBooksPage />
              </Route>
              <Route exact path="/books">
                <BooksPage />
              </Route>
              <Route exact path="/profile">
                <ProfilePage />
              </Route>
            </>
          ) : (
            <Route>
              <SplashPage />
            </Route>
          )}
        </Switch>
      )}
    </>
  );
}

export default App;
