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
  const chartData = currentData
    .map((item) => parseFloat(item.query_time))
    .filter((item) => item >= parseFloat(queryLong));

  const updateChart = (e: ChangeEvent<HTMLInputElement>) => {
    const newData = data.filter((item) => {
      return parseFloat(item.query_time) >= parseFloat(e.target.value);
    });

    setQueryLong(e.target.value);
    setCurrentData(newData);
  };

  return (
    <div className="card w-full">
      <div className="card__content">
        <Title as="h2" size="subtitle" className="mb-4">
          Request too long
        </Title>
        <VerticalBarChart labels={labels} data={chartData} />
        <div className="flex items-center mt-4">
          <input
            type="number"
            className="input block"
            value={queryLong}
            placeholder="Enter duration"
            step="0.001"
            onChange={(e) => updateChart(e)}
          />
          <Paragraph className="ml-2">in seconds</Paragraph>
        </div>
      </div>
    </div>
  );
};
export default LongRequests;
