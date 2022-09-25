import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Input from 'components/common/Input/Input';
import Layout from 'components/common/Layout/Layout';
import { Title, Text } from 'components/common/Typography';
import Button from 'components/common/Button';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from 'hooks';
import { loginUser } from 'api/auth';

const schema = Yup.object({
  email: Yup.string().trim().email('Email invalid!').required('Required'),
  password: Yup.string().trim().required('Required'),
});
type typeSchema = Yup.InferType<typeof schema>;

const Login: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.AuthReducer);
  const error = useAppSelector(state => state.AuthReducer.login.error);
  const methods = useForm<typeSchema>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { control, handleSubmit, formState, reset, getValues } = methods;

  const onSubmit = async (data: typeSchema) => {
    await dispatch(loginUser(data));

    if (state.login.status === 'succeeded') {
      router.push('/dashboard');
    }
  };

  return (
    <Layout>
      <div className='container mt-16'>
        <div className='max-w-xl mx-auto text-center'>
          <Title size='sm' className='text-center'>
            Welcome back
          </Title>
          <section className='bg-white text-black-primary rounded-2xl py-8 px-12 mt-10'>
            <Title size='subtitle' as='h2'>
              Connect to your acount
            </Title>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-6'>
              <div className='mb-6'>
                <Controller
                  control={control}
                  name='email'
                  defaultValue=''
                  render={({ field, fieldState: { error } }) => (
                    <Input label='Email' placeholder='Enter your email' type='email' {...field} error={error?.message} />
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
              <Button className='mx-auto' disabled={!formState.isValid}>
                Connect
              </Button>
              {error && <Text className='text-error-primary mt-4'>{error}</Text>}
            </form>
          </section>
          <Text className='mt-6'>
            Don’t have an account ?
            <Link href='/register'>
              <a className='ml-2 underline'>Register</a>
            </Link>
          </Text>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
