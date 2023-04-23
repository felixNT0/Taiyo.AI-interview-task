import { ToastContainer } from "react-toastify";

function PopUpNotification() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}

export default PopUpNotification;
