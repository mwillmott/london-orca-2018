import React from 'react';
import styled from 'styled-components';

import { colors } from '../utilities/colors';

const CardWrapper = styled.section`
  flex: 0 0 48%;
  margin-bottom: 2em;
`;

const CardMask = styled.div`
  display: flex;
  width: 100%;
  height: 320px;
  margin-bottom: 25px;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 10px 10px 0 ${props => colors[props.color]};
`;

const CardPhoto = styled.div`
  flex: 1 1 auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.src});
`;

const CardSubtitle = styled.span`
  margin: .5em 0;
  font-size: 1em;
  font-weight: 600;
  color: #070707;
`;

const CardTitle = styled.h3`
  font-size: 2.2em;
  margin: 0;
  color: ${props => colors[props.color]};
`;

const Card = ({ color = 'red', photo, title, subtitle, children }) => (
  <CardWrapper color={color}>
    <CardMask color={color}>
      <CardPhoto src={photo} />
    </CardMask>
    <CardSubtitle>{subtitle}</CardSubtitle>
    <CardTitle>{title}</CardTitle>
    {children}
  </CardWrapper>
);

export default Card;
