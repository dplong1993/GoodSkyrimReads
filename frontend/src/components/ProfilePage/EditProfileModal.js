import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditProfileForm from "./EditProfileForm.js";
import styled from "styled-components";

const EditProfileFormModalWrapper = styled.div`
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;

  .button {
    font-size: 11px;
    appearance: none;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: #00635d;
    background-color: #f9f7f4;
    font-weight: bold;
    font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
    border: none;
    padding: 0;
    padding-bottom: 6px;
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
          (Edit Profile)
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
