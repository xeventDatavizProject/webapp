import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { getAllInstances, getUserInstances } from "api/instances";
import { getAllQueries } from "api/queries";
import { getCurrentUser } from "api/user";
import UserRequest from "components/charts/UserRequest";
import { Title } from "components/common/Typography";
import LongRequests from "components/dashboard/LongRequests";
import PeakUsage from "components/dashboard/PeakUsage";
import Sidebar from "components/dashboard/Sidebar";
import ErrorLogs from "components/graph/ErrorChart";
import Icons from "components/icons";
import { useAppDispatch, useAppSelector } from "hooks";
import ChartsDoughnut from "./Charts/Doughnut/doughnut";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const state = useAppSelector((state) => state);
  const [instances, setInstances] = useState([]);
  const dispatch = useAppDispatch();
  const getAllQuery = async (queryTime?: string) => {
    await dispatch(
      getAllQueries({ userId: "qsldjkqsd", queryTime: queryTime })
    );
  };

  useEffect(() => {
    dispatch(getUserInstances()).then((res) => setInstances(res.payload));

    const fetchCurrentUser = async () => {
      const userID = localStorage.getItem("userId");
      userID && (await dispatch(getCurrentUser(userID)));
    };
    const getInstances = async () => {
      await dispatch(getAllInstances());
    };

    fetchCurrentUser();
    getInstances();
    getAllQuery();
    if (state.AuthReducer.isLoggedIn === false) {
      router.push("/login");
    }
  }, []);

  if (!state.QueriesReducer.allQueries.data) return <p>Loading...</p>;
  return (
    <div className="w-full flex bg-white text-black-primary">
      <Sidebar instances={instances} />
      <section className="flex-1 overflow-y-auto h-screen bg-gray-50">
        <div className="flex justify-between items-center bg-white px-8 py-6">
          <Title>Dashboard</Title>
          <ul className="flex items-center">
            <li className="mr-4">
              <Icons.Refresh />
            </li>
            <li>
              <Icons.Notification />
            </li>
          </ul>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-[0.5fr_1fr] gap-8 mb-8">
            <UserRequest />
            <PeakUsage data={state.QueriesReducer.allQueries.data} />
          </div>
          <div className="grid grid-cols-2 gap-8 items-start">
            <div>
              <LongRequests data={state.QueriesReducer.allQueries.data} />
            </div>
            <ErrorLogs />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
