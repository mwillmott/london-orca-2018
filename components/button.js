import React from 'react';
import styled from 'styled-components';

import { colors } from '../utilities/colors';
import { device } from '../utilities/breakpoints';

const Button = styled.a`
  display: inline-block;
  margin: 1em 0;
  padding: .8em 1.2em;
  font-size: 1.1em;
  font-weight: 400;
  color: white;
  background: ${colors.blue};
  border-radius: 3px;
  cursor: pointer;
  transition: background .2s;

  @media ${device.mobile} {
    display: block;
  }

  :hover {
    background: ${colors.red};
  }
`;

export default Button;
