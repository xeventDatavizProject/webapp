import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { FC } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
    },
  },
  scales: {
    x: {
      display: false,
    },
  },
};

type VerticalBarParams = { labels: string[]; data: number[] };
const VerticalBarChart: FC<VerticalBarParams> = ({ labels, data }) => {
  const dataset = {
    labels,
    datasets: [
      {
        label: "Time in seconds",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(201, 203, 207, 0.5)",
        ],
      },
    ],
  };

  return <Bar options={options} data={dataset} />;
};

export default VerticalBarChart;
