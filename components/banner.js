import React from 'react';
import styled from 'styled-components';

import { colors } from '../utilities/colors';
import { device } from '../utilities/breakpoints';

const Banner = styled.div`
  width: 100%;
  margin: 1em 0 0 0;
  padding: 1em 2em;
  background: colors.red;
  color: white;
  border-radius: 3px;
  text-align: center;
`;

export default Banner;
