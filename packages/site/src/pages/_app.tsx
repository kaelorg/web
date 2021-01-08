import App from 'next/app';
import React from 'react';

import Head from '@components/common/Head';
import { Provider as UIProvider } from '@components/layout/UI';

import '@styles/global.css';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <UIProvider>
        <Head />
        <Component {...pageProps} />
      </UIProvider>
    );
  }
}

export default MyApp;
