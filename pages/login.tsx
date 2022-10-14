import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "api/auth";
import { getUserInstances } from "api/instances";
import Button from "components/common/Button";
import Input from "components/common/Input/Input";
import Layout from "components/common/Layout/Layout";
import { Paragraph, Title } from "components/common/Typography";
import { useAppDispatch, useAppSelector } from "hooks";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { resetErrors, setAuthLogged } from "store/auth/reducer";
import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string().trim().email("Email invalid!").required("Required"),
  password: Yup.string().trim().required("Required"),
});
type typeSchema = Yup.InferType<typeof schema>;

const Login: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.AuthReducer);
  const error = useAppSelector((state) => state.AuthReducer.login.error);
  const methods = useForm<typeSchema>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { control, handleSubmit, formState, reset, getValues } = methods;

  const onSubmit = async (data: typeSchema) => {
    try {
      const user = await dispatch(loginUser(data)).unwrap();

      if (user?.token) {
        const instance = await dispatch(getUserInstances()).unwrap();
        dispatch(setAuthLogged(true));
        instance.length > 0
          ? router.push("/dashboard")
          : router.push("/register-instance");
      }
    } catch (error) {}
  };

  useEffect(() => {
    return () => {
      dispatch(resetErrors);
    };
  }, []);

  return (
    <Layout>
      <div className="container mt-16">
        <div className="max-w-xl mx-auto text-center">
          <Title size="sm" className="text-center">
            Welcome back
          </Title>
          <section className="bg-white text-black-primary rounded-2xl py-8 px-12 mt-10">
            <Title size="subtitle" as="h2">
              Connect to your acount
            </Title>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <div className="mb-6">
                <Controller
                  control={control}
                  name="email"
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      label="Email"
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                      error={error?.message}
                    />
                  )}
                />
              </div>
              <div className="mb-8">
                <Controller
                  control={control}
                  name="password"
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                      error={error?.message}
                    />
                  )}
                />
              </div>
              <Button className="mx-auto" disabled={!formState.isValid}>
                Connect
              </Button>
              <div>
                {error && (
                  <Paragraph className="text-error-primary mt-4">
                    {error}
                  </Paragraph>
                )}
              </div>
            </form>
          </section>
          <Paragraph className="mt-6">
            Don’t have an account ?
            <Link href="/register">
              <a className="ml-2 underline">Register</a>
            </Link>
          </Paragraph>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
