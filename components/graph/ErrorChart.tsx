import {
  ArcElement,
  Chart as ChartJS,
  ChartData,
  Legend,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Paragraph, Title } from "components/common/Typography";
import { FC, useEffect, useState } from "react";
import ErrorLog from "./Mock-error-list";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
const ErrorLogs: FC = () => {
  // const data: Date[] = [];
  // const labels: string[] = [];
  // const [errorLog, setErrorLog] = useState([]);

  // useEffect(() => {
  //   setErrorLog(errorLog);
  // }, [errorLog]);

  // const generateErrorLog = (): ChartData<"polarArea"> => {
  //   ErrorLog.map((error) => {
  //     data.push(error.date_hour);
  //     labels.push(error.query);
  //   });
  //   return {
  //     labels,
  //     datasets: [
  //       {
  //         label: "New Confirmed",
  //         data,
  //         borderColor: [
  //           "rgba(255, 99, 132, 1)",
  //           "rgba(54, 162, 235, 1)",
  //           "rgba(255, 206, 86, 1)",
  //           "rgba(75, 192, 192, 1)",
  //           "rgba(153, 102, 255, 1)",
  //           "rgba(255, 159, 64, 1)",
  //         ],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.5)",
  //           "rgba(54, 162, 235, 0.5)",
  //           "rgba(255, 206, 86, 0.5)",
  //           "rgba(75, 192, 192, 0.5)",
  //           "rgba(153, 102, 255, 0.5)",
  //           "rgba(255, 159, 64, 0.5)",
  //         ],
  //         borderWidth: 1,
  //       },
  //     ],
  //   };
  // };
  const formatDecimal = (value: any) => {
    return String(value).padStart(2, "0");
  };

  return (
    <div className="card w-full">
      <div className="card__content">
        <Title as="h2" size="subtitle" className="mb-4">
          Error logs
        </Title>
        <ul>
          {ErrorLog.map((item, idx) => {
            const date = new Date(item.date_hour);
            const renderDate = `${formatDecimal(date.getDate())}/
            ${formatDecimal(date.getMonth())}/${date.getFullYear()}`;
            const renderTime = `${date.getHours()}:
            ${formatDecimal(date.getMinutes())}:
            ${date.getSeconds()}`;

            return (
              <li
                className="flex items-center justify-between mb-4 bg-red-200 px-4 py-2 rounded-md"
                key={idx}
              >
                <div className="flex">
                  <Paragraph>{renderDate}</Paragraph>
                  <Paragraph className="ml-2">{renderTime}</Paragraph>
                  <Paragraph className="ml-8 text-red-600 font-semibold">
                    {item.query}
                  </Paragraph>
                </div>
                <div className="text-red-200 bg-red-600 px-2 py-1 rounded-md uppercase text-sm font-semibold">
                  Error
                </div>
              </li>
            );
          })}
        </ul>
        {/* <PolarArea data={generateErrorLog()} /> */}
      </div>
    </div>
  );
};

export default ErrorLogs;
