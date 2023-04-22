import { createContext, useContext, useState } from "react";
import { AppPageEnum } from "../Enums/AppPageEnum";
import { CrudStateEnum } from "../Enums/CrudStateEnum";
import { AppContextTypes } from "../types/AppContextTypes";
import { ContactTypes } from "../types/ContactTypes";

const clickedContactVariable = {
  first_name: "",
  last_name: "",
  id: "",
  contact_status: "",
};

export const AppContext = createContext<AppContextTypes>({
  changeActiveTab: () => {},
  toggleShowOtherSideBar: () => {},
  toggleModal: () => {},
  changeCrudState: () => {},
  clickedContactFuntion: () => {},
  toggleSidebar: () => {},
  searchForContact: () => {},
  searchBySelectFilter: () => {},
  selectedFilterValue: "",
  searchContactsValue: "",
  clickedContactData: clickedContactVariable,
  currentTab: AppPageEnum.CONTACT_LIST_PAGE,
  crudState: CrudStateEnum.NONE,
  showOtherSideBar: false,
  modalState: false,
  loading: false,
});

const AppContextProvider = ({ children }: any) => {
  const [currentTab, setCurrentTab] = useState<AppPageEnum>(
    AppPageEnum.CONTACT_LIST_PAGE
  );
  const [searchContactsValue, setSearchContactsValue] = useState("");
  const [crudState, setCrudState] = useState<CrudStateEnum>(CrudStateEnum.NONE);
  const [clickedContactData, setClickedContactData] = useState<ContactTypes>(
    clickedContactVariable
  );
  const [showOtherSideBar, setShowOtherSideBar] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const [selectedFilterValue, setSelectedFilterValue] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const toggleModal = () => {
    setModalState(!modalState);
  };

  const toggleShowOtherSideBar = () => {
    setShowOtherSideBar(!showOtherSideBar);
  };

  const changeActiveTab = (tab: AppPageEnum) => {
    setCurrentTab(tab);
  };

  const changeCrudState = (crudStateValue: CrudStateEnum) => {
    setCrudState(crudStateValue);
  };

  const clickedContactFuntion = (clickedValue: ContactTypes) => {
    setClickedContactData(clickedValue);
  };

  const searchForContact = (value: string) => {
    setSearchContactsValue(value);
  };

  const searchBySelectFilter = (value: string) => {
    setSelectedFilterValue(value);
  };

  const toggleSidebar = () => {
    const sidebar = (document.querySelector(".sidebar") as HTMLElement) || null;
    sidebar.classList.toggle("hidden");
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        currentTab,
        modalState,
        crudState,
        toggleSidebar,
        toggleModal,
        selectedFilterValue,
        searchBySelectFilter,
        changeCrudState,
        changeActiveTab,
        showOtherSideBar,
        searchContactsValue,
        searchForContact,
        clickedContactData,
        clickedContactFuntion,
        toggleShowOtherSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
