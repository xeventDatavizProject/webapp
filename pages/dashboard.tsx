import { getAllInstances, getUserInstances } from "api/instances";
import { getAllQueries } from "api/queries";
import { getCurrentUser } from "api/user";
import VerticalBarChart from "components/charts/VerticalBarChart";
import { Title } from "components/common/Typography";
import Sidebar from "components/dashboard/Sidebar";
import Icons from "components/icons";
import { useAppDispatch, useAppSelector } from "hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
      <section className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
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

        <div className="card w-full">
          <div className="card__content">
            <Title as="h2" size="subtitle">
              Request too long
            </Title>
            <VerticalBarChart data={state.QueriesReducer.allQueries.data} />
          </div>

          {/* <div className='card__footer'>
            <div>
              <input
                type='number'
                className='input block'
                value={queryLong}
                placeholder='Enter duration'
                step='0.1'
                onChange={e => {
                  setQueryLong(e.target.value);
                  getAllQuery(e.target.value);
                }}
              />
            </div>
            <div></div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
