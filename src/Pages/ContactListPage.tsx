import { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "..//libs/Redux/Stores/store";
import LayoutContainer from "../Components/Layout/Layout";
import Modal from "../Components/Modal/Modal";
import NoContactLIstData from "../Components/NoContact/NoContactLIstData";
import NoContactErrorMessage from "../Components/NoContactErrorMessage/NoContactErrorMessage";
import { useAppContext } from "../Contexts/useAppContext";
import { CrudStateEnum } from "../Enums/CrudStateEnum";
import { ContactTypes } from "../types/ContactTypes";
import ContactCard from "../Components/ContactCard/ContactCard";

function ContactListPage() {
  const {
    modalState,
    toggleModal,
    changeCrudState,
    crudState,
    searchContactsValue,
    selectedFilterValue,
  } = useAppContext();

  const contactsData = useSelector((state: RootState) => state.contacts.value);

  let isSearchErrorMessage = false;

  const data = useCallback(() => {
    let result: ContactTypes[] = [];

    if (selectedFilterValue) {
      const selectedContacts = (contactsData || []).filter((contact) =>
        contact.contact_status
          .toLowerCase()
          .includes(selectedFilterValue.toLowerCase())
      );
      result = selectedContacts;
    } else if (searchContactsValue) {
      const searchedContacts = contactsData.filter(
        (contact) =>
          contact.first_name
            .toLowerCase()
            .includes(searchContactsValue.toLowerCase()) ||
          contact.last_name
            .toLowerCase()
            .includes(searchContactsValue.toLowerCase())
      );
      result = searchedContacts;
      if (result.length === 0) {
        isSearchErrorMessage = true;
      }
    } else {
      result = contactsData;
    }

    return { result };
  }, [selectedFilterValue, searchContactsValue, contactsData]);



  return (
    <>
      <LayoutContainer>
        <div className="text-center">
          <button
            onClick={() => {
              toggleModal();
              changeCrudState(CrudStateEnum.CREATE_CONTACT);
            }}
            className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 mt-[100px]"
          >
            Create Contact
          </button>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-1 px-12 mt-[100px]">
            {data()?.result?.map((contact: ContactTypes, index: number) => (
              <ContactCard
                key={contact.id}
                first_name={contact.first_name}
                last_name={contact.last_name}
                id={contact.id}
                contact_status={contact.contact_status}
                contact_index={index + 1}
              />
            ))}
          </div>

          {crudState === CrudStateEnum.CREATE_CONTACT ? (
            <Modal
              isModalOpen={modalState}
              closeModal={toggleModal}
              modalTitle="Create Contact"
              changeCrudState={changeCrudState}
            />
          ) : null}

          {contactsData.length === 0 ? <NoContactLIstData /> : null}

          {isSearchErrorMessage ? <NoContactErrorMessage /> : null}
        </div>
      </LayoutContainer>
    </>
  );
}

export default ContactListPage;