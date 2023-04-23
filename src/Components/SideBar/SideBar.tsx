import {
  defaultContactVariable,
  useAppContext,
} from "../../Contexts/useAppContext";
import { ContactStatusEnum } from "../../Enums/ContactStatusEnums";
import { useLocation, useNavigate } from "react-router-dom";

//App Side Bar

function SideBar() {
  //getting the app context from the application both the function and the variables

  const {
    toggleSidebar,
    searchForContact,
    searchBySelectFilter,
    searchContactsValue,
    selectedFilterValue,
    clickedContactFuntion,
  } = useAppContext();

  const location = useLocation();

  const navigate = useNavigate();

  return (
    <>
      <div className="sidebar fixed p-2 h-full overflow-y-auto text-center z-50 bg-gray-900 duration-500">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-person-fill px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-gray-200 max-sm:text-[11px] text-[15px] ml-3">
              Contact List
            </h1>
            <p
              className="cursor-pointer max-sm:text-[30px] text-3xl text-white max-sm:ml-15 ml-[8rem] "
              onClick={toggleSidebar}
            >
              &times;
            </p>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="bi bi-search text-sm"></i>
          <input
            disabled={location.pathname !== "/"}
            onFocus={() => searchBySelectFilter("")}
            onChange={(e) => searchForContact(e.target.value)}
            type="text"
            value={selectedFilterValue ? " " : searchContactsValue}
            placeholder="Search..."
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="mt-3 ">
          <label className="block text-white text-1.5xl  mb-2 font-bold  mt-3">
            Filter Contact
          </label>
          <select
            disabled={location.pathname !== "/"}
            onFocus={() => searchForContact("")}
            className=" shadow-lg outline-none rounded px-1 py-1 cursor-pointer w-[150px]"
            name="filter select"
            value={searchContactsValue ? " " : selectedFilterValue}
            onChange={(e) => searchBySelectFilter(e.target.value)}
          >
            <option value="" disabled>
              Status
            </option>
            <option value={"all"}>All</option>
            <option value={ContactStatusEnum.ACTIVE}>Active</option>
            <option value={ContactStatusEnum.INACTIVE}>Inactive</option>
          </select>
        </div>
        <div
          onClick={() => {
            navigate("/");
            clickedContactFuntion(defaultContactVariable);
          }}
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${
            location.pathname === "/" ? "bg-blue-600" : ""
          } hover:bg-blue-600 text-white`}
        >
          <i className="bi bi-person-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Contact
          </span>
        </div>
        <div
          onClick={() => {
            navigate("/graph-and-map");
            clickedContactFuntion(defaultContactVariable);
          }}
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${
            location.pathname === "/graph-and-map" ? "bg-blue-600" : ""
          } hover:bg-blue-600 text-white`}
        >
          <i className="bi bi-map-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Charts and Maps
          </span>
        </div>
      </div>
    </>
  );
}

export default SideBar;
