import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js';
import { FC, useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const data = {
  labels: ['CPU', 'Timestamp', 'Session', 'Runtime', 'Users', 'Database'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      pointBorderColor: 'red',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    r: {
      grid: {
        lineWidth: 1,
        color: 'white',
      },
      angleLines: {
        lineWidth: 2,
      },
      gridLines: {
        display: true,
      },
      ticks: {
        display: false,
        maxTicksLimit: 10,
      },
    },
  },
};

interface performancesListProps {
  cpu?: boolean;
  timestamp?: boolean;
}

interface perfObject {
  isActive: boolean;
  name: string;
}

interface listOfPerfProps {
  list: perfObject[];
}

const RadarChart: FC<performancesListProps> = ({ cpu, timestamp }) => {
  const [state, setState] = useState(data.labels);
  const [updatedData, setUpdatedData] = useState<any>(<Radar data={data} options={options} />);

  let indexCpu = data.labels.indexOf('CPU');
  let indexTimestamp = data.labels.indexOf('Timestamp');

  useEffect(() => {
    if (indexCpu !== -1 && cpu === false) {
      let result = data.labels.splice(indexCpu, 1);
      let difference = data.labels.filter(x => !result.includes(x));
      console.log(difference);
      setUpdatedData(<Radar data={{ labels: difference, datasets: data.datasets }} options={options} />);
    }
    if (cpu === true) {
      if (!data.labels.includes('CPU')) {
        let add = data.labels.push('CPU');
        console.log(data.labels);
        setUpdatedData(<Radar data={{ labels: data.labels, datasets: data.datasets }} options={options} />);
      }
    }
  }, [cpu, timestamp]);

  useEffect(() => {
    if (indexTimestamp !== -1 && timestamp === false) {
      let result = data.labels.splice(indexTimestamp, 1);
      let difference = data.labels.filter(x => !result.includes(x));
      console.log(difference);
      setUpdatedData(<Radar data={{ labels: difference, datasets: data.datasets }} options={options} />);
    }
    if (timestamp === true) {
      if (!data.labels.includes('Timestamp')) {
        data.labels.push('Timestamp');
        console.log(data.labels);
        setUpdatedData(<Radar data={{ labels: data.labels, datasets: data.datasets }} options={options} />);
      }
    }
  }, [timestamp, cpu]);

  return updatedData;
};

export default RadarChart;
