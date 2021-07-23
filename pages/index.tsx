import Head from "next/head";

import Login from "../components/login";

export default function Home() {
  return (
    <>
      <Head>
        {" "}
        <title>Report Generator</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <Login />
    </>
  );
}
