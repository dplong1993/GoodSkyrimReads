import React from "react";
import styled from "styled-components";

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

  img {
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
    font-size: 12px;
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
`;

const ProfilePage = () => {
  return (
    <ProfilePageWrapper>
      <div className="main">
        <div className="profile-info">
          <div className="left-profile-info">
            <img src="https://goodskyrimreads.s3.us-east-2.amazonaws.com/userimage.png" />
            <div className="ratings">Ratings</div>
            <div className="reviews">Reviews</div>
          </div>
          <div className="right-profile-info">
            <div className="name-holder">
              <div className="name">UserName</div>
              <div className="edit-user">Link to edit profile</div>
            </div>
            <div className="detail-holder">
              <div className="container">
                <div className="label-text">Details</div>
                <div className="location">Location</div>
              </div>
              <div className="container">
                <div className="label-text">Activity</div>
                <div className="joined-date">Joined Date</div>
              </div>
            </div>
            <div className="delete-holder">
              <button className="delete-button">Delete Profile</button>
            </div>
          </div>
        </div>
        <div className="bookshelves">
          <div className="header">Name's bookshelves</div>
          <div className="shelves">
            <div className="shelf">Read</div>
            <div className="shelf">Currently-Reading</div>
            <div className="shelf">To-Read</div>
          </div>
        </div>
        <div className="activity-snapshot">
          <div className="header">User's Activity</div>
          <table>
            <tbody>
              <tr className="book-row">Book 1</tr>
              <tr className="book-row">Book 2</tr>
              <tr className="book-row">Book 3</tr>
            </tbody>
          </table>
        </div>
      </div>
    </ProfilePageWrapper>
  );
};

export default ProfilePage;
