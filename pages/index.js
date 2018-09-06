import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const device = {
  mobile: `(min-width: 425px)`,
  tablet: `(min-width: 768px)`
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 2rem;
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

const Masthead = styled.div`
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
  padding: 1rem 4rem;
  margin: 2rem 0;
  background-color: #EFEFEF;
  text-align: center;

  p { font-size: 1.2em; }
`;

const Button = styled.a`
  display: inline-block;
  margin: 1em 0;
  padding: .8em 1.2em;
  font-size: 1.1em;
  font-weight: 300;
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

const H1 = styled.h1`
  margin: 0;
  font-size: 2.6em;
  font-family: 'Roboto Slab', serif;

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
  font-family: 'Roboto Slab', serif;

  @media ${device.tablet} {
    font-size: 2.8em;
  }

  ::after {
    content: "";
    background-color: #D1345B;
    left: 0;
    position: absolute;
    bottom: 8px;
    height: 0.2em;
    width: 100%;
    z-index: -1;
  }
`;

const H3 = styled.h3`
  margin: .5em 0;
  font-size: 1.4em;
  color: #D1345B;
`;

export default () =>
  <Page>
    <Header>
      <img src='/static/logo.png' />
    </Header>

    <Columns>
      <Masthead>
        <H1>
          The London 2018 Champagne Water Polo Tournament
        </H1>
        <H3>
          Crystal Palace, 3rd November 2018
        </H3>
        <Link prefetch href='/register'>
          <Button>Register Now</Button>
        </Link>
      </Masthead>
      <Teasers>
        <img className='polo' src='/static/water-polo.jpg' />
      </Teasers>
    </Columns>

    <Welcome>
      <H2>We're back!</H2>
      <p>
        We are closing off an incredible year of water polo with a final tournament in London. We
        will be returing to the Crystal Palace National Sports centre been exactly three years since
        our last tournament.
      </p>
    </Welcome>

  </Page>
