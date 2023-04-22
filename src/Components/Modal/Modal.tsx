import { AnimatePresence, motion } from "framer-motion";
import { CrudStateEnum } from "../../Enums/CrudStateEnum";
import { AppModalTypes } from "../../types/AppModalTypes";
import Form from "../Form/Form";

const Modal = ({
  isModalOpen,
  closeModal,
  modalTitle,
  changeCrudState,
}: AppModalTypes) => {
  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div
              className="fixed inset-0 bg-gray-800 opacity-75"
              onClick={() => {
                closeModal();
                changeCrudState(CrudStateEnum.NONE);
              }}
            ></div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-6 max-w-md mx-auto z-50"
            >
              <h2 className="text-lg font-bold">{modalTitle}</h2>
              <Form />
              <button
                className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
                onClick={() => {
                  closeModal();
                  changeCrudState(CrudStateEnum.NONE);
                }}
              >
                Close Modal
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
