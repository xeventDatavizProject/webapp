import { FC, forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: string;
}

const InputRoot: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, placeholder, id, error, disabled, className, ...props },
  ref,
) => {
  return (
    <div className='text-left'>
      <label
        htmlFor={id}
        className={`mb-2 block text-sm
        ${error ? 'text-red-400' : 'text-black'}`}
      >
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        placeholder={placeholder || ''}
        className={`px-4 py-3 w-full text-opacity-70 rounded-lg border border-grey-primary focus:ring-2 focus:ring-blue-primary
        ${disabled ? 'opacity-50' : ''}
        ${error ? 'ring-2 ring-red-400 text-red-400' : 'text-blackish-primary'}
        ${className ?? ''}`}
        {...props}
      />
    </div>
  );
};

const InputExpirationDate: FC = () => {
  return (
    <div>
      <label className='mb-2 block'>Date d&apos;expiration</label>
      <div className='flex items-center space-x-2'>
        <input type='text' className='w-8 bg-blue-quinary rounded-lg outline-none border-none focus:ring-2 focus:ring-gold-primary' />
        <input type='text' className='w-8 bg-blue-quinary rounded-lg outline-none border-none focus:ring-2 focus:ring-gold-primary' />
        <span>-</span>
        <input type='text' className='w-8 bg-blue-quinary rounded-lg outline-none border-none focus:ring-2 focus:ring-gold-primary' />
        <input type='text' className='w-8 bg-blue-quinary rounded-lg outline-none border-none focus:ring-2 focus:ring-gold-primary' />
      </div>
    </div>
  );
};

const InputCVV: FC = () => {
  return (
    <div>
      <label className='mb-2 block'>CVV</label>
      <div className='flex space-x-2'>
        <input type='text' className='w-8 bg-blue-quinary rounded-lg outline-none border-none focus:ring-2 focus:ring-gold-primary' />
        <input type='text' className='w-8 bg-blue-quinary rounded-lg outline-none border-none focus:ring-2 focus:ring-gold-primary' />
        <input type='text' className='w-8 bg-blue-quinary rounded-lg outline-none border-none focus:ring-2 focus:ring-gold-primary' />
      </div>
    </div>
  );
};

const InputRadio: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, id, error, className, disabled, ...props }, ref) => {
  return (
    <label
      htmlFor={id}
      className={`relative flex items-center bg-blue-quinary rounded-md cursor-pointer overflow-hidden
      ${disabled ? 'opacity-30' : ''}`}
    >
      <input
        id={id}
        ref={ref}
        type='radio'
        disabled={disabled}
        {...props}
        className={`absolute left-3 peer border-white text-black bg-transparent focus:ring-0 focus:ring-offset-0 cursor-pointer
        ${error ? 'border-red-400' : 'border-white'}
        ${className ?? ''}`}
      />
      <span
        className={`pl-9 px-8 py-1.5 w-full peer-checked:bg-gold-primary
        ${error ? 'text-red-400' : ''}`}
      >
        {label}
      </span>
    </label>
  );
};

const InputCheckbox: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, id, error, className, checked, value, disabled, ...props },
  ref,
) => {
  return (
    <div>
      <label htmlFor={id} className={`inline-flex relative items-center mr-5 cursor-pointer`}>
        <input type='checkbox' value={value} id={id} ref={ref} className={`sr-only peer`} {...props} defaultChecked />
        <div
          className={`w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600  ${
            className ?? ''
          }`}
        ></div>
        <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>{label}</span>
      </label>
    </div>
  );
};

const Input = Object.assign(forwardRef(InputRoot), {
  ExpirationDate: InputExpirationDate,
  CVV: InputCVV,
  Radio: forwardRef(InputRadio),
  Checkbox: forwardRef(InputCheckbox),
});

export default Input;
