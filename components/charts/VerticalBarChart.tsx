import { faker } from '@faker-js/faker';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { ChangeEvent, FC, useState } from 'react';
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

type VerticalBarParams = { data: QueriesType[] };
const VerticalBarChart: FC<VerticalBarParams> = ({ data }) => {
  const [currentData, setCurrentData] = useState(data);
  const [queryLong, setQueryLong] = useState('0.5');
  const labels = currentData.map(item => item.rows_sent);
  const arrayData = currentData.map(item => parseFloat(item.query_time));
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
  const updateChart = (e: ChangeEvent<HTMLInputElement>) => {
    const newData = data.filter(item => item.query_time > e.target.value);
    setQueryLong(e.target.value);
    setCurrentData(newData);
  };

  return (
    <div>
      <Bar options={options} data={dataset} />
      <input
        type='number'
        className='input block'
        value={queryLong}
        placeholder='Enter duration'
        step='0.1'
        onChange={e => updateChart(e)}
      />
    </div>
  );
};

export default VerticalBarChart;
