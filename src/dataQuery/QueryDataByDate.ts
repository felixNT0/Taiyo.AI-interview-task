import axios from "axios";

export const fetchDataByDate = async () => {
  const response = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return response.data;
};

export const QUERY_KEY_DATA_BY_DATE = "QUERY_KEY_DATA_BY_DATE";
