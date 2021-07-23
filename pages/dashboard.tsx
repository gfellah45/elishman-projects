import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Display from "../components/Display";
import { getData } from "../components/helpers";
import withAuth from "../components/helpers/useAuth";
const dashboard = () => {
  return <Display />;
};

export default withAuth(dashboard);
