import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  padding: 12px 24px;
  background-color: #fff;
`;

export const ContainerText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 18px 0;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: #000;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  flex: 1;
  text-align: right;
`;

export const ButtonComment = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 4px;
  border-radius: 4px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #e1e1e6;
  border-radius: 24px;
  padding: 0 16px;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  color: #000;
  height: 42px;
  flex: 1;
`;

export const Button = styled.TouchableOpacity``;

export const Image = styled.Image``;
