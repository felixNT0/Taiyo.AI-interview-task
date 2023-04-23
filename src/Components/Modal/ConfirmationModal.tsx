import { AnimatePresence, motion } from "framer-motion";
import { ConfirmationModalType } from "../../types/ConfirmationModalType";

function ConfirmationModal({
  isModalOpen,
  closeModal,
  modalTitle,
  confirmationFn,
}: ConfirmationModalType) {
  return (
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
            onClick={closeModal}
          ></div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 max-w-md mx-auto z-50"
          >
            <h2 className="text-lg max-sm:text-sm font-bold mb-5">
              {modalTitle}
            </h2>
            <div className="flex justify-around items-center text-center mb-5">
              <div className="mr-1">
                <button
                  onClick={closeModal}
                  className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none   focus:shadow-outline"
                >
                  No
                </button>
              </div>
              <div className="ml-1">
                <button
                  onClick={confirmationFn}
                  className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
                >
                  Yes
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ConfirmationModal;
