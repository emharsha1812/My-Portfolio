import { useContext } from "react";
import {
  ReactBricksContext,
  PageViewer,
  fetchPage,
  cleanPage,
  types,
} from "react-bricks/frontend";
import Head from "next/head";
import { GetStaticProps } from "next";

import config from "../react-bricks/config";
import Layout from "../components/layout";
import ErrorNoKeys from "../components/errorNoKeys";
import ErrorNoHomePage from "../components/errorNoHomePage";

interface HomeProps {
  page: types.Page;
  error: string;
}

const Home: React.FC<HomeProps> = ({ page, error }) => {
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
    />
    <meta name="description" content="description of your project" />
    <meta name="theme-color" content="#000" />
    <title>Portfolio</title>
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-icon.png"></link>
  </Head>;

  // Clean the received content
  // Removes unknown or not allowed bricks
  const { pageTypes, bricks } = useContext(ReactBricksContext);

  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null;

  return (
    <Layout>
      {pageOk && (
        <>
          <Head>
            <title>{page.meta.title}</title>
            <meta name="description" content={page.meta.description} />
          </Head>
          <PageViewer page={pageOk} />
        </>
      )}
      {error === "NOKEYS" && <ErrorNoKeys />}
      {error === "NOPAGE" && <ErrorNoHomePage />}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!config.apiKey) {
    return { props: { error: "NOKEYS" } };
  }
  try {
    const page = await fetchPage("home", config.apiKey, context.locale);
    return { props: { page } };
  } catch {
    return { props: { error: "NOPAGE" } };
  }
};

export default Home;
