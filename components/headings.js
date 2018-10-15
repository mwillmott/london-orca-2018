import React from 'react';
import styled from 'styled-components';

import { colors } from '../utilities/colors';
import { device } from '../utilities/breakpoints';

export const H1 = styled.h1`
  margin: 0 0 .2em 0;
  font-size: 2.4em;
  font-weight: 700;

  @media ${device.tablet} {
    font-size: 3.2em;
  }
`;

export const H2 = styled.h2`
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
    background-color: ${props => colors[props.color || 'red']};
    left: 0;
    position: absolute;
    bottom: 0.2em;
    height: 0.2em;
    width: 100%;
    z-index: -1;
  }
`;

export const H3 = styled.h3`
  margin: 0;
  font-size: 1.4em;
  font-weight: 400;
  color: ${colors.red};
`;

export const H4 = styled.h3`
  margin: .5em 0;
  font-size: 1em;
  font-weight: 600;
  color: #070707;
`;
