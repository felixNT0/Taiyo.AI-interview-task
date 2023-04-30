import { useAppContext } from "../../Contexts/useAppContext";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

//App Layout Container

function LayoutContainer({ children }: any) {
  const { showOtherSideBar } = useAppContext();
  return (
    <>
      <NavBar />
      <div className="flex">
        <div
          className={`${
            showOtherSideBar
              ? "w-[320px] max-[900px]:fixed top-0 left-0 z-[1001] h-screen"
              : ""
          } `}
        >
          <SideBar />
        </div>
        <div className={"flex-1 p-6 mt-[70px]"}>{children}</div>
      </div>
    </>
  );
}

export default LayoutContainer;
