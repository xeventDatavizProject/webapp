import SimpleAreaChart from 'components/charts/SimpleAreaChart';
import SimpleVerticalBarChart from 'components/charts/SimpleVerticalBarChart';
import { useAppDispatch, useAppSelector } from 'hooks';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Icons from '../../components/icons';
import QueryView from '../../components/Query/QueryView';

const bgImage = '/assets/images/bg.png';

const UsersPeak: NextPage = () => {
  const router = useRouter();
  const state = useAppSelector(state => state.AuthReducer);
  const dispatch = useAppDispatch();
  const [selectedId, setSelectedId] = useState(null);
  const [cpu, setCpu] = useState(true);
  const [timestamp, setTimestamp] = useState(true);

  const listOfPerf = [
    {
      isActive: cpu,
      name: 'CPU',
    },
    {
      isActive: timestamp,
      name: 'Timestamp',
    },
  ];

  useEffect(() => {
    if (!state.isLoggedIn) {
      router.push('/login');
    }
  }, []);

  return (
    <div
      className='w-full'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.95)), url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex flex-col h-screen'>
        <div className='flex flex-1 overflow-hidden'>
          <div className='hidden md:flex w-60 overflow-auto mr-1 bg-blue-primary bg-opacity-50 z-20'>
            <div className='flex flex-1 flex-col divide-y divide-gray-300'>
              <div className='flex w-full mx-auto p-4'>
                <div className='flex-grow z-20 items-center hover:cursor-pointer'>
                  <Link href='/' passHref>
                    <span className='font-bold text-3xl -tracking-[0.12em]'>XDA</span>
                  </Link>
                </div>
              </div>
              <div className='flex w-full mx-auto h-1/2 p-4'>
                <div className='flex-grow z-20 font-mono tracking-widest text-xs'>select graph</div>
              </div>
              <div className='w-full mx-auto h-1/2  p-4'>
                <div className='flex-grow z-20 font-mono tracking-widest text-xs mb-4'>Query</div>
                <QueryView />
              </div>
            </div>
          </div>
          <div className=' space-x-10  py-6 z-10 font-mono tracking-widest text-xs overflow-hidden hidden md:flex md:w-[1000px] fixed top-0 right-10  h-10 items-center justify-end'>
            <Icons.Home />
            <Icons.Download />
            <Icons.FullScreen />
            <Icons.Refresh />
            <Icons.Print />
            <Icons.Notification fill='#007EFF' />
            <Icons.Settings fill='#007EFF' />
            <Icons.User />
            {/* <Icons.Logo /> */}
          </div>
          <div className='flex flex-1 flex-col divide-y divide-gray-300 pt-[5vh]'>
            <div className='flex w-full justify-center mx-auto h-1/2 p-4 border-zinc-800'>
              <h4 className='p-4'>Pic d'utilisation</h4>
              <div className='flex flex-col z-20 font-mono tracking-widest text-xs w-[550px] 2xl:mx-auto'>
                <div className='grid gap-y-3 m-10'>
                  <SimpleAreaChart />
                  <SimpleVerticalBarChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPeak;
