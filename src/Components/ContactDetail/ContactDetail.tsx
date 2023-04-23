import { useState } from "react";
import {
  defaultContactVariable,
  useAppContext,
} from "../../Contexts/useAppContext";
import { ContactStatusEnum } from "../../Enums/ContactStatusEnums";
import { CrudStateEnum } from "../../Enums/CrudStateEnum";
import ConfirmationModal from "../Modal/ConfirmationModal";
import Modal from "../Modal/Modal";
import { RootState } from "../../libs/Redux/Stores/store";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../libs/Redux/Reducers/contactSlice";
import { ContactTypes } from "../../types/ContactTypes";
import randomColor from "randomcolor";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ContactDetail() {
  const { changeCrudState, toggleModal, modalState, crudState } =
    useAppContext();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { contactId } = useParams();

  const navigate = useNavigate();

  const contactData =
    useSelector((state: RootState) => state.contacts.value) || [];

  const dispatch = useDispatch();

  const contact: ContactTypes =
    contactData.find((contact) => contact.id === contactId) ||
    defaultContactVariable;

  const confirmationFn = () => {
    const deletedContacts = contactData.filter(
      (contact: ContactTypes) => contact.id !== contactId
    );

    dispatch(deleteContact(deletedContacts));

    toast("Contact Delete Successfully");

    navigate("/");
  };

  return (
    <div className="text-center">
      <div className="mt-20 mb-5 relative">
        <div
          style={{
            backgroundColor: `${randomColor()}`,
            height: "70px",
            width: "70px",
          }}
          className=" object-cover mx-auto shadow-lg flex justify-center items-center rounded-full "
        >
          {contact?.first_name.charAt(0)} {contact?.last_name.charAt(0)}
        </div>
        <span
          className={`top-0 ml-3 absolute  w-5 h-5 ${
            contact?.contact_status === ContactStatusEnum.ACTIVE
              ? "bg-green-500"
              : "bg-red-400"
          } border-2 border-white dark:border-gray-800 rounded-full`}
        ></span>
      </div>
      <div>
        Contact Status:
        <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-5">
          <div
            className={`${
              contact?.contact_status === ContactStatusEnum.ACTIVE
                ? "bg-green-500"
                : "bg-red-500"
            } rounded-full w-2.5 h-2.5 block mr-2`}
          ></div>
          {contact?.contact_status === ContactStatusEnum.ACTIVE
            ? "Active"
            : "Inactive"}
        </span>
      </div>
      <p className="capitalize text-5 mt-3">Contact Full Name:</p>
      <p className="capitalize text-xl mt-3">
        {contact?.first_name} {contact?.last_name}
      </p>
      <div className="flex justify-center items-center text-center mt-10">
        <button
          onClick={() => {
            changeCrudState(CrudStateEnum.EDIT_CONTACT);
            toggleModal();
          }}
          className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-[100px]"
        >
          <i className="bi bi-pencil-square text-sm"></i> {"  "}
          Edit
        </button>
        <button
          onClick={() => setOpenDeleteModal(!openDeleteModal)}
          className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-[100px]"
        >
          <i className="bi bi-trash text-sm"></i> {"  "}
          Delete
        </button>
      </div>
      {crudState === CrudStateEnum.EDIT_CONTACT && contactId ? (
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
        modalTitle={"Are u sure u want to delete this Contact"}
      />
    </div>
  );
}

export default ContactDetail;
