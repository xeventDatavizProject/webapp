import { yupResolver } from "@hookform/resolvers/yup";
import { createInstance } from "api/instances";
import Button from "components/common/Button";
import Input from "components/common/Input/Input";
import Layout from "components/common/Layout/Layout";
import { Paragraph, Title } from "components/common/Typography";
import Icons from "components/icons";
import { useAppDispatch } from "hooks";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";

const schemas = Yup.object({
  instanceUser: Yup.string().trim().required("Required"),
  instancePort: Yup.string().trim().required("Required"),
  hostname: Yup.string().trim().required("Required"),
  instancePassword: Yup.string().trim().required("Required"),
});
type instanceTypeSchema = Yup.InferType<typeof schemas>;

const RegisterInstance: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();

  const methods = useForm<instanceTypeSchema>({
    resolver: yupResolver(schemas),
    mode: "onChange",
  });

  const { control, handleSubmit, reset } = methods;

  const onSubmit = async (data: instanceTypeSchema) => {
    await dispatch(createInstance(data)).then((res) => {
      const status = res.meta.requestStatus;
      status === "fulfilled"
        ? (router.push("/dashboard"), setErrorMessage(""))
        : setErrorMessage("Error on create instance");
    });
  };

  return (
    <Layout>
      <div className="container py-16">
        <div className="max-w-xl mx-auto text-center">
          <Title size="sm" className="text-center">
            Connect to your database
          </Title>
          <section className="bg-white text-black-primary rounded-2xl py-8 px-12 mt-10">
            <Title size="subtitle" as="h2">
              Database information
            </Title>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <div className="mb-6">
                <Controller
                  control={control}
                  name="instanceUser"
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      label="User"
                      placeholder="Enter your database username"
                      type="text"
                      {...field}
                      error={error?.message}
                    />
                  )}
                />
              </div>
              <div className="mb-8">
                <Controller
                  control={control}
                  name="hostname"
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      label="Hostname"
                      placeholder="Enter the hostname"
                      type="text"
                      {...field}
                      error={error?.message}
                    />
                  )}
                />
              </div>
              <div className="mb-8">
                <Controller
                  control={control}
                  name="instancePort"
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      label="Port"
                      placeholder="Enter your database port"
                      type="text"
                      {...field}
                      error={error?.message}
                    />
                  )}
                />
              </div>
              <div className="mb-8">
                <Controller
                  control={control}
                  name="instancePassword"
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      label="Password"
                      placeholder="Enter your database password"
                      type="password"
                      {...field}
                      error={error?.message}
                    />
                  )}
                />
              </div>
              <Button className="mx-auto" disabled={isLoading} type="submit">
                {isLoading ? <Icons.Spin /> : <span>Connect</span>}
              </Button>
              <div>
                {errorMessage && (
                  <Paragraph className="text-error-primary mt-4">
                    {errorMessage}
                  </Paragraph>
                )}
              </div>
            </form>
          </section>
          <Paragraph className="mt-6">
            Database already connected ?
            <Link href="/dashboard">
              <a className="ml-2 underline">Dashboard</a>
            </Link>
          </Paragraph>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterInstance;
