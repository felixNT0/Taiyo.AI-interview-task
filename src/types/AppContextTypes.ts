import { AppPageEnum } from "../Enums/AppPageEnum";
import { CrudStateEnum } from "../Enums/CrudStateEnum";
import { NotificationEnum } from "../Enums/NotificationEnum";
import { ContactTypes } from "./ContactTypes";

export type AppContextTypes = {
  changeActiveTab: (value: AppPageEnum) => void;
  toggleModal: () => void;
  changeCrudState: (value: CrudStateEnum) => void;
  clickedContactFuntion: (value: ContactTypes) => void;
  toggleSidebar: () => void;
  searchForContact: (value: string) => void;
  searchBySelectFilter: (value: string) => void;
  selectedFilterValue: string;
  searchContactsValue: string;
  clickedContactData: ContactTypes;
  crudState: CrudStateEnum;
  currentTab: AppPageEnum;
  showOtherSideBar: boolean;
  modalState: boolean;
};
