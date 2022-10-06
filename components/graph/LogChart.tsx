import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import Input from "components/common/Input/Input";
import { FC, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const options = {
  plugins: {
    legend: {
      display: true,
    },
  },
};

type logType = {
  query: string;
  time_called: number;
};

interface logsType {
  logs: logType[];
}

const Donuts: FC<logsType> = ({ logs }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  let selectList: any[];
  let data: number[] = [];
  let labels: string[] = [];
  const query: any[] = [];

  const [checkedValue, setCheckedValue] = useState([
    "select",
    "show",
    "delete",
    "update",
    "alter",
    "insert",
  ]);

  const selectQuery = (queries: string[]) => {
    logs.forEach((log) => {
      queries.forEach((type) => {
        if (log.query.includes(type)) {
          query.push(log);
        }
      });
    });
    return query;
  };

  const CheckHandler = (e: any) => {
    const value = e.target.value;
    setCheckedValue((prev: any) =>
      checkedValue.includes(value as never)
        ? prev.filter((current: string) => current !== value)
        : [...prev, e.target.value]
    );
  };

  const generateChartData = (): ChartData<"bar"> => {
    selectList = selectQuery(checkedValue);
    selectList.map((x) => {
      data.push(x.time_called);
      labels.push(x.query);
    });

    useEffect(() => {
      console.log(checkedValue);
    }, [checkedValue]);

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
    <div className="flex flex-row">
      <div className=" w-11/12">
        <Bar data={generateChartData()} options={options} />
      </div>
      <div className="">
        <span className="w-1/12 z-20 font-mono tracking-widest text-xs mb-5 inline-block">
          hide/show Query types
        </span>
        <div className=" space-y-4">
          <Input.Checkbox
            label="select"
            id="select"
            value="select"
            className="peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
            onClick={CheckHandler}
          />
          <Input.Checkbox
            label="show"
            id="show"
            value="show"
            className="peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-green-600"
            onClick={CheckHandler}
          />
          <Input.Checkbox
            label="delete"
            id="delete"
            value="delete"
            className="peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-red-500"
            onClick={CheckHandler}
          />
          <Input.Checkbox
            label="alter"
            id="alter"
            value="alter"
            className="peer-focus:ring-red-400 dark:peer-focus:ring-orange-900 peer-checked:bg-yellow-500"
            onClick={CheckHandler}
          />
          <Input.Checkbox
            label="update"
            id="update"
            value="update"
            className="peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500"
            onClick={CheckHandler}
          />

          <Input.Checkbox
            label="insert"
            id="insert"
            value="insert"
            className="peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-brown-600"
            onClick={CheckHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default Donuts;
