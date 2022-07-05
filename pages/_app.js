import client from '../constants/sanityClient';
import "../styles/index.scss";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head className="head">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <meta name="description" content="Demo create app with Next.js and Sanity CMS" />
        <title>sanity-v3-demo</title>
      </Head>
      <Layout data={pageProps.data}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

App.getInitialProps = async () => {
  let pageProps = {};
  try {
    let page = await client.fetch(`*[_type == "layout"]`);
    pageProps["data"] = page[0];
  } catch (error) {}
  return { pageProps };
};
