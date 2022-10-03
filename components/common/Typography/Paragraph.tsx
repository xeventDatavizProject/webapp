import { FC, ReactNode } from 'react';

interface ParagraphParams {
  children?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const Paragraph: FC<ParagraphParams> = ({ children, size = 'md', className }) => {
  return <p className={`${className || ''} ${sizes[size]}`}>{children}</p>;
};

export default Paragraph;
