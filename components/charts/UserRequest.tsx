import { FC } from "react";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Title } from "components/common/Typography";

ChartJS.register(ArcElement, Tooltip, Legend);

const dataQueries = [
  {
    id: "17782UNI",
    query: "select * from MOCK_DATA",
    database_user: "root",
    database_user_id: "29",
    date_hour: "2022-09-25T20:52:52.794897Z",
    timestamp: "1664139172",
    query_time: "0.000474",
    rows_sent: 100,
    rows_examined: 100,
    end_point: {
      url: "api/{user_id}/all_queries",
      method: "GET",
      time: 1664055794211,
    },
  },
  {
    id: "17782UZI",
    query: "select * from MOCK_DATA where gender='Female'",
    database_user: "root",
    database_user_id: "29",
    date_hour: "2022-09-25T20:52:52.794897Z",
    timestamp: "1664139172",
    query_time: "0.002682",
    rows_sent: 53,
    rows_examined: 100,
    end_point: {
      url: "api/{user_id}/all_queries",
      method: "GET",
      time: 1664055794211,
    },
  },
  {
    id: "17782UZI",
    query: "select * from MOCK_DATA where gender='Female'",
    database_user: "blah",
    database_user_id: "29",
    date_hour: "2022-09-25T20:52:52.794897Z",
    timestamp: "1664139172",
    query_time: "0.002682",
    rows_sent: 53,
    rows_examined: 100,
    end_point: {
      url: "api/{user_id}/all_queries",
      method: "GET",
      time: 1664055794211,
    },
  },
  {
    id: "17782UZI",
    query: "select * from MOCK_DATA where gender='Female'",
    database_user: "test",
    database_user_id: "29",
    date_hour: "2022-09-25T20:52:52.794897Z",
    timestamp: "1664139172",
    query_time: "0.002682",
    rows_sent: 53,
    rows_examined: 100,
    end_point: {
      url: "api/{user_id}/all_queries",
      method: "GET",
      time: 1664055794211,
    },
  },
  {
    id: "17782UZI",
    query: "select * from MOCK_DATA where gender='Female'",
    database_user: "root",
    database_user_id: "29",
    date_hour: "2022-09-25T20:52:52.794897Z",
    timestamp: "1664139172",
    query_time: "0.002682",
    rows_sent: 53,
    rows_examined: 100,
    end_point: {
      url: "api/{user_id}/all_queries",
      method: "GET",
      time: 1664055794211,
    },
  },
  {
    id: "17782UZI",
    query: "select * from MOCK_DATA where gender='Female'",
    database_user: "blah",
    database_user_id: "29",
    date_hour: "2022-09-25T20:52:52.794897Z",
    timestamp: "1664139172",
    query_time: "0.002682",
    rows_sent: 53,
    rows_examined: 100,
    end_point: {
      url: "api/{user_id}/all_queries",
      method: "GET",
      time: 1664055794211,
    },
  },
];

const sortUsers = () => {
  let users: string[] = [];
  dataQueries.forEach((query) => {
    if (!users.includes(query.database_user)) {
      users.push(query.database_user);
    }
  });
  return users;
};

const data = {
  label: "Requests by user",
  labels: sortUsers(),
  datasets: [
    {
      label: "Requests by user",
      data: sortUsers().map((user) => {
        let count = 0;
        dataQueries.forEach((query) => {
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

const UserRequest: FC = () => {
  return (
    <div className="card w-full">
      <div className="card__content">
        <Title as="h2" size="subtitle" className="mb-4">
          Requests by Users
        </Title>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default UserRequest;
