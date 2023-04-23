import { Line } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  QUERY_KEY_DATA_BY_DATE,
  fetchDataByDate,
} from "../../dataQuery/QueryDataByDate";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineGraph() {
  const { data } = useQuery([QUERY_KEY_DATA_BY_DATE], fetchDataByDate);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const labels = ["Start"];

  const datas = {
    labels,
    datasets: [
      {
        label: "Covid-19",
        data: data?.cases,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="h-[575px] text-center ml-1 mr-1 ">
      <Line data={datas} options={options} />
    </div>
  );
}
