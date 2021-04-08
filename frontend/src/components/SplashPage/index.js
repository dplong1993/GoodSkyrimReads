import React from "react";
import styled from "styled-components";

const SplashPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f7f4;
  height: 100vh;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  h1 {
    text-align: center;
    color: #382110;
  }

  img {
    width: 100%;
    height: 40vh;
    background-color: #f5eee5;
  }

  .text-holder {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 18px;
    width: 250px;
    padding: 30px;
    margin: 15px;
    color: #382110;
    text-align: center;
  }

  .text-header {
    width: 250px;
    text-align: center;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: 15px;
    margin-right: 15px;
    color: #382110;
  }

  .text-box {
    background-color: #f5eee5;
    margin: auto;
    margin-top: 20px;
  }
`;

const SplashPage = () => {
  return (
    <SplashPageWrapper>
      <h1>GoodSkryimReads</h1>
      <div>
        <img
          alt="skyrim-logo"
          src="https://goodskyrimreads.s3.us-east-2.amazonaws.com/Logo-Skyrim.png"
        />
      </div>
      <div className="text-holder">
        <div className="text-box">
          <h2 className="text-header">Missed the books?</h2>
          <p>
            Do you have fond memories of playing through the Elder Scrolls V
            Skryim? Do you remember going through the game and seeing loads of
            books that you never read? Feeling like you missed out on essential
            lore by skipping those books? Well now you have a system to manage
            all of the books from Skyrim so you can go back and dive into the
            lore.
          </p>
        </div>
        <div className="text-box">
          <h2 className="text-header">Want to catch up?</h2>
          <p>
            On GoodSkryimReads, we give you the ability to view books from the
            Skyrim game. You can choose to add those books to our pre-built
            shelves, have-read, want-to-read, or currently-reading, or you can
            choose to create a custom shelve and add books to that shelf
            instead. You can also see all the information related to one book as
            well as leave reviews about that books.
          </p>
        </div>
      </div>
    </SplashPageWrapper>
  );
};

export default SplashPage;
