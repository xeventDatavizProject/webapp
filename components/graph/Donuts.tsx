import { BarElement, CategoryScale, Chart as ChartJS, ChartData, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { FC, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import REQUESTDATA from './mock-request-list';
import { Request } from "./request";


const options = {
  plugins: {
    legend: {
      display: true,
    },
  },
};

const Donuts: FC = () => {
  const [requestData, setData] = useState<Request[]>([])

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const selectQuery =(checkTypeByUser:string[])=>{
     const query:[] = [];
     REQUESTDATA.forEach(element=>{
       checkTypeByUser.forEach( type=>{
        if (element.query.includes(type)){
          query.push(element);
       }
       })
     })
     return query
  }
  const checkTypeByUser = ["select", "update", "delete", "show", "Alter"]
  console.log(selectQuery(checkTypeByUser));
useEffect(()=>{
  setData(REQUESTDATA)
},[]);

  const generateChartData = (): ChartData => {
    const data: number[] = [];
    const labels: string[] = [];

    REQUESTDATA.map((country) => {
      data.push(country.times_called);
      labels.push(country.query);
    });

    return {
      labels,
      datasets: [
        {
          label: "New Confirmed",
          data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div>
     <Bar type="bar" data={generateChartData()} options={options} />

    </div>
    );
};

export default Donuts;
