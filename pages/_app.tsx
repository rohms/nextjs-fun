import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Little NextJS Project</title>
        <meta name="description" content="Little NextJS Project" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
