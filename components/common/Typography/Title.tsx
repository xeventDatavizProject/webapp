import { FC, ReactNode } from 'react';

interface TitleParams {
  size?: 'sm' | 'md' | 'lg' | 'subtitle';
  children?: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const sizeBase = 'font-bold font-poppins';
const sizes = {
  subtitle: 'text-lg font-medium',
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
};

const Title: FC<TitleParams> = ({ children, size = 'md', className, as }) => {
  const TitleElement = as ? as : 'h1';

  return <TitleElement className={`${className || ''} ${sizeBase} ${sizes[size]}`}>{children}</TitleElement>;
};

export default Title;
