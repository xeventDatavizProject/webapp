import { FC } from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
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

type VerticalBarParams = { data: ChartData<any> };
const VerticalBarChart: FC<VerticalBarParams> = ({ data }) => {
  return <Bar options={options} data={data} />;
};

export default VerticalBarChart;
