import { ChangeEvent, FC, useState } from "react";
import VerticalBarChart from "components/charts/VerticalBarChart";
import { Paragraph, Title } from "components/common/Typography";
import { QueriesType } from "store";

type LongRequestsParams = {
  data: QueriesType[];
};

const LongRequests: FC<LongRequestsParams> = ({ data }) => {
  const [currentData, setCurrentData] = useState(data);
  const [queryLong, setQueryLong] = useState("0");
  const labels = currentData.map((item) => item.query);
  const arrayData = currentData
    .map((item) => parseFloat(item.query_time))
    .filter((item) => item > parseFloat(queryLong));
  const dataset = {
    labels,
    datasets: [
      {
        label: "Time in seconds",
        data: arrayData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(201, 203, 207, 0.5)",
        ],
      },
    ],
  };
  const updateChart = (e: ChangeEvent<HTMLInputElement>) => {
    const newData = data.filter((item) => item.query_time > e.target.value);
    setQueryLong(e.target.value);
    setCurrentData(newData);
  };

  return (
    <div className="card w-full">
      <div className="card__content">
        <Title as="h2" size="subtitle" className="mb-4">
          Request too long
        </Title>
        <VerticalBarChart data={dataset} />
        <div className="flex items-center mt-4">
          <input
            type="number"
            className="input block"
            value={queryLong}
            placeholder="Enter duration"
            step="0.1"
            onChange={(e) => updateChart(e)}
          />
          <Paragraph className="ml-2">in seconds</Paragraph>
        </div>
      </div>
    </div>
  );
};
export default LongRequests;
