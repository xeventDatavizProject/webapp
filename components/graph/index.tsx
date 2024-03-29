import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import { FC, useState } from 'react';
import { Bar, Chart, Doughnut, Line, Pie } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [20, 10, 20, 40, 35],
      test: 'OK',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

type graphTypes = 'chart' | 'pie' | 'bar' | 'line' | 'doughnut';

type allGraphTypes = {
  [key in graphTypes]: JSX.Element;
};

const Graph: FC = () => {
  const [currentGraph, setCurrentGraph] = useState<graphTypes>('chart');
  const allGraph: allGraphTypes = {
    chart: <Chart className='bg-white p-6 rounded-lg' options={options} data={data} type='bar'/>,
    pie: <Pie options={options} data={data}/>,
    bar: <Bar className='bg-white p-6 rounded-lg' options={options} data={data} />,
    line: <Line className='bg-white p-6 rounded-lg' options={options} data={data} />,
    doughnut: <Doughnut options={options} data={data}/>,
  };

  return (
    <section className='container w-full flex '>
      <ul  style={{cursor:'pointer'}} className='bg-blackish-primary px-4 py-8'>
        <li  onClick={() => setCurrentGraph('chart')}>Chart</li>
        <li  onClick={() => setCurrentGraph('pie')}>Pie</li>
        <li  onClick={() => setCurrentGraph('bar')}>Bar</li>
        <li onClick={() => setCurrentGraph('line')}>Line</li>
        <li onClick={() => setCurrentGraph('doughnut')}>Doughnut</li>
      </ul>
      <div className='ml-24' style={{width:600}}>{allGraph[currentGraph]}</div>
    </section>
  );
};
export default Graph;
