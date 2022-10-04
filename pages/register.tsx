import type { NextPage } from 'next';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Input from 'components/common/Input/Input';
import Layout from 'components/common/Layout/Layout';
import { Title, Paragraph } from 'components/common/Typography';
import Button from 'components/common/Button';
import { createUser } from 'api/auth';
import { useAppDispatch, useAppSelector } from 'hooks';
import { resetErrors } from 'store/auth/reducer';

const schema = Yup.object({
  // firstname: Yup.string().trim().required('Required'),
  // lastname: Yup.string().trim().required('Required'),
  username: Yup.string().trim().required('Required'),
  email: Yup.string().trim().email('Email invalid!').required('Required'),
  password: Yup.string().trim().required('Required'),
  // confirmPassword: Yup.string().trim().required('Required'),
});
type typeSchema = Yup.InferType<typeof schema>;

const Register: NextPage = () => {
  const router = useRouter();
  const state = useAppSelector(state => state.AuthReducer);
  const error = useAppSelector(state => state.AuthReducer.createUser.error);
  const dispatch = useAppDispatch();
  const methods = useForm<typeSchema>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { control, handleSubmit, formState, reset } = methods;

  const onSubmit = async (data: typeSchema) => {
    await dispatch(createUser(data)).then(res => {
      const status = res.meta.requestStatus;

      status === 'fulfilled' && router.push('/dashboard');
    });
  };

  useEffect(() => {
    state.isLoggedIn && router.push('/dashboard');

    return () => {
      dispatch(resetErrors);
    };
  }, []);

  return (
    <Layout>
      <div className='container py-16'>
        <div className='max-w-xl mx-auto text-center'>
          <Title size='sm' className='text-center'>
            Welcome to your Xevent Dataviz Application
          </Title>
          <section className='bg-white text-black-primary rounded-2xl py-8 px-12 mt-10'>
            <Title size='subtitle' as='h2'>
              Create your acount
            </Title>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-6'>
              <div className='mb-6'>
                <Controller
                  control={control}
                  name='username'
                  defaultValue=''
                  render={({ field, fieldState: { error } }) => (
                    <Input label='Username' placeholder='Enter your username' type='text' {...field} error={error?.message} />
                  )}
                />
              </div>
              {/* <div className='mb-8'>
                <Controller
                  control={control}
                  name='lastname'
                  defaultValue=''
                  render={({ field, fieldState: { error } }) => (
                    <Input label='Last name' placeholder='Enter your last name' type='text' {...field} error={error?.message} />
                  )}
                />
              </div> */}
              <div className='mb-8'>
                <Controller
                  control={control}
                  name='email'
                  defaultValue=''
                  render={({ field, fieldState: { error } }) => (
                    <Input label='E-mail' placeholder='Enter your email' type='email' {...field} error={error?.message} />
                  )}
                />
              </div>
              <div className='mb-8'>
                <Controller
                  control={control}
                  name='password'
                  defaultValue=''
                  render={({ field, fieldState: { error } }) => (
                    <Input label='Password' placeholder='Enter your password' type='password' {...field} error={error?.message} />
                  )}
                />
              </div>
              {/* <div className='mb-8'>
                <Controller
                  control={control}
                  name='confirmPassword'
                  defaultValue=''
                  render={({ field, fieldState: { error } }) => (
                    <Input label='Confirm password' placeholder='Confirm your password' type='password' {...field} error={error?.message} />
                  )}
                />
              </div> */}
              <Button className='mx-auto' disabled={!formState.isValid}>
                Submit
              </Button>
              <div>{error && <Paragraph className='text-error-primary mt-4'>{error}</Paragraph>}</div>
            </form>
          </section>
          <Paragraph className='mt-6'>
            Already have an account ?
            <Link href='/login'>
              <a className='ml-2 underline'>Log in</a>
            </Link>
          </Paragraph>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
