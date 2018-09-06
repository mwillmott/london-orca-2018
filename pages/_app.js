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
          <title>London Orca 2018 Tournament</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,500" rel="stylesheet" />
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
            color: #070707;
            font-family: 'Roboto Slab', serif;
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
        <Component {...pageProps} />
      </Container>
    )
  }
}
