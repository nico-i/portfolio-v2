import Head from "next/head";
import NavBar from "../components/navbar";
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
