import React from "react";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import NavBarLink from "../NavBarLink";
import SearchBar from "../SearchBar";
import LogoutButton from "../LogoutButton";
import styled from "styled-components";

const NavigationWrapper = styled.div`
  margin: 0;
  background-color: #f4f1ea;
  padding: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  width: 100vw;

  .nav-bar-content {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    width: auto;
    height: 50px;
  }

  .home {
    font-size: 16px;
    padding: 12px 0px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #d6d0c4;
    cursor: pointer;
    text-decoration: none;
    color: #333333;
    background-color: #f4f1ea;
    font-weight: bold;
    font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
    text-align: center;
    width: 150px;
    margin-left: 200px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }
`;

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavBarLink path="/my-books" text="My Books" />
        <NavBarLink path="/books" text="Browse" />
        <NavBarLink path="/profile" text="Profile" />
        {/* <ProfileButton user={sessionUser} /> */}
        <SearchBar />
        <LogoutButton />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <nav>
      <NavigationWrapper>
        <div className="nav-bar-content">
          <NavBarLink path="/" text="Home" />
          {isLoaded && sessionLinks}
        </div>
      </NavigationWrapper>
    </nav>
  );
}

export default Navigation;
