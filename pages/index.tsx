import Head from "next/head";
import NavBar from "../components/navbar";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      
    </>
  );
}
