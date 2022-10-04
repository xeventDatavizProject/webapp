import { faker } from '@faker-js/faker';
import { CategoryScale, Chart as ChartJS, Filler, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { QueriesType } from 'store';

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

const labels = ['8h', '9h', '10h', '9h', '12h', '15h', '18h', '21h'];

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

type SimpleAreaParams = { data: QueriesType[] };
const SimpleAreaChart: FC<SimpleAreaParams> = ({ data }) => {
  const numberOcc: { [key: string]: number } = {};
  const arrayData = data.map(item => {
    const date = new Date(item.timestamp);

    const hours = date.getHours();

    if (hours in numberOcc) {
      numberOcc[hours] += 1;
    } else {
      numberOcc[hours] = 1;
    }
  });
  const labels = Object.keys(numberOcc).map(hour => {
    const convertHour = parseInt(hour);
    return `${convertHour}h - ${convertHour + 1}h`;
  });

  const dataset = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: Object.values(numberOcc),
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

  // console.log(arrayData);

  return <Line options={options} data={dataset} />; //&&
};

export default SimpleAreaChart;
