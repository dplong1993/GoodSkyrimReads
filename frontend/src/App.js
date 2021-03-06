import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import * as shelfActions from "./store/shelves";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import AuthorizedHomePage from "./components/AuthorizedHomePage";
import BookInfoPage from "./components/BookInfoPage";
import MyBooksPage from "./components/MyBooksPage";
import BooksPage from "./components/BooksPage";
import ProfilePage from "./components/ProfilePage";
import ReadShelf from "./components/ReadShelf";
import CurrReadShelf from "./components/CurrReadShelf";
import ToReadShelf from "./components/ToReadShelf";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    if (sessionUser) dispatch(shelfActions.loadBooks(sessionUser.id));
  }, [dispatch, sessionUser]);

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
              <Route exact path="/my-books/read">
                <ReadShelf />
              </Route>
              <Route exact path="/my-books/currentlyreading">
                <CurrReadShelf />
              </Route>
              <Route exact path="/my-books/wanttoread">
                <ToReadShelf />
              </Route>
              <Route exact path="/books">
                <BooksPage />
              </Route>
              <Route exact path="/profile">
                <ProfilePage />
              </Route>
            </>
          ) : (
            <>
              <Route exact path="/">
                <SplashPage />
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </>
          )}
        </Switch>
      )}
    </>
  );
}

export default App;
