import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';

export const device = {
  mobile: `(min-width: 425px)`,
  tablet: `(min-width: 768px)`
};

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

const Columns = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 50%;
  text-align: center;

  @media ${device.tablet} {
    align-items: flex-start;
    text-align: left;
  }
`;

const Teasers = styled.div`
  position: relative;
  flex: 1 0 50%;
  padding: 20px;

  .polo {
    border-radius: 3px;
    max-width: 100%;
    box-shadow: 10px 10px 0 #EFEFEF;
  }
`;

const Welcome = styled.section`
  border-radius: 3px;
  padding: 1em 2em;
  margin: 2em 0;
  background-color: #EFEFEF;
  text-align: center;

  @media ${device.tablet} {
    padding: 1em 6em;
  }

  p { font-size: 1.2em; }
`;

const Button = styled.a`
  display: inline-block;
  margin: 1em 0;
  padding: .8em 1.2em;
  font-size: 1.1em;
  font-weight: 400;
  color: white;
  background: #3454D1;
  border-radius: 3px;
  cursor: pointer;
  transition: background .2s;

  @media ${device.mobile} {
    display: block;
  }

  :hover {
    background: #D1345B;
  }
`;

const Banner = styled.div`
  width: 100%;
  margin: 1em 0 0 0;
  padding: 1em 2em;
  background: #D1345B;
  color: white;
  border-radius: 3px;
  text-align: center;
`;

const H1 = styled.h1`
  margin: 0 0 .2em 0;
  font-size: 2.4em;
  font-weight: 700;

  @media ${device.tablet} {
    font-size: 3.2em;
  }
`;

const H2 = styled.h2`
  position: relative;
  display: inline-block;
  font-size: 2.2em;
  margin: 0;
  z-index: 2;

  @media ${device.tablet} {
    font-size: 2.8em;
  }

  ::after {
    content: "";
    background-color: ${props => props.green ? '#34D1BF' : '#D1345B'};
    left: 0;
    position: absolute;
    bottom: 0.2em;
    height: 0.2em;
    width: 100%;
    z-index: -1;
  }
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 1.4em;
  font-weight: 400;
  color: #D1345B;
`;

const H4 = styled.h3`
  margin: .5em 0;
  font-size: 1em;
  font-weight: 600;
  color: #070707;
`;

const WhatsOn = styled(Columns)`
  margin-top: 1.6em;
  justify-content: space-between;
`;

const Card = styled.section`
  flex: 0 0 48%;
  margin-bottom: 2em;

  ul {
    margin: .2em 0;
    padding: 0 1em 0 0;
    list-style: none;
  }

  li {
    font-size: 1.4em;
    padding: .2em 0 .2em 20px;

    ::before {
      display: inline-block;
      width: 20px;
      margin-left: -20px;
      content: '▶︎';
      font-size: 1em;
      padding: 0;
      color: ${props => props.matches ? '#3454D1' : '#D1345B'};
    }
  }
`;

const CardMask = styled.div`
  display: flex;
  width: 100%;
  height: 320px;
  margin-bottom: 25px;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 10px 10px 0 ${props => props.red ? '#D1345B' : '#3454D1'};
`;

const CardPhoto = styled.div`
  flex: 1 1 auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.src});
`;

const CardTitle = styled.h3`
  font-size: 2.2em;
  margin: 0;
  color: ${props => props.red ? '#D1345B' : '#3454D1'};
`

export default () =>
  <Page>
    <Head>
      <meta charSet="utf-8" />
      <title>London Orca Tournament - 3rd Nov 2018</title>
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

    <Columns>
      <Column>
        <H1>
          The London 2018 Champagne Water Polo Tournament
        </H1>
        <H3>
          Crystal Palace, 3rd November 2018
        </H3>
        <H3>
          £65 (Tournament + Party)
        </H3>
        <Link prefetch href='/register'>
          <Button>Register Now</Button>
        </Link>
      </Column>
      <Teasers>
        <img className='polo' src='/static/water-polo.jpg' />
      </Teasers>
    </Columns>

    <Banner>
      Register by 30th September to be eligible for hosted housing. Any registrations after this date will
      not be able to apply for hosted housing.
    </Banner>

    <Welcome>
      <H2>We're back!</H2>
      <p>
        We are closing off an incredible year of water polo with a final tournament in London. We
        are returning to the Crystal Palace National Sports centre, almost exactly three years since
        our last tournament. You can expect an intense day of matches followed by a private party,
        with performances, going on until the early hours of Sunday morning.
      </p>
    </Welcome>

    <div>
      <H2 green>What's On</H2>
      <WhatsOn>
        <Card matches>
          <CardMask>
            <CardPhoto src='/static/crystal-palace.jpg' />
          </CardMask>
          <H4>9AM - 6PM, CRYSTAL PALACE SPORTS CENTRE</H4>
          <CardTitle>The Matches</CardTitle>
          <ul>
            <li>Full day of matches across three pools</li>
            <li>One division (no competitive or rec split)</li>
            <li>Light breakfast & full lunch provided</li>
          </ul>
        </Card>
        <Card party>
          <CardMask red>
            <CardPhoto src='/static/party.jpg' />

          </CardMask>
          <H4>8PM - 3AM, EAST LONDON (VENUE TBC)</H4>
          <CardTitle red>The Party!</CardTitle>
          <ul>
            <li>Food and a free drink included!</li>
            <li>Awards presentation & performances</li>
            <li>Costumes encouraged (theme to be announced soon!)</li>
          </ul>
        </Card>
      </WhatsOn>
    </div>

  </Page>
