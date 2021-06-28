import React, { useState } from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import FormContainer from "./common/FormContainer";
import Link from "next/link";

const login: React.FC = () => {
  const [status, setStatus] = useState("login");

  const change = (type) => {
    setStatus(type);
  };
  if (status === "login") {
    return (
      <FormContainer
        heading="Login"
        current="singup"
        navText="New User?"
        fnText="Sign Up"
        clickFn={change}
      >
        <div className="my-8">
          <Input placeholder="Email or Username" type="email" name="email" />
        </div>
        <div className="my-8">
          <Input placeholder="Password" type="password" name="password" />
        </div>
        <div className="my-10">
          <Button>
            <Link href="/dashboard">Submit</Link>
          </Button>
        </div>
      </FormContainer>
    );
  } else {
    return (
      <FormContainer
        heading="Singup"
        current="login"
        navText="Alredy Registered?"
        fnText="Login"
        clickFn={change}
      >
        <div className="my-8">
          <Input placeholder=" Username" type="text" name="username" />
        </div>
        <div className="my-8">
          <Input placeholder="Email " type="email" name="email" />
        </div>
        <div className="my-8">
          <Input placeholder="Institution" type="text" name="institution" />
        </div>
        <div className="my-8">
          <Input placeholder="Password" type="password" name="password" />
        </div>
        <div className="my-8">
          <Input
            placeholder="Retype Password"
            type="password"
            name="rpassword"
          />
        </div>
        <div className="my-10">
          <Button>
            <Link href="/dashboard">Submit</Link>
          </Button>
        </div>
      </FormContainer>
    );
  }
};

export default login;
