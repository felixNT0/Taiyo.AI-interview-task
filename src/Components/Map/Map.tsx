import "leaflet/dist/leaflet.css";
import { useState } from "react";

function CovidMap() {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country: any, layer: any) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    layer.bindPopup(`${name} ${confirmedText}`);
  };

  const [countries, setCountries] = useState([]);

  //  const legendItemsReverse = [...legendItems].reverse();

  //  const load = () => {
  //    console.log("load");
  //    const loadCountriesTask = new LoadCountriesTask();
  //    loadCountriesTask.load((countries) => setCountries(countries));
  //  };

  //  useEffect(load, []);

  return (
    <></>
    // <Map style={{ height: "90vh" }} zoom={2} center={[20, 60]}>
    //   <GeoJSON
    //     style={mapStyle}
    //     data={countries}
    //     onEachFeature={onEachCountry}
    //   />
    // </Map>
  );
}

export default CovidMap;
