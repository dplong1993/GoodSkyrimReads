import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm";
import styled from "styled-components";

const SignupFromModalWrapper = styled.div`
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;

  .button {
    font-size: 16px;
    padding: 12px 24px;
    appearance: none;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: #382110;
    background-color: #f4f1ea;
    line-height: 50px;
    font-weight: bold;
    font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
    padding: 0 15px;
    border: none;
  }
  .button:hover {
    color: #ffffff;
    background-color: #382110;
    outline: 0;
  }
`;

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SignupFromModalWrapper>
        <button className="button" onClick={() => setShowModal(true)}>
          Signup
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SignupForm />
          </Modal>
        )}
      </SignupFromModalWrapper>
    </>
  );
}

export default SignupFormModal;
