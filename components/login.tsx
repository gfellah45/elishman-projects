import React, { useState, useContext, useEffect } from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import FormContainer from "./common/FormContainer";
import Link from "next/link";
import SingIn from "./common/SingIn";
import SignUp from "./common/SignUp";

const login: React.FC = () => {
  const [status, setStatus] = useState<string>("login");

  const change = (type: string) => {
    setStatus(type);
  };

  const render =
    status === "login" ? (
      <SingIn change={change} />
    ) : (
      <SignUp change={change} />
    );

  return render;
};

export default login;
