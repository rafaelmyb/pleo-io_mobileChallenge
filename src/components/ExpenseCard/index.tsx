import React from 'react';
import {Container, LeftContainer, Title, Subtitle, RightContainer, Amount, DateTime} from './styles';

export default function ExpenseCard() {
  return (
    <Container>
      <LeftContainer>
        <Title>QUONK</Title>
        <Subtitle>Atkins Blackburn</Subtitle>
      </LeftContainer>
      <RightContainer>
        <Amount>
          $2149.29 GBP
        </Amount>
        <DateTime>
          21 Jun, 2017 | 08:45
        </DateTime>
      </RightContainer>
    </Container>
  )
}