import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  defaultContactVariable,
  useAppContext,
} from "../../Contexts/useAppContext";
import { ContactStatusEnum } from "../../Enums/ContactStatusEnums";
import { CrudStateEnum } from "../../Enums/CrudStateEnum";
import {
  addContact,
  editContact,
} from "../../libs/Redux/Reducers/contactSlice";
import { RootState } from "../../libs/Redux/Stores/store";
import { toast } from "react-toastify";

const Form = () => {
  const { crudState, toggleModal, clickedContactData, clickedContactFuntion } =
    useAppContext();

  const [inputValue, setInputValue] = useState({
    first_name: "",
    last_name: "",
    id: 0,
    contact_status: "",
  });

  const [radioValue, setRadioValue] = useState<ContactStatusEnum>(
    ContactStatusEnum.ACTIVE
  );

  const contactData = useSelector((state: RootState) => state.contacts.value);

  const dispatch = useDispatch();

  const handleInputChange = (event: any) => {
    setInputValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRadioChange = (event: any) => {
    setRadioValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (crudState === CrudStateEnum.CREATE_CONTACT) {
      toggleModal();

      const newData = {
        ...inputValue,
        id: uuidv4(),
        contact_status: radioValue,
      };

      dispatch(addContact([...contactData, newData]));

      toast("Contact Created Successfully");
    }

    if (crudState === CrudStateEnum.EDIT_CONTACT) {
      toggleModal();

      const contactIndex = contactData.findIndex(
        (contact) => contact.id === clickedContactData.id
      );

      const newFirstName = inputValue.first_name
        ? inputValue.first_name
        : clickedContactData.first_name;

      const newLastName = inputValue.last_name
        ? inputValue.last_name
        : clickedContactData.last_name;

      const newContactStatus = radioValue
        ? radioValue
        : clickedContactData.contact_status;

      const id = clickedContactData.id;

      const editedValue = {
        first_name: newFirstName,
        last_name: newLastName,
        contact_status: newContactStatus,
        id: id,
      };

      const newEditContact = [...contactData];

      newEditContact[contactIndex] = editedValue;

      dispatch(editContact(newEditContact));

      toast("Contact Edited Successfully");

      clickedContactFuntion(defaultContactVariable);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col bg-white rounded shadow-lg p-5 mt-1"
      >
        <label className="font-semibold text-xs" htmlFor="usernameField">
          First Name
        </label>
        <input
          onChange={handleInputChange}
          className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="text"
          name="first_name"
          defaultValue={
            crudState === CrudStateEnum.EDIT_CONTACT
              ? clickedContactData.first_name
              : ""
          }
        />
        <label className="font-semibold text-xs mt-3" htmlFor="passwordField">
          Last Name
        </label>
        <input
          defaultValue={
            crudState === CrudStateEnum.EDIT_CONTACT
              ? clickedContactData.last_name
              : ""
          }
          onChange={handleInputChange}
          className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="text"
          name="last_name"
        />

        <div className="mb-4 ">
          <label className="block text-gray-700  mb-2 font-semibold text-xs mt-3">
            Status
          </label>
          <div className="flex  justify-center items-center">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
                name="radio"
                value={ContactStatusEnum.ACTIVE}
                checked={
                  radioValue === ContactStatusEnum.ACTIVE ||
                  clickedContactData.contact_status === ContactStatusEnum.ACTIVE
                }
                onChange={handleRadioChange}
              />
              <span className="ml-2 text-gray-700">Active</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
                name="radio"
                value={ContactStatusEnum.INACTIVE}
                checked={
                  radioValue === ContactStatusEnum.INACTIVE ||
                  clickedContactData.contact_status ===
                    ContactStatusEnum.INACTIVE
                }
                onChange={handleRadioChange}
              />
              <span className="ml-2 text-gray-700">Inactive</span>
            </label>
          </div>
        </div>
        <button
          className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {crudState === CrudStateEnum.CREATE_CONTACT
            ? "Save Contact"
            : "Save Edited Contact"}
        </button>
      </form>
    </>
  );
};

export default Form;
