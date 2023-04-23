import { useState } from "react";
import LayoutContainer from "../../Components/Layout/Layout";
import CovidMap from "../../Components/Map/Map";
import { LineGraph } from "../../Components/LineGraph/LineGraph";

function GraphChartAndMapPage() {
  const [radioValue, setRadioValue] = useState("Graph");

  const handleRadioChange = (event: any) => {
    setRadioValue(event.target.value);
  };
  return (
    <LayoutContainer>
      <div className="text-center">
        <div className="mb-4 ">
          <label className="block text-gray-700  mb-2 font-semibold text-lg">
            Pick Either to show Graph or Map
          </label>
          <div className="flex  justify-center items-center">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
                name="radio"
                value={"Graph"}
                checked={radioValue === "Graph"}
                onChange={handleRadioChange}
              />
              <span className="ml-2 text-gray-700">Graph</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-gray-600 cursor-pointer"
                name="radio"
                value={"Map"}
                checked={radioValue === "Map"}
                onChange={handleRadioChange}
              />
              <span className="ml-2 text-gray-700">Map</span>
            </label>
          </div>
        </div>
        {radioValue === "Graph" && <LineGraph />}
        {radioValue === "Map" && <CovidMap />}
      </div>
    </LayoutContainer>
  );
}

export default GraphChartAndMapPage;
