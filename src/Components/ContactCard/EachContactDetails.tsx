import randomColor from "randomcolor";
import { useAppContext } from "../../Contexts/useAppContext";
import { ContactStatusEnum } from "../../Enums/ContactStatusEnums";
import { CrudStateEnum } from "../../Enums/CrudStateEnum";
import { ContactTypes } from "../../types/ContactTypes";
import { useNavigate } from "react-router-dom";

interface ContactDetailTypes extends ContactTypes {
  openDeleteModal: (value: any) => void;
}
function EachContactDetails({
  first_name,
  last_name,
  contact_status,
  id,
  contact_index,
  openDeleteModal,
}: ContactDetailTypes) {
  const { changeCrudState, toggleModal, clickedContactFuntion } =
    useAppContext();

  const navigate = useNavigate();

  return (
    <div className="bg-gray-100  py-8 px-10 text-center rounded-md shadow-sm transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto cursor-pointer hover:shadow-lg">
      <h2 className="font-semibold text-2xl mb-6">Contact {contact_index}</h2>
      <div
        style={{ backgroundColor: `${randomColor()}` }}
        className={`w-20 h-20 object-cover rounded-full mx-auto shadow-lg flex justify-center items-center  `}
      >
        {first_name.charAt(0)} {last_name.charAt(0)}
      </div>
      <p className="capitalize text-xl mt-3">{first_name}</p>
      <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-5">
        <div
          className={`${
            contact_status === ContactStatusEnum.ACTIVE
              ? "bg-green-500"
              : "bg-red-500"
          } rounded-full w-2.5 h-2.5 block mr-2`}
        ></div>
        {contact_status === ContactStatusEnum.ACTIVE ? "active" : "inactive"}
      </span>
      <div className="flex justify-around items-center text-center mb-5">
        <button
          onClick={() => {
            changeCrudState(CrudStateEnum.EDIT_CONTACT);
            toggleModal();
            clickedContactFuntion({
              first_name: first_name,
              last_name: last_name,
              contact_status: contact_status,
              id: id,
              contact_index: contact_index,
            });
          }}
          className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <i className="bi bi-pencil-square text-sm"></i>
        </button>
        <button
          onClick={openDeleteModal}
          className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <i className="bi bi-trash text-sm"></i>
        </button>
      </div>
      <button
        onClick={() => {
          navigate(`/contact-detail/${id}`);
          clickedContactFuntion({
            first_name: first_name,
            last_name: last_name,
            contact_status: contact_status,
            id: id,
            contact_index: contact_index,
          });
        }}
        className="rounded-md bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-10  focus:outline-none focus:shadow-outline"
      >
        View Contact
      </button>
    </div>
  );
}

export default EachContactDetails;
