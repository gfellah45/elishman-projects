// create a react function component
import * as React from "react";
import FormContainer from "./FormContainer";
import Input from "./Input";
import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { getData, setData } from "../helpers";
import { useRouter } from "next/dist/client/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  change: (value: string) => void;
}

type FormValues = {
  email: string;
  password: string;
};

const SingIn: React.FC<Props> = ({ change }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  //   create a login function

  // user details type
  type userDetails = {
    profile: object;
    basic: string;
    token: string;
  };

  // router ini

  const router = useRouter();

  // toast notif

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

  const login: SubmitHandler<FormValues> = async (values) => {
    const { email, password } = values;

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login?password=${password}&username=${email}`;

    // try and catch block

    try {
      const resp = await axios.get(url);

      const { profile, security } = resp.data;

      // const token = `Bearer ${resp.headers?.accesstoken}`;
      // const basic = `Basic ${security.secreteKey}`;

      if (resp.status === 200) {
        const newToken = {
          accessToken: resp.headers.accesstoken,
          expiresAt: resp.headers.expiresat,
        };
        setData("token", newToken);
        setData("basic", security);
        setData("profile", profile);
        notify("Successfully Login, Redirecting you to Dashboard", "success");
        setTimeout(() => {
          router.push("/dashboard");
        }, 3000);
      }
    } catch (e) {
      console.log(e.response);
      if (e.response.data.status === 401) {
        notify(e.response.data.message, "error");
      } else {
        notify(
          "Something went wrong, please check ur internet connection",
          "error"
        );
      }
    }
  };

  return (
    <FormContainer
      heading="Login"
      current="singup"
      navText="New User?"
      fnText="Sign Up"
      clickFn={change}
    >
      <form onSubmit={handleSubmit(login)}>
        <div className="my-8">
          <Input
            placeholder="Email or Username"
            type="email"
            name="email"
            register={register}
            validation={{ required: "Required Field" }}
            error={errors}
          />
        </div>
        <div className="my-8">
          <Input
            placeholder="Password"
            type="password"
            name="password"
            register={register}
            validation={{ required: "Required Field" }}
            error={errors}
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

export default SingIn;
