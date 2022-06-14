/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, ContainerText, Title, Text} from './styles';

export default function ExpenseDetails({route}: any) {
  const {merchant, user, amount, date, comment, receipts} = route.params;

  return (
    <Container>
      <ContainerText
        style={{
          marginTop: 0,
        }}>
        <Title>MERCHANT:</Title>
        <Text>{merchant}</Text>
      </ContainerText>
      <ContainerText>
        <Title>AMOUNT:</Title>
        <Text>${`${amount.value} ${amount.currency}`}</Text>
      </ContainerText>
      <ContainerText>
        <Title>USER:</Title>
        <Text>{`${user.first} ${user.last}`}</Text>
      </ContainerText>
      <ContainerText>
        <Title>EMAIL:</Title>
        <Text>{user.email}</Text>
      </ContainerText>
      <ContainerText>
        <Title>DATE:</Title>
        <Text>{date}</Text>
      </ContainerText>
      <ContainerText>
        <Title>COMMENT:</Title>
        <Text>{comment}</Text>
      </ContainerText>
      <ContainerText>
        <Title>RECEIPTS:</Title>
        <Text>{receipts}</Text>
      </ContainerText>
    </Container>
  );
}
