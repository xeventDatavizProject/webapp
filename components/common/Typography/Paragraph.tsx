import { FC, ReactNode } from 'react';

interface ParagraphParams {
  children?: ReactNode;
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}

const sizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
};

const Paragraph: FC<ParagraphParams> = ({ children, size = 'md', className }) => {
  return <p className={`${className || ''} ${sizes[size]}`}>{children}</p>;
};

export default Paragraph;
