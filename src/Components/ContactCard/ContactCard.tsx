import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "../../Contexts/useAppContext";
import { CrudStateEnum } from "../../Enums/CrudStateEnum";
import { deleteContact } from "../../libs/Redux/Reducers/reducer";
import { RootState } from "../../libs/Redux/Stores/store";
import { ContactTypes } from "../../types/ContactTypes";
import ConfirmationModal from "../Modal/ConfirmationModal";
import Modal from "../Modal/Modal";
import EachContactDetails from "./EachContactDetails";

function ContactCard({
  first_name,
  last_name,
  contact_status,
  id,
  contact_index,
}: ContactTypes) {
  const {
    changeCrudState,
    modalState,
    toggleModal,
    crudState,
    clickedContactData,
  } = useAppContext();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const contactData = useSelector((state: RootState) => state.contacts.value);

  const dispatch = useDispatch();

  const confirmationFn = () => {
    const deletedContacts = contactData.filter(
      (contact: ContactTypes) => contact.id !== id
    );
    dispatch(deleteContact(deletedContacts));
  };

  return (
    <div className="mx-5 place-content-center">
      <EachContactDetails
        {...{ first_name, last_name, contact_status, id, contact_index }}
        openDeleteModal={() => setOpenDeleteModal(!openDeleteModal)}
      />

      {crudState === CrudStateEnum.EDIT_CONTACT &&
      clickedContactData.id === id ? (
        <Modal
          isModalOpen={modalState}
          closeModal={toggleModal}
          modalTitle="Edit Contact"
          changeCrudState={changeCrudState}
        />
      ) : null}

      <ConfirmationModal
        isModalOpen={openDeleteModal}
        closeModal={() => setOpenDeleteModal(!openDeleteModal)}
        confirmationFn={confirmationFn}
        modalTitle={"Confirm"}
      />
    </div>
  );
}

export default ContactCard;
