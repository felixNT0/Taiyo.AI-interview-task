import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

//App Layout Container

function LayoutContainer({ children }: any) {
  return (
    <>
      <NavBar />
      <SideBar />
      <div>{children}</div>
    </>
  );
}

export default LayoutContainer;
