import {
  ArcElement,
  Chart as ChartJS,
  ChartData,
  Legend,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Title } from "components/common/Typography";
import { FC, useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";
import ErrorLog from "./Mock-error-list";

const ErrorLogs: FC = () => {
  const data: Date[] = [];
  const labels: string[] = [];

  const [errorLog, setErrorLog] = useState([]);

  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
  useEffect(() => {
    setErrorLog(errorLog);
  }, [errorLog]);

  const generateErrorLog = (): ChartData<"polarArea"> => {
    ErrorLog.map((error) => {
      data.push(error.date_hour);
      labels.push(error.query);
    });
    return {
      labels,
      datasets: [
        {
          label: "New Confirmed",
          data,
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="card w-full">
      <div className="card__content">
        <Title as="h2" size="subtitle" className="mb-4">
          Error logs
        </Title>
        <PolarArea data={generateErrorLog()} />
      </div>
    </div>
  );
};

export default ErrorLogs;
