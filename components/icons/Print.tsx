import { FC, SVGProps } from 'react';

const Print: FC<SVGProps<SVGSVGElement>> = props => (
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
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z'
    />
  </svg>
);

export default Print;
