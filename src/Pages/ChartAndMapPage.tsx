import LayoutContainer from "../Components/Layout/Layout";

function ChartAndMapPage() {
  return (
    <LayoutContainer>
      <div className="text-center">
        <button
          // onClick={toggleModal}
          className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 mt-5"
        >
          Chart And Map Page
        </button>
        <div className="text-center">ChartAndMapPage</div>
      </div>
    </LayoutContainer>
  );
}

export default ChartAndMapPage;
