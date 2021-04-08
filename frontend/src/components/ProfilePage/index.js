import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BookTile from "../BookTile";

const ProfilePageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f9f7f4;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75vw;
    margin: auto;
    padding-top: 30px;
  }

  .profile-info {
    display: flex;
    width: 80%;
  }

  .left-profile-info {
    display: flex;
    flex-direction: column;
  }

  .user-img {
    height: 75%;
    border-radius: 50%;
  }

  .ratings {
    text-align: center;
    padding-top: 10px;
  }

  .reviews {
    padding-top: 3px;
    text-align: center;
  }

  .right-profile-info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  .name-holder {
    display: flex;
    width: 40vw;
    height: 30px;
    margin-bottom: 0;
    border-bottom: solid 1px #d8d8d8;
    align-items: flex-end;
  }

  .name {
    padding-right: 10px;
    width: 100px;
    font-weight: bold;
    color: #382110;
    font-size: 20px;
  }

  .edit-user {
  }

  .detail-holder {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    font-size: 14px;
    font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .container {
    display: flex;
  }

  .label-text {
    box-sizing: border-box;
    width: 60px;
    color: #382110;
  }

  .location {
    margin-left: 50px;
  }

  .joined-date {
    margin-left: 50px;
  }

  .delete-holder {
    margin-top: 100px;
    align-self: center;
  }

  .delete-button {
    height: 50px;
    width: 120px;
    font-size: 14px;
    font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .bookshelves {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-bottom: 20px;
  }

  .header {
    color: #382110;
    font-weight: bold;
    border-bottom: solid 1px #d8d8d8;
    font-size: 15px;
    font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .shelves {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 10px;
  }

  .shelf {
    width: 150px;
    font-size: 14px;
    font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .activity-snapshot {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .book-row {
    border: solid 1px black;
    height: 120px;
  }

  a {
    color: #00635d;
    font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-decoration: none;
  }
`;

const ProfilePage = () => {
  const shelves = useSelector((state) => state.shelves);
  const { user } = useSelector((state) => state.session);

  const generateBookTiles = () => {
    if (shelves.read.length === undefined) return null;
    if (shelves.toRead.length === undefined) return null;
    if (shelves.currRead.length === undefined) return null;
    const books = [...shelves.read, ...shelves.currRead, ...shelves.toRead];
    if (books.length === 0) return <div>No matching items</div>;
    return books.map((book, i) => {
      if (i > 2) return null;
      return <BookTile key={book.id} book={book} profile={true}></BookTile>;
    });
  };

  return (
    <ProfilePageWrapper>
      <div className="main">
        <div className="profile-info">
          <div className="left-profile-info">
            <img
              className="user-img"
              alt="user"
              src="https://goodskyrimreads.s3.us-east-2.amazonaws.com/userimage.png"
            />
            <Link to="/reviews" className="ratings">
              0 Ratings
            </Link>
            <Link to="/ratings" className="reviews">
              0 Reviews
            </Link>
          </div>
          <div className="right-profile-info">
            <div className="name-holder">
              <div className="name">
                {user.firstName} {user.lastName}
              </div>
              <div className="edit-user">Link to edit profile</div>
            </div>
            <div className="detail-holder">
              <div className="container">
                <div className="label-text">Details</div>
                <div className="location">The Internet, Earth (0 mi)</div>
              </div>
              <div className="container">
                <div className="label-text">Activity</div>
                <div className="joined-date">
                  Joined in {user.createdAt.slice(0, 7)}
                </div>
              </div>
            </div>
            <div className="delete-holder">
              <button className="delete-button">Delete Profile</button>
            </div>
          </div>
        </div>
        <div className="bookshelves">
          <div className="header">{user.firstName}'s bookshelves</div>
          <div className="shelves">
            <Link to="my-books/read" className="shelf">
              Read ({shelves.read.length})
            </Link>
            <Link to="/my-books/currentlyreading" className="shelf">
              Currently-Reading ({shelves.currRead.length})
            </Link>
            <Link to="/my-books/wanttoread" className="shelf">
              To-Read ({shelves.toRead.length})
            </Link>
          </div>
        </div>
        <div className="activity-snapshot">
          <div className="header">{user.firstName}'s Activity</div>
          {generateBookTiles()}
        </div>
      </div>
    </ProfilePageWrapper>
  );
};

export default ProfilePage;
