import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 16px;
`;

export const SearchContainer = styled.View`
  margin: 36px 24px 16px 24px;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  background-color: #e1e1e6;
  border-radius: 24px;
`;

export const Image = styled.Image``;

export const Input = styled.TextInput`
  font-size: 16px;
  color: #000;
  height: 42px;
  margin-left: 6px;
  flex: 1;

  /* &::placeholder {
    color: #000;
    opacity: 50%;
  } */
`;

export const Button = styled.TouchableOpacity``;

export const FilterContainer = styled.View`
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;
`;

export const Checkbox = styled.Text``;

export const CheckboxText = styled.Text`
  margin-left: 4px;
`;
