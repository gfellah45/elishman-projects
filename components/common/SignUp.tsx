// create a react function component for sign up
import React from "react";
import FormContainer from "./FormContainer";
import Input from "./Input";
import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Props {
  change: (value: string) => void;
}

type FormValues = {
  phone: number;
  email: string;
  institution: string;
  password: string;
  confirmPassword: string;
};

const SignUp: React.FC<Props> = ({ change }) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const password = watch("password", "");

  const notify = (msg: string, type: string) =>
    toast[type](msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const submit: SubmitHandler<FormValues> = async (values: object) => {
    try {
      const resp = await axios.post(
        "http://157.245.16.161/account/signup",
        values
      );

      // check if response is successfull

      if (resp.status === 201) {
        notify("Successfully registered, Redirecting you to Login", "success");
        // set the redirect to the login page
        setTimeout(() => {
          change("login");
        }, 5000);
      }
    } catch (error) {
      notify("SOmething wrong happend try again", "error");
    }
  };
  return (
    <FormContainer
      heading="Singup"
      current="login"
      navText="Alredy Registered?"
      fnText="Login"
      clickFn={change}
    >
      <form onSubmit={handleSubmit(submit)}>
        <div className="my-8">
          <Input
            placeholder=" Phone Number"
            type="number"
            name="phone"
            register={register}
            error={errors}
            validation={{
              required: "Required Field",
              pattern: {
                value: /^[0]\d{10}$/,
                message: "Please enter a valid phone number",
              },
            }}
          />
        </div>
        <div className="my-8">
          <Input
            placeholder="Email "
            type="email"
            name="email"
            register={register}
            error={errors}
            validation={{ required: "Required Field" }}
          />
        </div>
        <div className="my-8">
          <Input
            placeholder="Institution"
            type="text"
            name="institution"
            register={register}
            error={errors}
            validation={{ required: "Required Field" }}
          />
        </div>
        <div className="my-8">
          <Input
            placeholder="Password"
            type="password"
            name="password"
            register={register}
            error={errors}
            validation={{ required: "Required Field" }}
          />
        </div>
        <div className="my-8">
          <Input
            placeholder="Retype Password"
            type="password"
            name="confirmPassword"
            register={register}
            error={errors}
            validation={{
              required: "Required Field",
              validate: (value: string) =>
                value === password || "The passwords do not match",
            }}
          />
        </div>
        <div className="my-10">
          <Button>Submit</Button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </FormContainer>
  );
};

export default SignUp;
