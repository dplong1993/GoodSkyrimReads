import React, { useEffect } from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { loadBooks } from "../../store/books";
import { useDispatch, useSelector } from "react-redux";

const AuthorizedHomePageWrapper = styled.div`
  display: flex;
  background-color: #f9f7f4;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const AuthorizedHomePage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  if (!books) {
    return null;
  }

  return (
    <AuthorizedHomePageWrapper>
      <Sidebar />
      <Main />
    </AuthorizedHomePageWrapper>
  );
};

export default AuthorizedHomePage;
