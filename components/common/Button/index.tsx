import { ButtonHTMLAttributes, FC } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'light';
  href?: string;
  children: React.ReactNode;
}

const baseButtonClassName = `py-4 px-6 rounded-lg font-semibold leading-[normal]`;
const variants = {
  primary: 'bg-blue-primary text-white',
  secondary: 'bg-black-primary text-white',
  light: 'bg-grey-primary text-black-primary',
};

const ButtonRoot: FC<ButtonProps> = ({ children, className, disabled, href, variant = 'primary', ...props }) => {
  if (href) {
    return (
      <Link href={href}>
        <a
          href={href}
          className={`flex transition-shadow duration-300
          ${variants[variant]}
          ${baseButtonClassName}
          ${disabled ? 'opacity-50' : 'hover:shadow-[0px_4px_8px_rgba(0,0,0,0.3)]'}
          ${className ?? ''}`}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      className={`flex transition-shadow duration-300
      ${variants[variant]}
      ${baseButtonClassName}
      ${disabled ? 'opacity-70' : 'hover:shadow-[0px_4px_8px_rgba(0,0,0,0.3)]'}
      ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

const ButtonLarge: FC<ButtonProps> = ({ children, className, disabled, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={`bg-blue-primary flex justify-center transition-shadow duration-300 text-white
      ${baseButtonClassName}
      ${disabled ? 'bg-blue-800 text-blue-primary opacity-50' : 'hover:shadow-[0px_4px_8px_rgba(0,0,0,0.3)]'}
      ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Outline: FC<ButtonProps> = ({ children, className, disabled, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={`border border-blue-primary transition-colors duration-300 text-blue-primary hover:text-black
      ${baseButtonClassName}
      ${disabled ? 'opacity-50' : 'hover:bg-blue-primary hover:border-blue-primary hover:text-blackish-primary'}
      ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

const OutlineLarge: FC<ButtonProps> = ({ children, className, disabled, ...props }) => {
  return (
    <button
      className={`border border-blue-primary transition-colors duration-300 text-blue-primary hover:text-black px-12 py-2 uppercase tracking-[5px] font-semibold
      ${baseButtonClassName}
      ${disabled ? 'opacity-50' : 'hover:bg-blue-800 hover:border-blue-primary'}
      ${className ?? ''}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// const Button = Object.assign(ButtonRoot, {
//   Large: ButtonLarge,
//   Outline: Object.assign(Outline, {
//     Large: OutlineLarge,
//   }),
// });

export default ButtonRoot;
