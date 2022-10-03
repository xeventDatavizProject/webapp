import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Paragraph } from 'components/common/Typography';
import Icons from 'components/icons';
import { useAppDispatch, useAppSelector } from 'hooks';
import { logoutAuth } from 'store/auth/reducer';

const Sidebar: FC = () => {
  const router = useRouter();
  const state = useAppSelector(state => state.UsersReducer);
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(logoutAuth());
    router.push('/');
  };

  return (
    <section className='py-6 px-4 bg-blue-primary min-h-screen text-white flex flex-col w-[320px]'>
      <Link href='/' passHref>
        <span className='font-bold text-3xl font-poppins cursor-pointer'>XDA</span>
      </Link>
      <div className='mt-8'>
        <Paragraph size='lg' className='font-bold'>
          Instances
        </Paragraph>
        <ul className='mt-4'>
          <li className='flex bg-white px-4 py-2 text-black-primary rounded-md mb-4 cursor-pointer'>
            <div>
              <Paragraph className='font-semibold'>localhost:5536</Paragraph>
              <Paragraph size='sm'>bbe884ff-2193-4f42-998b-60248d32c763</Paragraph>
            </div>
            <Icons.Settings />
          </li>
          <li className='flex bg-white px-4 py-2 text-black-primary rounded-md mb-4 cursor-pointer'>
            <div>
              <Paragraph className='font-semibold'>localhost:5536</Paragraph>
              <Paragraph size='sm'>bbe884ff-2193-4f42-998b-60248d32c763</Paragraph>
            </div>
            <Icons.Settings />
          </li>
          <li className='flex bg-white px-4 py-2 text-black-primary rounded-md cursor-pointer'>
            <div>
              <Paragraph className='font-semibold'>localhost:5536</Paragraph>
              <Paragraph size='sm'>bbe884ff-2193-4f42-998b-60248d32c763</Paragraph>
            </div>
            <Icons.Settings />
          </li>
        </ul>
      </div>
      <div className='mt-auto'>
        <div className='h-px w-full bg-grey-primary mb-4' />
        <div className='flex'>
          <Icons.User />
          <div className='ml-3'>
            <Paragraph className='font-medium'>{state.currentUser?.username}</Paragraph>
            <Paragraph size='sm' className='block text-gray-200'>
              {state.currentUser?.email}
            </Paragraph>
          </div>
          <div className='ml-auto cursor-pointer' onClick={logout}>
            <Icons.Logout />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
