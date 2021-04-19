import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditProfileForm from "./EditProfileForm.js";
import styled from "styled-components";

const EditProfileFormModalWrapper = styled.div`
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

function EditProfileFormModal({ user }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    if (user.email === "demo@user.io")
      window.alert(
        "Please don't change the Demo User's info. If you want to try this feature please create your own account."
      );
    else setShowModal(true);
  };

  return (
    <>
      <EditProfileFormModalWrapper>
        <button className="button" onClick={handleShowModal}>
          Edit Profile
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditProfileForm setShowModal={setShowModal} />
          </Modal>
        )}
      </EditProfileFormModalWrapper>
    </>
  );
}

export default EditProfileFormModal;
