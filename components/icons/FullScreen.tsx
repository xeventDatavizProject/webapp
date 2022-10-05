import { FC, SVGProps } from 'react';

const FullScreen: FC<SVGProps<SVGSVGElement>> = props => (
  <svg xmlns='http://www.w3.org/2000/svg' height={24} width={24} fill='none' stroke='#007EFF' strokeWidth='2' {...props}>
    <path strokeLinecap='round' strokeLinejoin='round' d='M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z' />
  </svg>
);

export default FullScreen;
