import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ProfilesList } from '../../public/datas/ProfilesList';


const ProfileCard: FC = () => {
  return (
    <>
      <div>
        <h1 className='my-8 md:my-8 xl:mt-20 flex flex-col'>
          <span className='tracking-[2px] text-4xl font-large mb-2'>Equipes</span>
        </h1>
        <div className='grid grid-cols-4 gap-5'>
          {ProfilesList.map((profile, key) => (
            <div className='grid my-8 w-full px-4 flex-1 h-full border-solid border-white' key={key}>
              <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
                <Image
                  priority
                  src='/assets/images/user.png'
                  className=''
                  height={100}
                  width={100}
                  alt='Data And Settings'
                  style={{
                    color: '#007EFF',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>
              <h1 className='flex flex-col  justify-center h-4/6 mb-6 text-lg'>
                <span className='mx-auto'>{profile.name}</span>
              </h1>
              <div className='flex justify-between items-center'>
                <div className='flex flex-col text-base'>
                  <span className='mx-auto'>{profile.job}</span>
                </div>
                <Link href={profile.linkedin}>
                  <a>
                    <Image
                      priority
                      src='/assets/images/linkedin.png'
                      className=''
                      height={50}
                      width={50}
                      alt='Data And Settings'
                      style={{
                        color: '#007EFF',
                        backgroundColor: '#FFFFFF',
                      }}
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
