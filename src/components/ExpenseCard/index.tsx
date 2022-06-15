import React from 'react';
import {
  Container,
  LeftContainer,
  Title,
  Subtitle,
  RightContainer,
  Amount,
  DateTime,
  BottomContainer,
  Image,
} from './styles';

interface ExpenseCardProps {
  merchant: string;
  user: {
    first: string;
    last: string;
    email: string;
  };
  amount: {
    value: string;
    currency: string;
  };
  dateTime: string;
  comment: string;
  receipts: any[];
}

export default function ExpenseCard({
  merchant,
  user,
  amount,
  dateTime,
  comment,
  receipts,
}: ExpenseCardProps) {
  return (
    <Container>
      <LeftContainer>
        <Title>{merchant}</Title>
        <Subtitle>{`${user.first} ${user.last}`}</Subtitle>
        <DateTime>{dateTime}</DateTime>
      </LeftContainer>
      <RightContainer>
        <Amount>{`$${amount.value} ${amount.currency}`}</Amount>
        <BottomContainer>
          <Image
            source={
              comment !== ''
                ? require('../../assets/images/comment.png')
                : require('../../assets/images/commentEmpty.png')
            }
          />
          <Image
            source={
              receipts === []
                ? require('../../assets/images/receiptEmpty.png')
                : require('../../assets/images/receipt.png')
            }
          />
        </BottomContainer>
      </RightContainer>
    </Container>
  );
}
