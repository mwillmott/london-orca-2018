import React from 'react';
import App, {Container} from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Libre+Franklin:400,600,700" rel="stylesheet" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-4043907-5"></script>
          <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-4043907-5');
          `}</script>
        </Head>
        <style>{`
          html {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          * {
            box-sizing: border-box;
          }

          body {
            padding: 0;
            margin: 0;
            color: #011627;
            font-family: 'Libre Franklin', sans-serif;
          }
        `}</style>
        <Component {...pageProps} />
      </Container>
    )
  }
}
