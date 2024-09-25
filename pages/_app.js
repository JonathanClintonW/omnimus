import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from 'next/head';
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <SpeedInsights />
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Omnimus</title>
      </Head>
      <div className="p-4 bg-white dark:bg-black text-black dark:text-white min-h-screen max-w-screen tracking-wide select-none transition duration-500">
        <Navbar />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MyApp;
