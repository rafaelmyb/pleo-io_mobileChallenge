/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Container,
  ContainerText,
  Title,
  Text,
  ButtonComment,
  Input,
  Button,
  InputContainer,
  Image,
} from './styles';

interface CommentResponse {
  comment: string;
}

export default function ExpenseDetails({route}: any) {
  const {id, merchant, user, amount, date, comment, receipts} = route.params;
  const [showInput, setShowInput] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const [posted, setPosted] = useState(false);
  const [commentReturned, setCommentReturned] = useState('');

  function handleActiveInput() {
    setShowInput(true);
  }

  async function handleSubmitInput(value: string) {
    await axios.post(`http://192.168.100.102:3000/expenses/${id}`, {
      comment: value,
    });

    setPosted(true);
    setShowInput(false);
  }

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://192.168.100.102:3000/expenses/${id}`)
        .then(response => {
          setCommentReturned(response.data.comment);
          console.log(response.data.comment);
        });
    }
    fetchData();
  }, [posted, id]);

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
        {comment === '' && commentReturned === '' ? (
          <ButtonComment onPress={() => handleActiveInput()}>
            <Text>+ Add a comment</Text>
          </ButtonComment>
        ) : (
          <Text>{commentReturned}</Text>
        )}
      </ContainerText>
      {showInput ? (
        <InputContainer>
          <Input
            placeholder="Add a comment"
            onChangeText={text => setValueInput(text)}
          />
          <Button onPress={() => handleSubmitInput(valueInput)}>
            <Image source={require('../../assets/images/send.png')} />
          </Button>
        </InputContainer>
      ) : null}
      <ContainerText>
        <Title>RECEIPTS:</Title>
        <Text>{receipts}</Text>
      </ContainerText>
    </Container>
  );
}
