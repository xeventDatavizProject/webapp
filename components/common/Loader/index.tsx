import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div>
      <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' className='animate-spin-slow'>
        <path
          d='M11 1V5M11 17V21M5 11H1M21 11H17M18.0784 18.0784L15.25 15.25M18.0784 3.99994L15.25 6.82837M3.92157 18.0784L6.75 15.25M3.92157 3.99994L6.75 6.82837'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};
export default Loader;
