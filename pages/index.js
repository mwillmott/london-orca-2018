import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/layout';
import Button from '../components/button';
import Card from '../components/card';
import Banner from '../components/banner';
import { H1, H2, H3 } from '../components/headings';
import { device } from '../utilities/breakpoints';
import { colors } from '../utilities/colors';

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
    box-shadow: 10px 10px 0 ${colors.lightGrey};
  }
`;

const Welcome = styled.section`
  border-radius: 3px;
  padding: 1em 2em;
  margin: 2em 0;
  background-color: ${colors.lightGrey};
  text-align: center;

  @media ${device.tablet} {
    padding: 1em 6em;
  }

  p { font-size: 1.2em; }
`;

const WhatsOn = styled(Columns)`
  margin-top: 1.6em;
  justify-content: space-between;
`;

const List = styled.ul`
  margin: .2em 0;
  padding: 0 1em 0 0;
  list-style: none;

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
      color: ${props => colors[props.color || 'red']};
    }
  }
`;

export default () =>
  <Layout>
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
      <H2 color='green'>What's On</H2>
      <WhatsOn>
        <Card
          color='blue'
          photo='/static/crystal-palace.jpg'
          subtitle='9AM - 6PM, CRYSTAL PALACE SPORTS CENTRE'
          title='The Matches'
        >
          <List color='blue'>
            <li>Full day of matches across three pools</li>
            <li>One division (no competitive or rec split)</li>
            <li>Light breakfast & full lunch provided</li>
          </List>
        </Card>
        <Card
          photo='/static/party.jpg'
          subtitle='8PM - 3AM, EAST LONDON (VENUE TBC)'
          title='The Party!'
        >
          <List>
            <li>Food and a free drink included!</li>
            <li>Awards presentation & performances</li>
            <li>Costumes encouraged (theme to be announced soon!)</li>
          </List>
        </Card>
      </WhatsOn>
    </div>
  </Layout>
