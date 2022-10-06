import { getAllInstances, getUserInstances } from "api/instances";
import { getMostUsedQueries } from "api/queries";
import { getCurrentUser } from "api/user";
import UserRequest from "components/charts/UserRequest";
import Accordion from "components/common/Accordion/Accordion";
import { Title } from "components/common/Typography";
import LongRequests from "components/dashboard/LongRequests";
import PeakUsage from "components/dashboard/PeakUsage";
import Sidebar from "components/dashboard/Sidebar";
import ErrorLogs from "components/graph/ErrorChart";
import Icons from "components/icons";
import { useAppDispatch, useAppSelector } from "hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Donuts from "../components/graph/LogChart";

const listDrawer = [
  {
    title: "Error detected",
    content: " select * from .....",
  },
  {
    title: "Error detected",
    content: " select * from .....",
  },
  {
    title: "Error detected",
    content: " select * from .....",
  },
  {
    title: "Error detected",
    content: " select * from .....",
  },
];

const Dashboard: NextPage = () => {
  const router = useRouter();
  const state = useAppSelector((state) => state);
  const [instances, setInstances] = useState([]);
  const [mostUsedQueries, setMostUsedQueries] = useState([]);
  const [allQueries, setAllQueries] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useAppDispatch();
  // const getAllQuery = async (queryTime?: string) => {
  //   await dispatch(
  //     getAllQueries({ userId: "qsldjkqsd", queryTime: queryTime })
  //   );
  // };

  useEffect(() => {
    dispatch(getUserInstances()).then((res) => setInstances(res.payload));
    dispatch(getMostUsedQueries()).then((res) =>
      setMostUsedQueries(res.payload)
    );
    // dispatch(getAllQueries()).then((res) => setAllQueries(res.payload));

    const fetchCurrentUser = async () => {
      const userID = localStorage.getItem("userId");
      userID && (await dispatch(getCurrentUser(userID)));
    };
    const getInstances = async () => {
      await dispatch(getAllInstances());
    };

    fetchCurrentUser();
    getInstances();
    // getAllQuery();
    if (state.AuthReducer.isLoggedIn === false) {
      router.push("/login");
    }
  }, []);

  if (!state.QueriesReducer.allQueries.data) return <p>Loading...</p>;
  return (
    <div className="w-full flex bg-white text-black-primary">
      <div
        className={`fixed w-fit inset-0 bg-black-primary transform transition-transform  duration-300 overflow-y-auto overscroll-y-contain pt-20 p-4 xl:p-0 z-50
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar instances={instances} />
      </div>

      <section className="flex-1 overflow-y-auto h-screen bg-gray-50">
        <div className="flex justify-between items-center bg-white px-8 py-6">
          <div>
            <Title>Dashboard</Title>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="sidebar"
              className="relative w-8 h-6 z-[60]"
            >
              <span
                className={`absolute left-0 transform w-full h-[2px]  transition-transform
              ${
                isSidebarOpen
                  ? "rotate-45 translate-y-0 bg-white"
                  : "translate-y-1 bg-blue-primary"
              }`}
              />
              <span
                className={`absolute left-0 transform w-full h-[2px] bg-black transition-transform
              ${
                isSidebarOpen
                  ? "-rotate-45 translate-y-0 bg-white"
                  : "-translate-y-1 bg-blue-primary"
              }`}
              />
            </button>
          </div>
          <ul className="flex items-center">
            <li className="mr-4">
              <Icons.Refresh />
            </li>
            <li>
              <Icons.Notification
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              />
              <div
                className={`fixed right-0 top-0 bottom-0 bg-black-primary text-white w-1/5 transform transition-transform  duration-300 overflow-y-auto overscroll-y-contain pt-10 p-4 z-50
            ${isOpen ? "-translate-y-full" : "translate-y-0"}`}
              >
                <div className="flex justify-between mb-20">
                  <span>Notifications List</span>
                  <Icons.Close
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer"
                  />
                </div>
                {listDrawer.map((item, index) => (
                  <Accordion
                    key={index}
                    title={item.title}
                    description={item.content}
                    delay={index}
                  />
                ))}
              </div>
            </li>
          </ul>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-[0.5fr_1fr] gap-8 mb-8">
            <UserRequest data={state.QueriesReducer.allQueries.data} />
            <PeakUsage data={state.QueriesReducer.allQueries.data} />
          </div>
          <div className="grid grid-cols-2 gap-8 items-start">
            <div>
              <LongRequests data={state.QueriesReducer.allQueries.data} />
            </div>
            <ErrorLogs />
          </div>
          <div className="card w-full mt-8">
            <div className="card__content">
              <Title as="h2" size="subtitle">
                Request too long
              </Title>
              <Donuts logs={mostUsedQueries} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
