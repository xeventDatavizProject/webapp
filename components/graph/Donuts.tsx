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

  const findQuery= (REQUESTDATA: Request[], key: string) =>{
    let query: [] = [];
    REQUESTDATA.forEach((x:any)=>{
      if(query.some((val)=>{ return val[key] == x[key] })){
      query.forEach((k)=>{
        if(k[key] === x[key]){
        k["occurrence"]++
        }
      })

      }else{
      let a = {}
      a[key] = x[key]
      a["occurrence"] = 1
      query.push(a);
      }
    })

    return query
    }
    let key = "query"
useEffect(()=>{
  setData(findQuery(REQUESTDATA, key))
  console.log(findQuery(REQUESTDATA, key));
},[])

  const generateChartData = (): ChartData => {
    const data: number[] = [];
    const labels: string[] = [];

    requestData.map((country) => {
      data.push(country.occurrence);
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
