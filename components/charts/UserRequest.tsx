import { FC } from "react";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Title } from "components/common/Typography";
import { QueriesType } from "store";

ChartJS.register(ArcElement, Tooltip, Legend);

type UserRequestParams = {
  data: QueriesType[];
};
const UserRequest: FC<UserRequestParams> = ({ data }) => {
  const sortUsers = () => {
    let users: string[] = [];
    data.forEach((query) => {
      if (!users.includes(query.database_user)) {
        users.push(query.database_user);
      }
    });
    return users;
  };

  const dataset = {
    label: "Requests by user",
    labels: sortUsers(),
    datasets: [
      {
        label: "Requests by user",
        data: sortUsers().map((user) => {
          let count = 0;
          data.forEach((query) => {
            if (query.database_user === user) {
              count++;
            }
          });
          return count;
        }),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
        title: {
          display: true,
          text: "Requests by Users",
        },
      },
    ],
  };

  return (
    <div className="card w-full">
      <div className="card__content">
        <Title as="h2" size="subtitle" className="mb-4">
          Requests by Users
        </Title>
        <Doughnut data={dataset} />
      </div>
    </div>
  );
};

export default UserRequest;
