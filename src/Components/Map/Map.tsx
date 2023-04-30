import { useQuery } from "@tanstack/react-query";
import { Icon, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
  QUERY_KEY_DATA_BY_COUNTRY,
  fetchDataByCountry,
} from "../../dataQuery/queryDataByCountry";

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25],
});

function CovidMap() {
  const { data, isLoading } = useQuery(
    [QUERY_KEY_DATA_BY_COUNTRY],
    fetchDataByCountry
  );

  if (!data || isLoading) return <h3>Setting up map</h3>;

  const center: LatLngExpression = [
    data[220].countryInfo.lat,
    data[220].countryInfo.long,
  ];

  return (
    <MapContainer
      zoom={13}
      scrollWheelZoom={false}
      className="h-[575px] ml-1 mr-1"
      center={center}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data?.map((map: any) => (
        <Marker
          key={map.countryInfo._id}
          position={[map?.countryInfo?.lat, map?.countryInfo.long]}
          icon={icon}
        >
          <Popup position={[map?.countryInfo?.lat, map?.countryInfo?.long]}>
            <div className="w-[200px] text-center">
              <div className="flex justify-center items-center">
                <img
                  className="w-10 h-10 p-1 rounded-full "
                  src={map?.countryInfo?.flag}
                  alt="Country Flag"
                />
              </div>
              <p>
                Country Name: <span>{map?.country}</span>
              </p>
              <p>
                Population: <span>{map?.population}</span>
              </p>
              <p>
                Number Of Actives: <span>{map?.active}</span>
              </p>
              <p>
                Number Of Deaths: <span>{map?.deaths}</span>
              </p>
              <p>
                Number Of Recovered: <span>{map?.recovered}</span>
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default CovidMap;
