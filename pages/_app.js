import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import { ApolloProvider } from '@apollo/react-hooks';

import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';
import withData from '../util/apollo-client';



class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };

    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <ApolloProvider client={apollo}>
          <Provider config={config}>
            <AppProvider i18n={translations}>
              <Component {...pageProps} />
            </AppProvider>
          </Provider>
        </ApolloProvider>
      </React.Fragment>
    );
  }
}

export default withData(MyApp);