import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm";
import styled from "styled-components";

const SignupFromModalWrapper = styled.div`
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;

  .button {
    box-sizing: border-box;
    height: 100%;
    width: 150px;
    margin-right: 200px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    text-align: center;
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
