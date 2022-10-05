import { Dialog } from '@headlessui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import Button from '../../common/Button';
import Input from '../../common/Input/Input';

type RegisterModalProps = {
  show: boolean;
  onClickConnect: () => void;
  onClose: () => void;
};

const schema = Yup.object({
  firstname: Yup.string().trim().required('Required'),
  lastname: Yup.string().trim().required('Required'),
  email: Yup.string().trim().email('Email invalid!').required('Required'),
  password: Yup.string().trim().required('Required'),
  confirmPassword: Yup.string().trim().required('Required'),
});

const RegisterModal: FC<RegisterModalProps> = ({ show, onClose, onClickConnect }) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { control, handleSubmit, formState, reset } = methods;

  const onSubmit = () => {};

  return (
    <Dialog
      open={show}
      className='fixed z-[500] min-h-screen inset-0 p-4 md:py-8 overflow-y-auto overscroll-y-contain flex items-center justify-center'
      onClose={onClose}
    >
      <div onClick={() => onClose()} className='fixed inset-0 bg-blackish-primary z-50 bg-opacity-80' />
      <Dialog.Panel className='relative m-auto z-[99] bg-[#e3e7ec] text-black w-full rounded-xl md:rounded-2xl px-6 py-8 md:p-12 xl:p-20 max-w-xl'>
        <h5 className='text-center text-2xl mb-4'>Create your account</h5>
        {errorMessage && <p className='text-red-400 text-center mb-4'>{errorMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-4 max-w-md mx-auto p-4 md:p-12 bg-blue-quaternary rounded-xl md:rounded-2xl'>
            <Controller
              control={control}
              name='firstname'
              defaultValue=''
              render={({ field, fieldState: { error } }) => <Input label='Fist name' type='text' {...field} error={error?.message} />}
            />
            <Controller
              control={control}
              name='lastname'
              defaultValue=''
              render={({ field, fieldState: { error } }) => <Input label='Last name' type='text' {...field} error={error?.message} />}
            />
            <Controller
              control={control}
              name='email'
              defaultValue=''
              render={({ field, fieldState: { error } }) => <Input label='E-mail' type='email' {...field} error={error?.message} />}
            />
            <Controller
              control={control}
              name='password'
              defaultValue=''
              render={({ field, fieldState: { error } }) => <Input label='Password' type='password' {...field} error={error?.message} />}
            />
            <Controller
              control={control}
              name='confirmPassword'
              defaultValue=''
              render={({ field, fieldState: { error } }) => (
                <Input label='Confirm password' type='password' {...field} error={error?.message} />
              )}
            />
          </div>
          {/* <div className='text-center mt-8'>
            <a className='cursor-pointer' onClick={() => onClickForgot()}>
              Forgot your password ?
            </a>
          </div> */}

          <div className='flex justify-center'>{/* <Button.Large disabled={!formState.isValid}>Connect</Button.Large> */}</div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default RegisterModal;
