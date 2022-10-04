import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { NextPage } from 'next';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['red', 'yellow', 'green', 'purple', 'orange', 'blue', 'July'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const ChartsDoughnut: NextPage = () => {
  return (
    <div className='bg-white p-6  rounded-lg' style={{ width: 700 }}>
      <Doughnut data={data} />
    </div>
  );
};

export default ChartsDoughnut;
