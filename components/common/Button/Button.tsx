import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const baseButtonClassName = `px-4 py-1 rounded-lg`;

const ButtonRoot: FC<ButtonProps> = ({ children, className, disabled, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={`bg-blue-primary flex transition-shadow duration-300
      ${baseButtonClassName}
      ${disabled ? 'bg-blue-800 text-blue-primary opacity-50' : 'hover:shadow-[0px_4px_8px_rgba(0,0,0,0.3)]'}
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
      className={`px-12 py-2 uppercase tracking-[5px] font-semibold bg-blue-primary flex justify-center transition-shadow duration-300 text-black
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

const Button = Object.assign(ButtonRoot, {
  Large: ButtonLarge,
  Outline: Object.assign(Outline, {
    Large: OutlineLarge,
  }),
});

export default Button;
