import { CrudStateEnum } from "../Enums/CrudStateEnum";

export type AppModalTypes = {
  isModalOpen: boolean;
  closeModal: () => void;
  modalTitle: string;
  changeCrudState: (value: CrudStateEnum) => void;
};
