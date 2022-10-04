import { faker } from '@faker-js/faker';
import { CategoryScale, Chart as ChartJS, Filler, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { FC } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Pic utilisations',
    },
  },
};

const labels = ['0h', '3h', '6h', '9h', '12h', '15h', '18h', '21h'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.3)',
    },
  ],
};

const SimpleAreaChart: FC = () => {
  return <Line options={options} data={data} /> //&&
  //<Bar options={options} data={data} />;
};

export default SimpleAreaChart;
