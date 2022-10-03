import { BarElement, CategoryScale, Chart as ChartJS, ChartData, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import Input from 'components/common/Input/Input';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import REQUESTDATA from './mock-request-list';


interface performancesListProps {
  data: boolean;
  labels: boolean;
  setSelect: Dispatch<SetStateAction<any>>;

}

const options = {
  plugins: {
    legend: {
      display: true,
    },
  },
};

const Donuts: FC<performancesListProps> = ({setSelect}) => {

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  const [requestData, setData] = useState<any>()
  const [selected, setSelected] = useState<boolean>(true)
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
 const list: string[] = []
let selectList: any[];
let data: number[] = [];
let labels: string[] = [];

const generateChartData = (): ChartData<"bar"> => {
  list.push("select")
  selectList = selectQuery(list)
  selectList.map((x) => {
    data.push(x.times_called);
    labels.push(x.query)
  })
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
useEffect(()=>{
  return setSelected(<Bar data={generateChartData()} options={options} />);
},[selected]);

  return (
    <div>
     <div className='w-56 mx-1 h-1/3 mt-1 shadow-lg rounded-lg p-4 z-[99999999]   border-zinc-800'>
            <div className='flex-grow z-20  font-mono tracking-widest text-xs mb-5'>hide/show Query types</div>
            <Input.Checkbox
                label='select'
                id='select-toggle'
                value='select'
                className='peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600'
                onChange= {()=>setSelected(!selected)}
            />
</div>
    </div>
    );
};
export default Donuts;

