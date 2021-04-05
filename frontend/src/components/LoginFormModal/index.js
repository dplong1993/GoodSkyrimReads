import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const LoginFormModalWrapper = styled.div`
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;

  .button {
    height: 100%;
    width: 150px;
    box-sizing: border-box;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    text-align: center;
  }
`;

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <LoginFormModalWrapper>
        <button className="button" onClick={() => setShowModal(true)}>
          Log In
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
          </Modal>
        )}
      </LoginFormModalWrapper>
    </>
  );
}

export default LoginFormModal;
