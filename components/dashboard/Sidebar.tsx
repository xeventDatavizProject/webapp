import { activeGlobal } from "api/instances";
import { Paragraph } from "components/common/Typography";
import Icons from "components/icons";
import { useAppDispatch, useAppSelector } from "hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { logoutAuth } from "store/auth/reducer";

export type instanceType = {
  id: string;
  instanceUser: string;
  instancePort: string;
  hostname: string;
  instancePassword: string;
  globalActivate: string;
};

export type InstanceArray = {
  instances: instanceType[];
};

const Sidebar: FC<InstanceArray> = ({ instances }) => {
  const router = useRouter();
  const state = useAppSelector((state) => state.UsersReducer);
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(logoutAuth());
    router.push("/");
  };

  const activateGlobal = async () => {
    await dispatch(activeGlobal(instances[0].id)).then((res) => {
      console.log(res);
    });
  };

  return (
    <section className="py-6 px-4 bg-blue-primary min-h-screen text-white flex flex-col w-[320px]">
      <div className="ml-auto mt-10 items-end">
        <Link href="/" passHref>
          <span className="font-bold text-3xl font-poppins cursor-pointer">
            XDA
          </span>
        </Link>
      </div>

      <div className="mt-8">
        <Paragraph size="lg" className="font-bold">
          Instances
        </Paragraph>
        <ul className="mt-4">
          {instances.length > 0 &&
            instances.map((instance) => (
              <li className="flex justify-between bg-white px-4 py-2 text-black-primary rounded-md mb-4 cursor-pointer">
                <div>
                  <Paragraph className="font-semibold">
                    hostname: {instance.hostname}
                  </Paragraph>
                  <Paragraph size="sm">user: {instance.instanceUser}</Paragraph>
                  <Paragraph size="sm">port: {instance.instancePort}</Paragraph>
                </div>
                <div className="flex flex-col justify-end  items-end">
                  <Icons.Settings />
                  {instance.globalActivate ? (
                    <div className=" text-teal-400 mt-auto flex flex-row items-center space-x-2">
                      <span>Activated</span>
                      <div className=" bg-green-500 w-2 h-2 rounded-full" />
                    </div>
                  ) : (
                    <button
                      className=" text-blue-primary mt-auto"
                      onClick={activateGlobal}
                    >
                      Active global
                    </button>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="mt-auto">
        <div className="h-px w-full bg-grey-primary mb-4" />
        <div className="flex">
          <Icons.User />
          <div className="ml-3">
            <Paragraph className="font-medium">
              {state.currentUser?.username}
            </Paragraph>
            <Paragraph size="sm" className="block text-gray-200">
              {state.currentUser?.email}
            </Paragraph>
          </div>
          <div className="ml-auto cursor-pointer" onClick={logout}>
            <Icons.Logout />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
