import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Head from 'next/head'

import { device } from '../utilities/breakpoints';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 8em;
  padding: 0 2em;
  width: 100%;
  max-width: 1120px;
  font-size: .875rem;

  @media ${device.tablet} {
    padding: 0 1.1rem;
  }

  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

const Header = styled.header`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
`;

export default ({ children, title = 'London Orca Tournament - 3rd Nov 2018' }) => (
  <Page>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <meta name="description" content="Registrations are open for the London Orca tournament on 3rd November 2018." />
      <meta name="image" content="https://orca2018.com/static/logo.png" />
      <meta itemProp="name" content="London Orca Tournament - 3rd Nov 2018" />
      <meta itemProp="description" content="Registrations are open for the London Orca tournament on 3rd November 2018." />
      <meta itemProp="image" content="https://orca2018.com/static/logo.png" />
      <meta name="og:title" content="London Orca Tournament - 3rd Nov 2018" />
      <meta name="og:description" content="Registrations are open for the London Orca tournament on 3rd November 2018." />
      <meta name="og:image" content="https://orca2018.com/static/logo.png" />
      <meta name="og:url" content="https://orca2018.com" />
      <meta name="og:site_name" content="London Orca Tournament - 3rd Nov 2018" />
      <meta name="og:locale" content="en_GB" />
      <meta name="og:type" content="website" />
    </Head>
    <Header>
      <img src='/static/logo.png' />
    </Header>
    <div>
      {children}
    </div>
  </Page>
);
