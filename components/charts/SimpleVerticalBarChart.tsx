import { faker } from '@faker-js/faker';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Pic de requettes',
    },
  },
};

const labels = ['0h', '3h', '6h', '9h', '12h', '15h', '18h', '21h'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Requettes',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 1)',
    },
  ],
};

const SimpleVerticalBarChart: FC = () => {
  return <Bar options={options} data={data} />;
};

export default SimpleVerticalBarChart;
