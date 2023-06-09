import { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import ContactCard from "../../Components/ContactCard/ContactCard";
import LayoutContainer from "../../Components/Layout/Layout";
import Modal from "../../Components/Modal/Modal";
import NoContactLIstData from "../../Components/NoContact/NoContactLIstData";
import { useAppContext } from "../../Contexts/useAppContext";
import { ContactStatusEnum } from "../../Enums/ContactStatusEnums";
import { CrudStateEnum } from "../../Enums/CrudStateEnum";
import { RootState } from "../../libs/Redux/Stores/store";
import { ContactTypes } from "../../types/ContactTypes";

function ContactListPage() {
  const {
    modalState,
    toggleModal,
    changeCrudState,
    crudState,
    searchContactsValue,
    selectedFilterValue,
  } = useAppContext();

  const storedContactsData = useSelector(
    (state: RootState) => state.contacts.value
  );

  const contactsData = useMemo(
    () => storedContactsData || [],
    [storedContactsData]
  );

  const isSearchErrorMessage = useRef(false);

  const isFilterErrorMessage = useRef(false);

  const result = useRef<ContactTypes[]>([]);

  useMemo(() => {
    if (
      selectedFilterValue === ContactStatusEnum.ACTIVE ||
      selectedFilterValue === ContactStatusEnum.INACTIVE
    ) {
      const selectedContacts = contactsData.filter((contact) =>
        contact.contact_status
          .toLowerCase()
          .includes(selectedFilterValue.toLowerCase())
      );

      result.current = selectedContacts;
      if (selectedContacts.length === 0 && selectedFilterValue) {
        isFilterErrorMessage.current = true;
      } else {
        isFilterErrorMessage.current = false;
      }
    } else if (selectedFilterValue === "all") {
      result.current = contactsData;
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
      result.current = searchedContacts;
      if (searchedContacts.length === 0) {
        isSearchErrorMessage.current = true;
      }
    } else {
      result.current = contactsData;
    }
    return result.current;
  }, [selectedFilterValue, searchContactsValue, contactsData]);

  useEffect(() => {
    setTimeout(() => {
      isSearchErrorMessage.current = false;
      isFilterErrorMessage.current = false;
    }, 1000);
  }, [
    selectedFilterValue,
    searchContactsValue,
    isSearchErrorMessage,
    isFilterErrorMessage,
  ]);

  return (
    <>
      <LayoutContainer>
        <div className="text-center">
          <button
            onClick={() => {
              toggleModal();
              changeCrudState(CrudStateEnum.CREATE_CONTACT);
            }}
            className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-md:mb-1 mb-5 mt-[10px]"
          >
            Create Contact
          </button>

          <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-1  mt-[100px]">
            {result.current?.map((contact: ContactTypes, index: number) => (
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
        </div>
      </LayoutContainer>
    </>
  );
}

export default ContactListPage;
