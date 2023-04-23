import axios from "axios";

export const fetchDataByCountry = async () => {
  const response = await axios.get("https://disease.sh/v3/covid-19/countries");
  return response.data;
};

export const QUERY_KEY_DATA_BY_COUNTRY = "QUERY_KEY_DATA_BY_COUNTRY";
