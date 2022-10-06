import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { FC } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  borderJoinStyle: "round",
};

type SimpleAreaParams = { labels: string[]; data: number[] };
const SimpleAreaChart: FC<SimpleAreaParams> = ({ labels, data }) => {
  const dataset = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Queries",
        data,
        borderColor: "#007EFF",
        borderWidth: 1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
        ],
        tension: 0.1,
        pointBorderColor: "#2F303A",
      },
    ],
  };

  return <Line options={options} data={dataset} />;
};

export default SimpleAreaChart;
