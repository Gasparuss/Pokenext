import "../styles/globals.scss";
import Head from "next/head";
import { createWrapper } from "next-redux-wrapper";
import NextNprogress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "../context/ThemeContext";
import { store } from "../store/index";
import { Seo } from "../components/Seo";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <Seo />
      <Provider store={store}>
        <NextNprogress color="#ff5a5f" startPosition={0.3} stopDelayMs={200} height={3} />
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
