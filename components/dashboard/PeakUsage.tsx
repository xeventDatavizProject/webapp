import { FC, useEffect, useState } from "react";
import { Title } from "components/common/Typography";
import { QueriesType } from "store";
import SimpleAreaChart from "components/charts/SimpleAreaChart";
import Loader from "components/common/Loader";

type PeakUsageParams = {
  data: QueriesType[];
};

const PeakUsage: FC<PeakUsageParams> = ({ data }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [groupByDay, setGroupByDay] = useState<
    { date: string; dateISO: string; items: Date[] }[] | null
  >(null);
  const [groupByHours, setGroupByHours] = useState<{
    [key: string]: number;
  } | null>(null);
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth()).padStart(2, "0");
    return `${day}/${month}/${date.getFullYear()}`;
  };

  useEffect(() => {
    generateData();
  }, [currentDate]);

  const generateData = () => {
    // Group by Days
    const groupByDate: {
      date: string;
      dateISO: string;
      items: Date[];
    }[] = [];
    data.map((item) => {
      const date = new Date(item.date_hour);
      const findDate = groupByDate.find((el) => el.date === formatDate(date));

      if (findDate) {
        findDate.items.push(date);
      } else {
        groupByDate.push({
          date: formatDate(date),
          dateISO: date.toISOString(),
          items: [date],
        });
      }
    });
    groupByDate.sort(
      (a, b) => Number(new Date(a.dateISO)) - Number(new Date(b.dateISO))
    );
    setGroupByDay(groupByDate);

    // Group by hours
    const currentGroup = groupByDate.find(
      (item) => item.date === formatDate(currentDate)
    );
    const dataByHours: { [key: string]: number } = {};

    if (currentGroup) {
      currentGroup.items.map((date) => {
        const hours = date.getHours();

        if (hours in dataByHours) {
          dataByHours[hours] += 1;
        } else {
          dataByHours[hours] = 1;
        }
      });
    } else {
      groupByDate[0].items.map((date) => {
        const hours = date.getHours();

        if (hours in dataByHours) {
          dataByHours[hours] += 1;
        } else {
          dataByHours[hours] = 1;
        }
      });
    }

    setGroupByHours(dataByHours);
  };

  if (!groupByDay || !groupByHours) return <Loader />;

  const labels = Object.keys(groupByHours).map((hour) => {
    const convertHour = parseInt(hour);
    return `${convertHour}h - ${convertHour + 1}h`;
  });

  return (
    <div className="card w-full">
      <div className="card__content">
        <div className="flex justify-between items-center mb-4">
          <Title as="h2" size="subtitle">
            Peak Usage
          </Title>
          <select
            className="rounded-md"
            defaultValue={formatDate(currentDate)}
            onChange={(e) => {
              setCurrentDate(new Date(e.target.value));
              generateData();
            }}
          >
            {groupByDay.map((el, idx) => (
              <option key={idx} value={el.dateISO}>
                {el.date}
              </option>
            ))}
          </select>
        </div>
        <SimpleAreaChart labels={labels} data={Object.values(groupByHours)} />
      </div>
    </div>
  );
};
export default PeakUsage;
