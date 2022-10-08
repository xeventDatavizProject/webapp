import {
  ArcElement,
  Chart as ChartJS, Legend,
  RadialLinearScale,
  Tooltip
} from "chart.js";
import { Paragraph, Title } from "components/common/Typography";
import { FC } from "react";
import { QueriesType } from "store";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

type ErrorQueriesParams = {
  data: QueriesType[];
};

const ErrorLogs: FC<ErrorQueriesParams> = ({ data }) => {
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
          {data.map((item, idx) => {
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
      </div>
    </div>
  );
};

export default ErrorLogs;
