import { useAppContext } from "../../Contexts/useAppContext";
import { AppPageEnum } from "../../Enums/AppPageEnum";
import { ContactStatusEnum } from "../../Enums/ContactStatusEnums";

//App Side Bar

function SideBar() {
  //getting the app context from the application both the function and the variables

  const {
    changeActiveTab,
    currentTab,
    toggleSidebar,
    searchForContact,
    searchBySelectFilter,
    searchContactsValue,
    selectedFilterValue,
  } = useAppContext();

  return (
    <>
      <div className="sidebar fixed z-50 top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-person-fill px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Contact List
            </h1>
            <p
              className="cursor-pointer text-[30px] text-white ml-28 "
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
            onFocus={() => searchForContact("")}
            className=" shadow-lg outline-none rounded px-1 py-1 cursor-pointer w-[150px]"
            name="filter select"
            value={searchContactsValue ? " " : selectedFilterValue}
            onChange={(e) => searchBySelectFilter(e.target.value)}
          >
            <option value="" disabled>
              Filter
            </option>
            <option value={ContactStatusEnum.ACTIVE}>Active</option>
            <option value={ContactStatusEnum.INACTIVE}>Inactive</option>
          </select>
        </div>
        <div
          onClick={() => changeActiveTab(AppPageEnum.CONTACT_LIST_PAGE)}
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${
            currentTab === AppPageEnum.CONTACT_LIST_PAGE ? "bg-blue-600" : ""
          } hover:bg-blue-600 text-white`}
        >
          <i className="bi bi-person-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Contact
          </span>
        </div>
        <div
          onClick={() => changeActiveTab(AppPageEnum.CHART_AND_MAP_PAGE)}
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${
            currentTab === AppPageEnum.CHART_AND_MAP_PAGE ? "bg-blue-600" : ""
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
