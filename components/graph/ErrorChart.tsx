import { Chart as ChartJS, ChartData, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { FC, useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import ErrorLog from './Mock-error-list';

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ErrorLogs: FC = () => {
  const data: Date[] = [];
  const labels: string[] = [];

  const [errorLog, setErrorLog] = useState([])

  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
  useEffect(()=>{
    setErrorLog(errorLog)
},[errorLog])

  const generateErrorLog = (): ChartData<"scatter"> => {
   ErrorLog.map((error) => {
      data.push(error.date_hour);
      labels.push(error.query);
    });
    return {
      labels,
      datasets: [
        {
          label: "New Confirmed",
          data: ErrorLog.map( (error) => ({
            x: data.push(error.date_hour),
            y: labels.push(error.query),
          })),
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',


          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className='flex flex-row'>
    <div className=' w-11/12'>
     <Scatter data={generateErrorLog()} options={options}/>
    </div>
    </div>
    );
};

export default ErrorLogs;
