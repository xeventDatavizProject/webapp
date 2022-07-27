import { FC } from 'react';

type PerformanceCircleProps = {
  src: string;
  alt: string;
  className?: string;
  bgColor: string;
};

const PerformanceCircle: FC<PerformanceCircleProps> = ({ src, alt, className, bgColor }) => {
  return (
    <div
      className={`flex justify-center items-center rounded-full h-16 w-16 lg:h-10 lg:w-10 ${className ? className : ''}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className='relative text-[0.6rem] text-black'>50%</div>
    </div>
  );
};

export default PerformanceCircle;
