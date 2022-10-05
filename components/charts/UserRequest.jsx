import { faker } from '@faker-js/faker';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dataQueries = [
  {
    id: '17782UNI',
    query: 'select * from MOCK_DATA',
    database_user: 'root',
    database_user_id: '29',
    date_hour: '2022-09-25T20:52:52.794897Z',
    timestamp: '1664139172',
    query_time: '0.000474',
    rows_sent: 100,
    rows_examined: 100,
    end_point: {
      url: 'api/{user_id}/all_queries',
      method: 'GET',
      time: 1664055794211,
    },
  },
  {
    id: '17782UZI',
    query: "select * from MOCK_DATA where gender='Female'",
    database_user: 'root',
    database_user_id: '29',
    date_hour: '2022-09-25T20:52:52.794897Z',
    timestamp: '1664139172',
    query_time: '0.002682',
    rows_sent: 53,
    rows_examined: 100,
    end_point: {
      url: 'api/{user_id}/all_queries',
      method: 'GET',
      time: 1664055794211,
    },
  },
];

const data = {
  labels: dataQueries.map(query => query.query),
  datasets: [
    {
      label: 'Requests by user',
      data: dataQueries.map(query => query.query_time),
      fill: true,
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(75, 192, 192)',
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  type: 'bar',
  data,
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

let UserRequest = () => {
  return <Bar options={options} data={data} />;
};

export default UserRequest;
