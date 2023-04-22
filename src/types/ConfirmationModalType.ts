export type ConfirmationModalType = {
  isModalOpen: boolean;
  closeModal: () => void;
  confirmationFn: any;
  modalTitle: string;
};
