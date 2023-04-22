import { useAppContext } from "../../Contexts/useAppContext";
import { AllAppPages } from "../../util/AllAppPages";

//App Navigation Bar

function NavBar() {
  const { currentTab, toggleSidebar } = useAppContext();

  return (
    <div
      className={`flex justify-center items-center z-10 w-full h-20 px-4 text-white bg-gray-900 fixed mb-[500px]`}
    >
      <div>
        <span
          className="absolute text-white  text-4xl top-5 left-4 cursor-pointer"
          onClick={toggleSidebar}
        >
          <p className="cursor-pointer  text-white ">&#9776;</p>
        </span>
      </div>
      <div>
        <h1
          className="text-5xl ml-2 cursor-pointer "
          // onClick={toggleShowOtherSideBar}
        >
          {AllAppPages(currentTab).page_name}
        </h1>
      </div>
    </div>
  );
}

export default NavBar;
