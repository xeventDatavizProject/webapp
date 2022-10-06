import { getAllInstances, getUserInstances } from "api/instances";
import { getAllQueries, getMostUsedQueries } from "api/queries";
import { getCurrentUser } from "api/user";
import Accordion from "components/common/Accordion/Accordion";
import { Title } from "components/common/Typography";
import Sidebar from "components/dashboard/Sidebar";
import Icons from "components/icons";
import { useAppDispatch, useAppSelector } from "hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useAppDispatch();
  const getAllQuery = async (queryTime?: string) => {
    await dispatch(
      getAllQueries({ userId: "qsldjkqsd", queryTime: queryTime })
    );
  };

  useEffect(() => {
    dispatch(getUserInstances()).then((res) => setInstances(res.payload));
    dispatch(getMostUsedQueries()).then((res) =>
      setMostUsedQueries(res.payload)
    );

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

  console.log(mostUsedQueries);

  useEffect(() => {
    const onResize = () => {
      if (isOpen && window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen]);

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
              <Icons.Notification
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              />
              <div
                className={`fixed right-0 top-0 bottom-0 bg-black-primary text-white w-1/5 transform transition-transform  duration-300 overflow-y-auto overscroll-y-contain pt-10 p-4 z-50
            ${isOpen ? "translate-x-full" : "translate-x-0"}`}
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

        <div className="card w-full">
          <div className="card__content">
            <Title as="h2" size="subtitle">
              Request too long
            </Title>
            {/* <VerticalBarChart data={state.QueriesReducer.allQueries.data} />
            <Donuts logs={mostUsedQueries} /> */}
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
