import { faker } from '@faker-js/faker';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { QueriesType } from 'store';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
  // scales: {
  //   x: {
  //     display: false, //this will remove only the label
  //   },
  // },
};

const labels = ['Query 1', 'Query 2', 'Query 3', 'April', 'May', 'June', 'July'];

export const localData = {
  labels,
  datasets: [
    {
      label: 'CPU',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Timestamp',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
    // {
    //   label: 'Session',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 1)',
    // },
    // {
    //   label: 'Runtime',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 205, 0.2)',
    // },
  ],
};

type Params = { data: QueriesType[] };
const VerticalBarChart: FC<Params> = ({ data }) => {
  const labels = data.map(item => item.rows_sent);
  const arrayData = data.map(item => parseFloat(item.query_time));
  const dataset = {
    labels,
    datasets: [
      {
        label: 'All Queries',
        data: arrayData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(201, 203, 207, 0.5)',
        ],
      },
    ],
  };

  return <Bar options={options} data={dataset} />;
};

export default VerticalBarChart;
