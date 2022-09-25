import { FC, ReactNode } from 'react';

interface TextParams {
  children?: ReactNode;
  size?: 'xs' | 'sm' | 'md';
  className?: string;
  fontWeight?: string | number;
}

const sizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
};

const Text: FC<TextParams> = ({ children, size = 'md', className }) => {
  return <p className={`${className || ''} ${sizes[size]}`}>{children}</p>;
};

export default Text;
