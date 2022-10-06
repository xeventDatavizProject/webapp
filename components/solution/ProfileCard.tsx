import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ProfilesList } from "../../public/datas/ProfilesList";

const ProfileCard: FC = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="my-8 md:my-8 xl:mt-20 flex flex-col">
          <span className="tracking-[2px] text-4xl font-large mb-2">
            Equipes
          </span>
        </h1>
        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 md:gap-4 max-w-5xl mx-auto px-5 mb-12 md:mb-20">
          {ProfilesList.map((profile, key) => (
            <div
              className="grid my-8 w-full px-4 flex-1 h-full border-solid border-white bg-blue-200 bg-opacity-40 rounded-2xl "
              key={key}
            >
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <Image
                  priority
                  src={profile.image}
                  className=" bg-transparent rounded-full"
                  height={100}
                  width={100}
                  alt="Data And Settings"
                  style={{
                    color: "#007EFF",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
              <h1 className="flex flex-col  justify-center h-4/6 mb-6 text-lg">
                <span className="mx-auto">{profile.name}</span>
              </h1>
              <div className="flex justify-between items-center">
                <div className="flex flex-col text-base">
                  <span className="mx-auto">{profile.job}</span>
                </div>
                <Link href={profile.linkedin}>
                  <a>
                    <Image
                      priority
                      src="/assets/images/linkedin.png"
                      className=" bg-transparent"
                      height={50}
                      width={50}
                      alt="linkedin"
                    />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
