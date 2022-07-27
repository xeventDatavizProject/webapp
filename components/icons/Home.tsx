import { FC, SVGProps } from 'react';

const Home: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={24}
    width={24}
    fill='none'
    viewBox='0 0 24 24'
    stroke='#007EFF'
    strokeWidth='2'
    {...props}
  >
    <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
  </svg>
);

export default Home;
